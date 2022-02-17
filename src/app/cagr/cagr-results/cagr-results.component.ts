import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { CagrInputsInterface } from '../cagr-inputs/cagr-inputs.interface';
import { NumberFormatterPipe } from '../../commom/pipes/number-formatter.pipe';
import { jsPDF } from 'jspdf';

@Component({
    selector: 'app-cagr-results',
    templateUrl: './cagr-results.component.html',
    styleUrls: ['./cagr-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CagrResultsComponent implements OnInit {
    readonly nf = new NumberFormatterPipe();

    _calculatorInputs!: CagrInputsInterface;

    computedValues = {
        purchaseValue: 0,
        presentValue: 0,
        years: 0,
        cagr: 0,
    };

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    @Input() title = '';

    constructor(private _cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    @Input()
    set calculatorInputs(value: CagrInputsInterface) {
        if (value) {
            this._calculatorInputs = value;
            this.calculate();
        }
    }

    /**
     * Calculate Interest.
     */
    calculate() {
        this.resultsCalculated = false;
        this.errorModel.errorMsg = '';
        this.computedValues = {
            purchaseValue: this._calculatorInputs.purchaseValue,
            presentValue: this._calculatorInputs.presentValue,
            years: this._calculatorInputs.years,
            cagr: 0,
        };
        this.computedValues.cagr =
            (Math.pow(
                this.computedValues.presentValue /
                    this.computedValues.purchaseValue,
                1 / this.computedValues.years
            ) -
                1) *
            100;
        this._cd.markForCheck();
        this.resultsCalculated = true;
    }

    exportToPDF() {}
}
