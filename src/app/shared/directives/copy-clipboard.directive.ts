import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[copy-clipboard]' })
export class CopyClipboardDirective {

  @Input('copy-clipboard') public payload!: string;
  @Input() public context!: string;
  @Output() public copied: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.payload) {
      return;
    }

    const listener = (e: ClipboardEvent) => {
      // tslint:disable-next-line: no-string-literal
      const clipboard = e.clipboardData;
      clipboard?.setData('text', this.payload.toString());
      e.preventDefault();
      this.copied.emit(this.payload);
    };

    document.addEventListener('copy', listener, false);
    document.execCommand('copy');
    document.removeEventListener('copy', listener, false);
  }
}
