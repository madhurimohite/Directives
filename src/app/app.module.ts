import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { SizerDirective } from './directive/sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    SizerDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
