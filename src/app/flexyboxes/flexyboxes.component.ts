import { Component, ElementRef, ViewChild } from '@angular/core';

import { Group } from '../models/group.model';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-flexyboxes',
  templateUrl: './flexyboxes.component.html'
})
export class FlexyboxesComponent {
  @ViewChild('form') form: ElementRef;

  public groups: Group[] = [];
  public itemToEdit: Item;
  public opened: Boolean = false;
  public openedForm: Boolean = false;
  public formText: string;

  constructor() {
  }

  public addCard(): void {
    const group: Group = new Group('row', 'wrap', 'flex-start', 'stretch');
    this.groups.push(group);
    this.reorder();
  }

  public removeCard(groupId: number): void {
    this.groups.splice(groupId - 1, 1);
    this.reorder();
  }

  public addItem(group: Group, item: Item): void {
    group.items.push(new Item(item.text, item.type, item.size, item.order, item.flexGrow, item.flexShrink));
  }

  public clear(): void {
    this.groups = [];
  }

  public editItem(item: Item): void {
    this.opened = true;
    this.itemToEdit = item;
  }

  public export(): void {
    this.formText = this.form.nativeElement.innerHTML.replace(/<!--(?!>)[\S\s]*?-->/g, '');
    this.formText = this.formText.replace(/^\s*[\r\n]/gm, '');
    this.formText = this.formText.replace(' novalidate="" class="ng-untouched ng-pristine ng-valid"', '');
    this.formText = this.formText.replace(' ng-reflect-ng-switch="label"', '');
    this.formText = this.formText.replace(' ng-reflect-ng-switch="text"', '');
    this.formText = this.formText.replace(' ng-reflect-ng-switch="number"', '');
    this.formText = this.formText.replace(' ng-reflect-ng-switch="button"', '');
    this.formText = this.formText.replace(' ng-reflect-ng-switch="checkbox"', '');
    this.formText = this.formText.replace(' ng-reflect-ng-switch="radio"', '');
    this.formText = this.formText.replace(' ng-reflect-ng-switch="select"', '');
    this.openedForm = true;
  }

  private reorder(): void {
    let i = 1;
    this.groups.forEach(group => {
      group.id = i;
      i++;
    });
  }

}
