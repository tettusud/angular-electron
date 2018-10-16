import { NgModule } from '@angular/core';
import { MaterialwrapComponent } from './materialwrap.component';
import { TextfieldComponent } from './textfield/textfield.component';

@NgModule({
  imports: [
  ],
  declarations: [MaterialwrapComponent, TextfieldComponent],
  exports: [MaterialwrapComponent]
})
export class MaterialwrapModule { }
