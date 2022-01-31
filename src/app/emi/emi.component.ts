import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-emi',
    templateUrl: './emi.component.html',
    styleUrls: ['./emi.component.scss'],
})
export class EmiComponent implements OnInit {
    @Input() title = 'EMI Calculator';

    constructor() {}

    ngOnInit(): void {}
}
