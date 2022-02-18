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

    exportToPDF() {
        // Creating a unique file name for my PDF
        const fileName =
            this.title.replace(' ', '_') +
            '_' +
            Math.floor(Math.random() * 1000000 + 1) +
            '.pdf';
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        const titleXPos =
            doc.internal.pageSize.getWidth() / 2 -
            doc.getTextWidth(this.title) / 2;
        doc.text(this.title, titleXPos, 20);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(this._getLoanDetails(), 10, 30);
        doc.save(fileName);
    }

    private _getLoanDetails() {
        let loanDetails = '';
        loanDetails =
            'Purchase item details:' +
            '\n\n' +
            'Purchase value: ' +
            this.nf.transform(this._calculatorInputs.purchaseValue);
        loanDetails =
            loanDetails +
            '\n' +
            'Present value: ' +
            this.nf.transform(this._calculatorInputs.presentValue);
        loanDetails =
            loanDetails + '\n' + 'Years: ' + this._calculatorInputs.years;
        loanDetails = loanDetails + '\n\n' + 'Summary:';
        loanDetails =
            loanDetails +
            '\n\n' +
            this.nf.transform(this.computedValues.cagr) +
            " - is 'Compound Annualised Growth Rate'.";
        return loanDetails;
    }
}
