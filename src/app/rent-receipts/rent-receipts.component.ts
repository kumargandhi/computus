import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-rent-receipts',
    templateUrl: './rent-receipts.component.html',
    styleUrls: ['./rent-receipts.component.scss'],
})
export class RentReceiptsComponent implements OnInit {
    @Input() title = 'Rent receipts generator';

    constructor() {}

    ngOnInit(): void {}
}
