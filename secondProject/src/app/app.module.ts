import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule,  NbInputModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name : 'cosmic'}),
    FormsModule,
    NbInputModule,
    NbCardModule,
    NbLayoutModule,
    AppFormComponent,
    NbEvaIconsModule,
    ReactiveFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
