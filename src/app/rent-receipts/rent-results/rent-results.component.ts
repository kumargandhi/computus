import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { RentReceiptsInputsInterface } from '../rent-inputs/rent-receipts-inputs.interface';
import { ReceiptDateRangeInterface } from './rent-receipts.interface';
import { jsPDF } from 'jspdf';
import { RECEIPT_FORMAT } from 'src/app/commom/constants';
import { getMonthDifference } from 'src/app/commom/helpers';
import { cloneDeep } from 'lodash';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-rent-results',
    templateUrl: './rent-results.component.html',
    styleUrls: ['./rent-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DatePipe],
})
export class RentResultsComponent implements OnInit {
    @Input() title = '';

    _calculatorInputs: RentReceiptsInputsInterface;

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    receiptDateRanges!: ReceiptDateRangeInterface[];

    @ViewChild('rentReceiptsDiv') rentReceiptsDiv: ElementRef;

    constructor(private _cd: ChangeDetectorRef, private datePipe: DatePipe) {}

    ngOnInit(): void {}

    @Input()
    set calculatorInputs(value: RentReceiptsInputsInterface) {
        if (value) {
            this._calculatorInputs = value;
            this.generateReceipts();
        } else {
            this._calculatorInputs = null;
            this.resultsCalculated = false;
        }
    }

    /**
     * Generate the receipts on page
     */
    generateReceipts() {
        this.resultsCalculated = false;
        this.errorModel.errorMsg = '';
        this.receiptDateRanges = [];
        // Generate the receipts data as per the format
        if (this._calculatorInputs.receiptFormat === RECEIPT_FORMAT.Monthly) {
            const totalMonths = getMonthDifference(
                this._calculatorInputs.startDate,
                this._calculatorInputs.endDate
            );
            if (!totalMonths) {
                this.errorModel.errorMsg =
                    'Please select valid months. Like, you need atleast a month gap between start and end dates.';
                return;
            }
            let startDate = cloneDeep(this._calculatorInputs.startDate);
            for (let i = 0; i < totalMonths; i++) {
                const fromDate = cloneDeep(startDate);
                const toDate = new Date(
                    startDate.setMonth(startDate.getMonth() + 1)
                );
                let dateRange: ReceiptDateRangeInterface = {
                    fromDate: fromDate,
                    toDate: toDate,
                };
                this.receiptDateRanges.push(dateRange);
                startDate = cloneDeep(toDate);
            }
        } else {
            // TODO : For yearly
        }
        this._cd.markForCheck();
        this.resultsCalculated = true;
    }

    getDescriptionForPreview(from: Date, to: Date) {
        return `Received sum of <strong>${
            this._calculatorInputs.monthlyRent
        }</strong> from <strong>${
            this._calculatorInputs.myName
        }</strong> towards the rent of property located at ${
            this._calculatorInputs.address
        } for the period from ${this.datePipe.transform(
            from,
            'dd/MM/yyyy'
        )} to ${this.datePipe.transform(to, 'dd/MM/yyyy')}`;
    }

    /**
     * Create the PDF receipts and download them.
     */
    downloadReceipts() {
        const fileName = `${this.title}.pdf`;
        const doc = new jsPDF();
        doc.html(this.rentReceiptsDiv.nativeElement as HTMLElement, {
            callback: (d) => {
                d.save(fileName);
            },
            margin: 0,
            autoPaging: true,
            width: 200,
            windowWidth: this.rentReceiptsDiv.nativeElement.clientWidth,
            x: 5,
            y: 0,
        });
    }
}
