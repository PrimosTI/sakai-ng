import { Component } from '@angular/core';
import { NgIdService } from './ng-id.service';

@Component({
    selector: 'ng-id',
    template: '',
    styles: [':host { display: none !important }']
})
export class NgIdComponent {

    readonly id: string;

    constructor(idService: NgIdService) {
        this.id = idService.generateId();
    }

}
