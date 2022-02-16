import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-cagr',
    templateUrl: './cagr.component.html',
    styleUrls: ['./cagr.component.scss'],
})
export class CagrComponent implements OnInit {
    @Input() title = 'CAGR Calculator';

    constructor() {}

    ngOnInit(): void {}
}
