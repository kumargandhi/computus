import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DebtFreeInputsInterface } from './debt-free-inputs/debt-free-inputs.interface';

@Component({
    selector: 'app-debt-free',
    templateUrl: './debt-free.component.html',
    styleUrls: ['./debt-free.component.scss'],
})
export class DebtFreeComponent implements OnInit {
    @Input() title = 'CAGR Calculator';

    calculatorInputs!: DebtFreeInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: DebtFreeInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }
}
