import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterestCalculatorInputsInterface } from './interest-calculator-inputs.interface';
import { DestroyService } from '../../commom/services/destroy.service';
import {
    COMPOUNDED_INTEREST_TYPE,
    FLOATING_REGEXP,
    INTEGER_REGEXP,
} from '../../commom/constants';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-interest-calculator-inputs',
    templateUrl: './interest-calculator-inputs.component.html',
    styleUrls: ['./interest-calculator-inputs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class InterestCalculatorInputsComponent implements OnInit {
    readonly COMPOUNDED_INTEREST_TYPE = COMPOUNDED_INTEREST_TYPE;

    @Output() inputsSubmitted =
        new EventEmitter<InterestCalculatorInputsInterface>();

    form: FormGroup;

    isFormSubmitted = false;

    interestTypes = Object.values(COMPOUNDED_INTEREST_TYPE);

    selectedInterestType = COMPOUNDED_INTEREST_TYPE.Annually;

    constructor(
        private _fb: FormBuilder,
        private _destroy$: DestroyService,
        private _cd: ChangeDetectorRef
    ) {
        this.form = this._fb.group({
            principal: [
                650000,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
            year: [
                10,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
            rate: [
                6.2,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(FLOATING_REGEXP),
                ]),
            ],
            compoundedInterest: [COMPOUNDED_INTEREST_TYPE.Annually],
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
            const { principal, year, rate } = this.form.controls;
            this.inputsSubmitted.emit({
                principal: principal.value,
                year: year.value,
                rate: rate.value,
                compoundedInterest: this.selectedInterestType,
            });
        }
    }

    onValueChanged(data?: any) {
        if (!data) {
            return;
        }
        // Do something!
    }

    interestTypeChanged(value: COMPOUNDED_INTEREST_TYPE) {
        this.selectedInterestType = value;
        this.validateForm();
    }
}
