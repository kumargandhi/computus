import { Component, OnInit } from '@angular/core';
import { Header_Menu } from '../../constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    readonly Header_Menu = Header_Menu;
    constructor() {
        // do nothing for now
    }

    ngOnInit(): void {
        // do nothing for now
    }
}
