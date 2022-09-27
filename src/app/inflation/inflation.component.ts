import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { InflationInputsInterface } from './inputs/inflation-inputs.interface';

@Component({
    selector: 'app-inflation',
    templateUrl: './inflation.component.html',
    styleUrls: ['./inflation.component.scss'],
})
export class InflationComponent implements OnInit {
    @Input() title = 'Inflation Calculator';

    calculatorInputs: InflationInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: InflationInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }
}
