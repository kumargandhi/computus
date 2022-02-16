import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-cagr-inputs',
    templateUrl: './cagr-inputs.component.html',
    styleUrls: ['./cagr-inputs.component.scss'],
})
export class CagrInputsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
