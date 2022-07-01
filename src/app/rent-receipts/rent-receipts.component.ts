import { Component, Input, OnInit } from '@angular/core';
import { RentReceiptsInputsInterface } from './rent-inputs/rent-receipts-inputs.interface';
import * as _ from 'lodash';

@Component({
    selector: 'app-rent-receipts',
    templateUrl: './rent-receipts.component.html',
    styleUrls: ['./rent-receipts.component.scss'],
})
export class RentReceiptsComponent implements OnInit {
    @Input() title = 'Rent receipts generator';

    calculatorInputs: RentReceiptsInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: RentReceiptsInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }

    goBack($event) {
        this.calculatorInputs = null;
    }
}
