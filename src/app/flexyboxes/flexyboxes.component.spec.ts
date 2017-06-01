// testing imports
import { TestBed, ComponentFixture } from '@angular/core/testing';

// app imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

// utilities import
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// components import
import { FlexyboxesComponent } from './flexyboxes.component';
import { FlexyboxesWizardComponent } from './flexyboxes-wizard.component';
import { FlexyboxesOptionsComponent } from './flexyboxes-options.component';

// models import
import { Item } from '../models/item.model';

describe('flexyboxes component', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule(
      {
        declarations: [
          FlexyboxesComponent,
          FlexyboxesOptionsComponent,
          FlexyboxesWizardComponent
        ],
        imports: [
          ClarityModule.forRoot(),
          BrowserAnimationsModule,
          FormsModule
        ]
      }
    ).compileComponents();
  });
  tests();
});

function tests() {
  let comp: FlexyboxesComponent;
  let fixture: ComponentFixture<FlexyboxesComponent>;

  let de: DebugElement[];


  beforeEach(() => {

    fixture = TestBed.createComponent(FlexyboxesComponent);

    comp = fixture.componentInstance;
  });

  it('can add card', () => {
    comp.addCard();
    comp.addCard();
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.card'));
    expect(comp.groups.length).toBe(2, 'no match group length');
    expect(de.length).toBe(2, 'no match cards length');
  });

  it('can remove card', () => {
    comp.addCard();
    comp.addCard();
    comp.removeCard(1);
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.card'));
    expect(comp.groups.length).toBe(1, 'no match group length');
    expect(de.length).toBe(1, 'no match cards length');
  });

  it('can add item', () => {
    comp.addCard();
    comp.addItem(comp.groups[0], new Item('test item', 'number', 4, 0, 0, 33.33));
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('input[type=number]'));
    expect(comp.groups[0].items.length).toBe(1, 'no match items length');
    expect(de.length).toBe(1, 'no match items length');
  });

  it('can clear cards', () => {
    comp.addCard();
    comp.clear();
    de = fixture.debugElement.queryAll(By.css('.card'));
    expect(comp.groups.length).toBe(0, 'no match group length');
    expect(de.length).toBe(0, 'no match cards length');
  });

  it('can edit item', () => {
    comp.addCard();
    comp.addItem(comp.groups[0], new Item('test item', 'number', 4, 0, 0, 33.33));
    comp.editItem(comp.groups[0].items[0]);
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.modal'));
    expect(comp.opened).toBeTruthy('no opened = true');
    expect(comp.itemToEdit).toBe(comp.groups[0].items[0], 'no match itemtoedit');
    expect(de.length).toBe(1, 'no match modals length');
  });

  it('can export form', () => {
    comp.export();
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.modal'));
    expect(comp.openedForm).toBeTruthy('no opened form');
    expect(de.length).toBe(1, 'no match modals length');
  });

}
