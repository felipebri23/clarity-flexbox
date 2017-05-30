import { Component } from '@angular/core';

import { Group } from '../models/group.model';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-flexyboxes',
  templateUrl: './flexyboxes.component.html'
})
export class FlexyboxesComponent {

  public groups: Group[] = [];
  public itemToEdit: Item;
  public opened: Boolean = false;

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

  private reorder(): void {
    let i = 1;
    this.groups.forEach(group => {
      group.id = i;
      i++;
    });
  }

}
