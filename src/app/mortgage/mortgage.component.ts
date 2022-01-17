import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CalculatorInputsInterface } from './calculator-inputs/calculator-inputs.interface';

@Component({
    selector: 'app-mortgage',
    templateUrl: './mortgage.component.html',
    styleUrls: ['./mortgage.component.scss'],
})
export class MortgageComponent implements OnInit {
    @Input() title = 'Mortgage Calculator';

    calculatorInputs!: CalculatorInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: CalculatorInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }
}
