import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MortgageInputsInterface } from './mortgage-inputs/mortgage-inputs.interface';

@Component({
    selector: 'app-mortgage',
    templateUrl: './mortgage.component.html',
    styleUrls: ['./mortgage.component.scss'],
})
export class MortgageComponent implements OnInit {
    @Input() title = 'Mortgage Calculator';

    calculatorInputs!: MortgageInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: MortgageInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }
}
