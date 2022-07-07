import { Component, OnInit } from '@angular/core';
import { Calculators_Menu, Tools_Menu } from '../../constants';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { InfoComponent } from '../info/info.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    readonly Calculators_Menu = Calculators_Menu;
    readonly Tools_Menu = Tools_Menu;
    bsModalRef?: BsModalRef;

    isToolsMenu = false
    constructor(private modalService: BsModalService, private router: Router) {
        this.router.events.subscribe((data) => {
            if (data && data['url']) {
                this.isToolsMenu = false;
                if (data['url'].indexOf('rent-receipts') > -1) {
                    this.isToolsMenu = true;
                }
            }
        });
    }

    ngOnInit(): void {
        // do nothing for now
    }

    onInfoButtonClick() {
        const initialState: ModalOptions = {
            initialState: {
                title: 'Info',
            },
        };
        this.bsModalRef = this.modalService.show(InfoComponent, initialState);
        this.bsModalRef.content.closeBtnName = 'Close';
    }
}
