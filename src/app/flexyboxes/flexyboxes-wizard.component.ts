import { Component, ViewChild, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Wizard } from 'clarity-angular';

import { Item } from '../models/item.model';

@Component({
    moduleId: module.id,
    selector: 'app-flexyboxes-wizard',
    templateUrl: './flexyboxes-wizard.component.html'
})

export class FlexyboxesWizardComponent {
    @ViewChild('wizard') wizard: Wizard;

    @Input() public id: number;
    @Output() public finish: EventEmitter<Item> = new EventEmitter<Item>();

    public opened = false;

    public item: Item = Item.empty();

    constructor() { }

    public doFinish(): void {
        this.finish.next(this.item);
        this.doReset();
    }

    public doReset(): void {
        this.wizard.reset();
    }
}
