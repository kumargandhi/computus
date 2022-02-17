import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CagrInputsInterface } from './cagr-inputs.interface';
import { DestroyService } from '../../commom/services/destroy.service';
import { INTEGER_REGEXP } from '../../commom/constants';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-cagr-inputs',
    templateUrl: './cagr-inputs.component.html',
    styleUrls: ['./cagr-inputs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class CagrInputsComponent implements OnInit {
    @Output() inputsSubmitted = new EventEmitter<CagrInputsInterface>();

    form: FormGroup;

    isFormSubmitted = false;

    constructor(
        private _fb: FormBuilder,
        private _destroy$: DestroyService,
        private _cd: ChangeDetectorRef
    ) {
        this.form = this._fb.group({
            purchaseValue: [
                15000,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(INTEGER_REGEXP),
                ]),
            ],
            presentValue: [
                9500,
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
            const { purchaseValue, presentValue, years } = this.form.controls;
            this.inputsSubmitted.emit({
                purchaseValue: purchaseValue.value,
                presentValue: presentValue.value,
                years: years.value,
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
