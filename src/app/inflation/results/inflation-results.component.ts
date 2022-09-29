import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { NumberFormatterPipe } from '../../commom/pipes/number-formatter.pipe';
import { jsPDF } from 'jspdf';
import { InflationInputsInterface } from '../inputs/inflation-inputs.interface';

@Component({
    selector: 'app-inflation-results',
    templateUrl: './inflation-results.component.html',
    styleUrls: ['./inflation-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InflationResultsComponent implements OnInit {
    readonly nf = new NumberFormatterPipe();

    _calculatorInputs!: InflationInputsInterface;

    computedValues = {
        monthlyExpenses: 0,
        years: 0,
        inflationRate: 0,
        requiredMonthlyExpenses: 0,
        futureExpenses: 0,
    };

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    @Input() title = '';

    constructor(private _cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    @Input()
    set calculatorInputs(value: InflationInputsInterface) {
        if (value) {
            this._calculatorInputs = value;
            this.calculate();
        }
    }

    /**
     * Calculate Inflation.
     */
    calculate() {
        this.resultsCalculated = false;
        this.errorModel.errorMsg = '';
        const cInflationRate = this._calculatorInputs.inflationRate / 100;
        const requiredMonthlyExpenses =
            this._calculatorInputs.monthlyExpenses *
            Math.pow(1 + cInflationRate, this._calculatorInputs.years);
        this.computedValues = {
            monthlyExpenses: this._calculatorInputs.monthlyExpenses,
            years: this._calculatorInputs.years,
            inflationRate: cInflationRate,
            requiredMonthlyExpenses: requiredMonthlyExpenses,
            futureExpenses:
                requiredMonthlyExpenses -
                this._calculatorInputs.monthlyExpenses,
        };
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
            'Inflation details:' +
            '\n\n' +
            'Monthly Expenses: ' +
            this.nf.transform(this._calculatorInputs.monthlyExpenses);
        loanDetails +=
            '\n' + 'Years: ' + this.nf.transform(this._calculatorInputs.years);
        loanDetails +=
            '\n' +
            'Inflation Rate: ' +
            this.nf.transform(this._calculatorInputs.inflationRate);

        loanDetails += '\n\n' + 'Summary:';
        loanDetails +=
            '\n\n' +
            this.nf.transform(this.computedValues.requiredMonthlyExpenses) +
            ` - is required for monthly expense in ${this.computedValues.years} years`;
        loanDetails +=
            '\n\n' +
            this.nf.transform(this.computedValues.futureExpenses) +
            ` - more you require at ${this.computedValues.years} years`;
        return loanDetails;
    }
}
