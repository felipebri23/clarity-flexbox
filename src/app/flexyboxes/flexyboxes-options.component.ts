import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-flexyboxes-options',
    template: `
<section class="form-group">
    <div class="col-xs-12">
    <label for="{{ title }}">{{ title }}</label>
        <div class="select">
            <select id="{{ title }}" name="{{ title }}" [(ngModel)]="selected" (change)="selectValue()">
                <option *ngFor="let option of options" value="{{ option }}">{{ option }}</option>
            </select>
        </div>
    </div>
</section>
`
})

export class FlexyboxesOptionsComponent{

    @Input() public title: string;
    @Input() public options: string[];
    @Input() public selected: string;

    @Output() public selectedValue: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    public selectValue(): void {
        this.selectedValue.next(this.selected);
    }
}
