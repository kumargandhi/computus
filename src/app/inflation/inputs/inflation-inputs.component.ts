import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestroyService } from '../../commom/services/destroy.service';
import { FLOATING_REGEXP, INTEGER_REGEXP } from '../../commom/constants';
import { takeUntil } from 'rxjs/operators';
import { InflationInputsInterface } from './inflation-inputs.interface';

@Component({
    selector: 'app-inflation-inputs',
    templateUrl: './inflation-inputs.component.html',
    styleUrls: ['./inflation-inputs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class InflationInputsComponent implements OnInit {
    @Output() inputsSubmitted = new EventEmitter<InflationInputsInterface>();

    form: FormGroup;

    isFormSubmitted = false;

    constructor(
        private _fb: FormBuilder,
        private _destroy$: DestroyService,
        private _cd: ChangeDetectorRef
    ) {
        this.form = this._fb.group({
            monthlyExpenses: [
                15000,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
            years: [
                5,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
            inflationRate: [
                7.3,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(FLOATING_REGEXP),
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
            const { monthlyExpenses, years, inflationRate } =
                this.form.controls;
            this.inputsSubmitted.emit({
                monthlyExpenses: monthlyExpenses.value,
                years: years.value,
                inflationRate: inflationRate.value,
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
