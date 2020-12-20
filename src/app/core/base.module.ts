import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CopyClipboardDirective } from '../shared/directives/copy-clipboard.directive';

@NgModule({
  declarations: [CopyClipboardDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CopyClipboardDirective
  ],
  providers: [
    DatePipe
  ]
})
export class BaseModule { }
