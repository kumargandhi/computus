import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CagrInputsInterface } from './cagr-inputs/cagr-inputs.interface';

@Component({
    selector: 'app-cagr',
    templateUrl: './cagr.component.html',
    styleUrls: ['./cagr.component.scss'],
})
export class CagrComponent implements OnInit {
    @Input() title = 'CAGR Calculator';

    calculatorInputs!: CagrInputsInterface;

    constructor() {}

    ngOnInit(): void {}

    inputsSubmitted($event: CagrInputsInterface) {
        this.calculatorInputs = _.cloneDeep($event);
    }
}
