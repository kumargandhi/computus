import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { EMICalculatorInputsInterface } from '../emi-calculator-inputs/emi-calculator-inputs.interface';
import { NumberFormatterPipe } from '../../commom/pipes/number-formatter.pipe';
import { EMI_TENURE } from '../../commom/constants';
import { jsPDF } from 'jspdf';

@Component({
    selector: 'app-emi-calculator-results',
    templateUrl: './emi-calculator-results.component.html',
    styleUrls: ['./emi-calculator-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmiCalculatorResultsComponent implements OnInit {
    readonly nf = new NumberFormatterPipe();

    _calculatorInputs!: EMICalculatorInputsInterface;

    computedValues = {
        loanAmount: 0,
        interestRate: 0,
        tenure: EMI_TENURE.Monthly,
        tenureValue: 0,
        emi: 0,
        principalAmount: 0,
        interestAmount: 0,
        totalPayable: 0,
    };

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    @Input() title = '';

    constructor(private _cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    @Input()
    set calculatorInputs(value: EMICalculatorInputsInterface) {
        if (value) {
            this._calculatorInputs = value;
            this.calculate();
        }
    }

    /**
     * Calculate emi.
     */
    calculate() {
        this.resultsCalculated = false;
        this.errorModel.errorMsg = '';
        this.computedValues = {
            loanAmount: this._calculatorInputs.loanAmount,
            interestRate: this._calculatorInputs.interestRate,
            tenure: this._calculatorInputs.tenure,
            tenureValue: this._calculatorInputs.tenureValue,
            emi: 0,
            principalAmount: this._calculatorInputs.loanAmount,
            interestAmount: 0,
            totalPayable: 0,
        };
        if (this._calculatorInputs.tenure === EMI_TENURE.Yearly) {
            this.computedValues.tenureValue =
                this._calculatorInputs.tenureValue * 12;
        }
        const interest = this._calculatorInputs.interestRate / (12 * 100);
        this.computedValues.emi =
            (this.computedValues.principalAmount *
                interest *
                Math.pow(1 + interest, this.computedValues.tenureValue)) /
            (Math.pow(1 + interest, this.computedValues.tenureValue) - 1);
        this.computedValues.interestAmount =
            this.computedValues.emi * this.computedValues.tenureValue -
            this.computedValues.principalAmount;
        this.computedValues.totalPayable =
            this.computedValues.principalAmount +
            this.computedValues.interestAmount;
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
        const loanDetails = '';
        return loanDetails;
    }
}
