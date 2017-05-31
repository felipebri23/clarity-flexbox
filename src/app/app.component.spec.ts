import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';

import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective } from '../testing/router.stubs';
import { RouterOutletStubComponent } from '../testing/router.stubs';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent test', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [
        ClarityModule.forRoot()
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
    });
  }));
  tests();
});

function tests() {
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('can instantiate it', () => {
    expect(comp).not.toBeNull();
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(2, 'should have2 links');
    expect(links[0].linkParams).toBe('/home', '1st link should go to Home');
    expect(links[1].linkParams).toBe('/flexyboxes', '2st link should go to Flexyboxes');
  });

  it('can click Flexyboxes link in template', () => {
    const flexyboxesLinkDe = linkDes[1];
    const flexyboxesLink = links[1];

    expect(flexyboxesLink.navigatedTo).toBeNull('link should not have navigated yet');

    flexyboxesLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(flexyboxesLink.navigatedTo).toBe('/flexyboxes');
  });
}
