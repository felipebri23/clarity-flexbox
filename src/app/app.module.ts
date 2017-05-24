import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexyboxesComponent } from './flexyboxes/flexyboxes.component';
import { FlexyboxesOptionsComponent } from './flexyboxes/flexyboxes-options.component';
import { FlexyboxesWizardComponent } from './flexyboxes/flexyboxes-wizard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flexyboxes', component: FlexyboxesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlexyboxesComponent,
    FlexyboxesOptionsComponent,
    FlexyboxesWizardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(routes), // <-- routes

    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
