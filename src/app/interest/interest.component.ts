import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { InterestCalculatorInputsInterface } from './interest-calculator-inputs/interest-calculator-inputs.interface';

@Component({
    selector: 'app-interest',
    templateUrl: './interest.component.html',
    styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
    @Input() title = 'Interest Calculator';

    calculatorInputs!: InterestCalculatorInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: InterestCalculatorInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }
}
