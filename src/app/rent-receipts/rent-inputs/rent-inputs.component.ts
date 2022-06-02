import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { RentReceiptsInputsInterface } from './rent-receipts-inputs.interface';
import {
    FLOATING_REGEXP,
    INTEGER_REGEXP,
    PAN_REGEXP,
    RECEIPT_FORMAT,
} from '../../commom/constants';
import { DestroyService } from '../../commom/services/destroy.service';

enum Form_Input_Mode {
    Basic_Details,
    Property_Details,
    Finish,
}

@Component({
    selector: 'app-rent-inputs',
    templateUrl: './rent-inputs.component.html',
    styleUrls: ['./rent-inputs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class RentInputsComponent implements OnInit {
    readonly Form_Input_Mode = Form_Input_Mode;
    readonly RECEIPT_FORMAT = RECEIPT_FORMAT;

    @Output() inputsSubmitted = new EventEmitter<RentReceiptsInputsInterface>();

    form: FormGroup;

    isFormSubmitted = false;

    formMode = Form_Input_Mode.Basic_Details;

    constructor(
        private _fb: FormBuilder,
        private _destroy$: DestroyService,
        private _cd: ChangeDetectorRef
    ) {
        this.form = this._fb.group({
            myName: ['Ramesh Kumar', Validators.compose([Validators.required])],
            monthlyRent: [
                15200,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(FLOATING_REGEXP),
                ]),
            ],
            panNumber: [
                'MLLMN1213M',
                Validators.compose([
                    Validators.required,
                    Validators.pattern(PAN_REGEXP),
                ]),
            ],
            receiptFormat: [RECEIPT_FORMAT.Monthly],
            ownerName: [
                'Suresh Kumar',
                Validators.compose([Validators.required]),
            ],
            ownerPANNumber: [
                'PLLMN1213P',
                Validators.compose([
                    Validators.required,
                    Validators.pattern(PAN_REGEXP),
                ]),
            ],
            startDate: ['01/01/2022'],
            endDate: ['03/31/2022'],
            address: [
                'Door No. 1, Gandhi road, Opp Anjeneya temple, Bangalore, 560066.',
            ],
        });
        this.form.valueChanges
            .pipe(takeUntil(this._destroy$))
            .subscribe((data) => {
                this.onValueChanged(data);
            });
    }

    ngOnInit(): void {
        // this.validateForm();
    }

    next() {
        if (!this.form.valid) {
            // return;
        }
        this.formMode = Form_Input_Mode.Property_Details;
    }

    back() {
        this.formMode = Form_Input_Mode.Basic_Details;
    }

    finish() {
        if (!this.form.valid) {
            // return;
        }
        this.formMode = Form_Input_Mode.Finish;
        this.validateForm();
    }

    editDetails() {
        this.back();
    }

    validateForm() {
        this.isFormSubmitted = true;
        if (this.form.valid) {
            const {
                myName,
                monthlyRent,
                panNumber,
                receiptFormat,
                ownerName,
                ownerPANNumber,
                startDate,
                endDate,
                address,
            } = this.form.controls;
            this.inputsSubmitted.emit({
                myName: myName.value,
                monthlyRent: monthlyRent.value,
                panNumber: panNumber.value,
                receiptFormat: receiptFormat.value,
                ownerName: ownerName.value,
                ownerPANNumber: ownerPANNumber.value,
                startDate: startDate.value,
                endDate: endDate.value,
                address: address.value,
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
