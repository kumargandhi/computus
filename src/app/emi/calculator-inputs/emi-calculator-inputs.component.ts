import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMICalculatorInputsInterface } from './emi-calculator-inputs.interface';
import { DestroyService } from '../../commom/services/destroy.service';
import {
    EMI_TENURE,
    FLOATING_REGEXP,
    INTEGER_REGEXP,
} from '../../commom/constants';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-emi-calculator-inputs',
    templateUrl: './emi-calculator-inputs.component.html',
    styleUrls: ['./emi-calculator-inputs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class EMICalculatorInputsComponent implements OnInit {
    @Output() inputsSubmitted =
        new EventEmitter<EMICalculatorInputsInterface>();

    form: FormGroup;

    isFormSubmitted = false;

    constructor(
        private _fb: FormBuilder,
        private _destroy$: DestroyService,
        private _cd: ChangeDetectorRef
    ) {
        this.form = this._fb.group({
            loanAmount: [
                800000,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
            interestRate: [
                5.5,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(FLOATING_REGEXP),
                ]),
            ],
            tenure: [EMI_TENURE.Monthly],
            tenureValue: [36],
        });
        this.form.valueChanges
            .pipe(takeUntil(this._destroy$))
            .subscribe((data) => {
                this.onValueChanged(data);
            });
    }

    ngOnInit(): void {
        this.validateForm();
    }

    validateForm() {
        this.isFormSubmitted = true;
        if (this.form.valid) {
            const { loanAmount, interestRate, tenure, tenureValue } =
                this.form.controls;
            this.inputsSubmitted.emit({
                loanAmount: loanAmount.value,
                interestRate: interestRate.value,
                tenure: tenure.value,
                tenureValue: tenureValue.value,
            });
        }
    }

    onValueChanged(data?: any) {
        if (!data) {
            return;
        }
        // Do something!
    }
}
