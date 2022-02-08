import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { InterestCalculatorInputsInterface } from '../interest-calculator-inputs/interest-calculator-inputs.interface';
import { NumberFormatterPipe } from '../../commom/pipes/number-formatter.pipe';
import { COMPOUNDED_INTEREST_TYPE } from '../../commom/constants';
import { jsPDF } from 'jspdf';

@Component({
    selector: 'app-interest-calculator-results',
    templateUrl: './interest-calculator-results.component.html',
    styleUrls: ['./interest-calculator-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestCalculatorResultsComponent implements OnInit {
    readonly nf = new NumberFormatterPipe();

    _calculatorInputs!: InterestCalculatorInputsInterface;

    computedValues = {
        principal: 0,
        year: 0,
        rate: 0,
        compoundedInterest: COMPOUNDED_INTEREST_TYPE.Annually,
        interestUnits: 0,
        interestAmount: 0,
        annualRate: 0,
    };

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    @Input() title = '';

    constructor(private _cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    @Input()
    set calculatorInputs(value: InterestCalculatorInputsInterface) {
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
            principal: this._calculatorInputs.principal,
            year: this._calculatorInputs.year,
            rate: this._calculatorInputs.rate,
            compoundedInterest: this._calculatorInputs.compoundedInterest,
            interestUnits: this._getInterestUnits(
                this._calculatorInputs.compoundedInterest
            ),
            interestAmount: 0,
            annualRate: 0,
        };
        this.computedValues.rate =
            this.computedValues.rate /
                (100 * this.computedValues.interestUnits) +
            1;
        this.computedValues.rate = Math.pow(
            this.computedValues.rate,
            this.computedValues.interestUnits
        );

        this.computedValues.interestAmount =
            this.computedValues.principal *
            Math.pow(this.computedValues.rate, this.computedValues.year);
        this.computedValues.interestAmount =
            this.computedValues.interestAmount * 100;
        this.computedValues.interestAmount = Math.round(
            this.computedValues.interestAmount
        );
        this.computedValues.interestAmount =
            this.computedValues.interestAmount / 100;

        this.computedValues.annualRate = this.computedValues.rate * 100 - 100;
        this.computedValues.annualRate =
            this.computedValues.annualRate * 1000000000;
        this.computedValues.annualRate = Math.round(
            this.computedValues.annualRate
        );
        this.computedValues.annualRate =
            this.computedValues.annualRate / 1000000000;
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

    private _getInterestUnits(value: COMPOUNDED_INTEREST_TYPE): number {
        if (value === COMPOUNDED_INTEREST_TYPE.Annually) {
            return 1;
        } else if (value === COMPOUNDED_INTEREST_TYPE.Semi_Annually) {
            return 2;
        } else if (value === COMPOUNDED_INTEREST_TYPE.Quarterly) {
            return 4;
        } else if (value === COMPOUNDED_INTEREST_TYPE.Monthly) {
            return 12;
        } else if (value === COMPOUNDED_INTEREST_TYPE.Daily) {
            return 365;
        } else if (value === COMPOUNDED_INTEREST_TYPE.Continuously) {
            return 1000;
        }
        return 0;
    }

    private _getLoanDetails() {
        let loanDetails = '';
        loanDetails =
            'Interest details:' +
            '\n\n' +
            'Principal: ' +
            this.nf.transform(this._calculatorInputs.principal);
        loanDetails =
            loanDetails + '\n' + 'Year: ' + this._calculatorInputs.year;
        loanDetails =
            loanDetails + '\n' + 'Rate: ' + this._calculatorInputs.rate;
        loanDetails =
            loanDetails +
            '\n' +
            'Compounded interest: ' +
            this._calculatorInputs.compoundedInterest;
        loanDetails = loanDetails + '\n\n' + 'Summary:';
        loanDetails =
            loanDetails +
            '\n\n' +
            this.nf.transform(this.computedValues.interestAmount) +
            ' - is your Interest.';
        loanDetails =
            loanDetails +
            '\n' +
            'Effective Annual Rate = ' +
            this.nf.transform(this.computedValues.annualRate) +
            '%';
        return loanDetails;
    }
}
