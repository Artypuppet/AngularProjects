import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbButtonModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SquareComponent,
    BoardComponent,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
