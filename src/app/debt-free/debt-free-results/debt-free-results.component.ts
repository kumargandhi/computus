import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { DebtFreeInputsInterface } from '../debt-free-inputs/debt-free-inputs.interface';
import { NumberFormatterPipe } from '../../commom/pipes/number-formatter.pipe';
import { DEBT_FREE_PAYMENT_TYPE } from '../../commom/constants';
import { jsPDF } from 'jspdf';

interface BalanceSheet {
    month: number;
    interest: number;
    principal: number;
    balance: number;
}

@Component({
    selector: 'app-debt-free-results',
    templateUrl: './debt-free-results.component.html',
    styleUrls: ['./debt-free-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebtFreeResultsComponent implements OnInit {
    readonly nf = new NumberFormatterPipe();

    _calculatorInputs!: DebtFreeInputsInterface;

    computedValues = {
        balance: 0,
        interest: 0,
        paymentType: DEBT_FREE_PAYMENT_TYPE.MIN_MONTHLY,
        payment: 0,
        totalMonths: 0,
        finalResultsForMonth: '',
        totalInterest: 0,
    };

    balanceSheet!: BalanceSheet[];

    errorModel = {
        errorMsg: '',
    };

    resultsCalculated = false;

    @Input() title = '';

    constructor(private _cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    @Input()
    set calculatorInputs(value: DebtFreeInputsInterface) {
        if (value) {
            this._calculatorInputs = value;
            this.calculate();
        }
    }

    /**
     * Calculate debt free plan.
     */
    calculate() {
        this.resultsCalculated = false;
        this.errorModel.errorMsg = '';
        this.computedValues = {
            balance: this._calculatorInputs.balance,
            interest: this._calculatorInputs.interest / 12,
            paymentType: this._calculatorInputs.paymentType,
            payment: this._calculatorInputs.payment,
            totalMonths: 0,
            finalResultsForMonth: '',
            totalInterest: 0,
        };

        let calBalance = 0;
        do {
            this.computedValues.totalMonths =
                this.computedValues.totalMonths + 1;

            calBalance = this.getBalance(
                this.computedValues.balance,
                this.computedValues.interest,
                this.computedValues.payment,
                this.computedValues.totalMonths
            );

            if (calBalance < this.computedValues.balance) {
                this.computedValues.balance = calBalance;
            } else {
                calBalance = 0;
                this.errorModel.errorMsg =
                    'The amount ' +
                    this.nf.transform(this.computedValues.payment) +
                    ', you plan to spend each month is' +
                    ' not enough to ever pay off your credit card debts.';
                this.resultsCalculated = true;
            }

            if (this.computedValues.totalMonths > 1200) {
                calBalance = 0;
                this.errorModel.errorMsg =
                    'The payment your making is not enough to become Debt Free, it take more then 100 Years to clear payments.';
                this.resultsCalculated = true;
            }
        } while (calBalance > 0);

        if (!this.errorModel.errorMsg) {
            if (this.computedValues.totalMonths < 12) {
                this.computedValues.finalResultsForMonth =
                    this.computedValues.totalMonths + ' Months';
            } else {
                const years = Math.floor(this.computedValues.totalMonths / 12);
                const remMonths = this.computedValues.totalMonths % 12;
                if (this.computedValues.totalMonths > 0) {
                    this.computedValues.finalResultsForMonth =
                        years + ' Year and ' + remMonths + ' Months';
                } else {
                    this.computedValues.finalResultsForMonth =
                        Math.round(years) + ' Year';
                }
            }
        }
    }

    getBalance(
        balance: number,
        interest: number,
        payment: number,
        month: number
    ) {
        let calBal = 0;
        let calInt = balance * (interest / 100);

        calInt = Math.round(calInt * 100) / 100;
        calBal = balance - payment;

        this.computedValues.totalInterest =
            this.computedValues.totalInterest + calInt;
        if (calBal > 0) {
            calBal = calBal + calInt;
        } else {
            payment = balance + calInt;
            calBal = 0;
        }
        this.balanceSheet.push({
            month: month,
            interest: calInt,
            principal: payment - calInt,
            balance: calBal,
        });
        return Math.round(calBal * 100) / 100;
    }

    exportToPDF() {}
}
