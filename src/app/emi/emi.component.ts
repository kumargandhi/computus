import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { EMICalculatorInputsInterface } from './emi-calculator-inputs/emi-calculator-inputs.interface';

@Component({
    selector: 'app-emi',
    templateUrl: './emi.component.html',
    styleUrls: ['./emi.component.scss'],
})
export class EmiComponent implements OnInit {
    @Input() title = 'EMI Calculator';

    calculatorInputs!: EMICalculatorInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: EMICalculatorInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }
}
