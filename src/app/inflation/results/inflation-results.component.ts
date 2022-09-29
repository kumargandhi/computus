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
        this.computedValues = {
            monthlyExpenses: this._calculatorInputs.monthlyExpenses,
            years: this._calculatorInputs.years,
            inflationRate: this._calculatorInputs.inflationRate,
        };
        // TODO : Compute the inflation
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
        return loanDetails;
    }
}
