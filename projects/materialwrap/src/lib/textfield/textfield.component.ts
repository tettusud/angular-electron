import { Component, OnInit } from '@angular/core';
import { MDCTextField } from '@material/textfield';

@Component({
  selector: 'mat-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
  }

}
