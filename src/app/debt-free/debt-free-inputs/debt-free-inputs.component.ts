import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DebtFreeInputsInterface } from './debt-free-inputs.interface';
import { DestroyService } from '../../commom/services/destroy.service';
import {
    INTEGER_REGEXP,
    FLOATING_REGEXP,
    DEBT_FREE_PAYMENT_TYPE,
} from '../../commom/constants';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-debt-free-inputs',
    templateUrl: './debt-free-inputs.component.html',
    styleUrls: ['./debt-free-inputs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class DebtFreeInputsComponent implements OnInit {
    readonly DEBT_FREE_PAYMENT_TYPE = DEBT_FREE_PAYMENT_TYPE;

    @Output() inputsSubmitted = new EventEmitter<DebtFreeInputsInterface>();

    form: FormGroup;

    isFormSubmitted = false;

    constructor(
        private _fb: FormBuilder,
        private _destroy$: DestroyService,
        private _cd: ChangeDetectorRef
    ) {
        this.form = this._fb.group({
            balance: [
                32300,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
            interest: [
                9.35,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(FLOATING_REGEXP),
                ]),
            ],
            paymentType: [DEBT_FREE_PAYMENT_TYPE.MIN_MONTHLY],
            payment: [
                1200,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
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
            const { balance, interest, paymentType, payment } =
                this.form.controls;
            this.inputsSubmitted.emit({
                balance: balance.value,
                interest: interest.value,
                paymentType: paymentType.value,
                payment: payment.value,
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
