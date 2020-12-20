import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-errors-for',
  templateUrl: './form-errors-for.component.html',
  styleUrls: ['./form-errors-for.component.scss']
})
export class FormErrorsForComponent {
  @Input() public control!: AbstractControl;

  constructor() {}
}
