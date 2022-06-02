import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { RentReceiptsInputsInterface } from '../rent-inputs/rent-receipts-inputs.interface';
import { RentReceiptsInterface } from './rent-receipts.interface';

@Component({
    selector: 'app-rent-results',
    templateUrl: './rent-results.component.html',
    styleUrls: ['./rent-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentResultsComponent implements OnInit {
    _calculatorInputs!: RentReceiptsInputsInterface;

    // eslint-disable-next-line @typescript-eslint/ban-types
    computedValues: {} | undefined;

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    rentReceipts!: RentReceiptsInterface[];

    previewRentReceipt!: RentReceiptsInterface;

    constructor(private _cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    @Input()
    set calculatorInputs(value: RentReceiptsInputsInterface) {
        if (value) {
            this._calculatorInputs = value;
            this.generateReceipts();
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

    downloadReceipts() {}
}
