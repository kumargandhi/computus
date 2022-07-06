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
import { RentReceiptsInterface, ReceiptDateRangeInterface } from './rent-receipts.interface';
import { jsPDF } from 'jspdf';
import { RECEIPT_FORMAT } from 'src/app/commom/constants';
import { getMonthDifference } from 'src/app/commom/helpers';

@Component({
    selector: 'app-rent-results',
    templateUrl: './rent-results.component.html',
    styleUrls: ['./rent-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentResultsComponent implements OnInit {

    @Input() title = '';

    _calculatorInputs: RentReceiptsInputsInterface;

    computedValues: {} | undefined;

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    receiptDateRanges!: ReceiptDateRangeInterface[];

    previewRentReceipt!: RentReceiptsInterface;

    error: string;

    @ViewChild('rentReceiptsDiv') rentReceiptsDiv: ElementRef;

    constructor(private _cd: ChangeDetectorRef) {}

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
        this.computedValues = {};
        this.previewRentReceipt = {
            receiptFormat: this._calculatorInputs.receiptFormat,
            fromDate: this._calculatorInputs.startDate,
            toDate: this._calculatorInputs.endDate,
            sumOf: this._calculatorInputs.monthlyRent,
            from: this._calculatorInputs.myName,
            propertyAddress: this._calculatorInputs.address,
            ownerName: this._calculatorInputs.ownerName,
            ownerPAN: this._calculatorInputs.ownerPANNumber,
            desc: '',
        };
        this.previewRentReceipt.desc = this.getDescriptionForPreview();
        this._cd.markForCheck();
        this.resultsCalculated = true;
    }

    getDescriptionForPreview() {
        return `Received sum of <strong>${this.previewRentReceipt.sumOf}</strong> from <strong>${this.previewRentReceipt.from}</strong> towards the rent of property located at ${this.previewRentReceipt.propertyAddress} for the period from ${this.previewRentReceipt.fromDate} to ${this.previewRentReceipt.toDate}`;
    }

    /**
     * Create the PDF receipts and download them.
     */
    downloadReceipts() {
        this.error = null;
        this.receiptDateRanges = [];
        // Generate the receipts data as per the format
        // TODO : Need to compute the date ranges for monthly format
        if (this.previewRentReceipt.receiptFormat === RECEIPT_FORMAT.Monthly) {
            const totalMonths = getMonthDifference(this.previewRentReceipt.fromDate, this.previewRentReceipt.toDate);
            if (!totalMonths) {
                this.error = 'Please select valid months. Like, you need atleast a month gap between start and end dates.';
                return;
            }
            for (let i = 0; i < totalMonths; i++) {
                let dateRange: ReceiptDateRangeInterface = {
                    fromDate: '',
                    toDate: ''
                };
                this.receiptDateRanges.push(dateRange);
            }
        } else {
            // TODO : For yearly
        }
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
            y: 0
        });
    }
}
