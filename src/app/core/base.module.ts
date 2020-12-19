import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [
    DatePipe
  ]
})
export class BaseModule { }
