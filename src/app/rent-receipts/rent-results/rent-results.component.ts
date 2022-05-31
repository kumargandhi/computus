import { Component, Input, OnInit } from '@angular/core';
import { RentReceiptsInputsInterface } from '../rent-inputs/rent-receipts-inputs.interface';

@Component({
    selector: 'app-rent-results',
    templateUrl: './rent-results.component.html',
    styleUrls: ['./rent-results.component.scss'],
})
export class RentResultsComponent implements OnInit {
    _calculatorInputs!: RentReceiptsInputsInterface;

    constructor() {}

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
    generateReceipts() {}
}
