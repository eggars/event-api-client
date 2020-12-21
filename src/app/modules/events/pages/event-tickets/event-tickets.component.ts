import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentOptions } from '@data/enums/payment-options.enum';
import { Salutation } from '@data/enums/salutation.enum';
import { Venue } from '@data/models';
import { EventService } from '@data/services';
import { OrderService } from '@data/services/order/order.service';
import { TranslateService } from '@ngx-translate/core';
import { noDigitsPattern } from 'src/app/core/helpers/validators';
import { maxAgeValidator } from 'src/app/core/helpers/validators/max-age.validator';
import { minAgeValidator } from 'src/app/core/helpers/validators/min-age.validator';

@Component({
  selector: 'app-event-tickets',
  templateUrl: './event-tickets.component.html',
  styleUrls: ['./event-tickets.component.scss']
})
export class EventTicketsComponent implements OnInit {
  public selectedEvent: Venue | undefined;
  public ticketsForm!: FormGroup;
  public salutationOptions = Object.keys(Salutation);
  public paymentOptions = [PaymentOptions.DIRECT_TRANSFER, PaymentOptions.PAYPAL];
  public enabledPaymentOptions = [PaymentOptions.DIRECT_TRANSFER];
  public orderSubmitSuccess = false;
  public orderId = '';
  public copySuccessMessage = '';
  private minAllowedAge = 18;
  private maxAllowedAge = 100;

  public get minAllowedDate(): Date {
    const currentDate = new Date();
    return new Date(currentDate.setFullYear(currentDate.getFullYear() - this.maxAllowedAge));
  }

  public get maxAllowedDate(): Date {
    const currentDate = new Date();
    return new Date(currentDate.setFullYear(currentDate.getFullYear() - this.minAllowedAge));
  }

  public get currentUrl(): string { return window.location.href; }

  public get f() { return this.ticketsForm.controls; }

  public get deliveryAddress() { return (this.f.deliveryAddress as FormGroup).controls; }

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private orderService: OrderService,
    private eventService: EventService
    ) { }

  ngOnInit(): void {
    this.eventService.selectedEvent$.subscribe(res => {
      this.selectedEvent = res;
      if (!res.band) {
        this.eventService.getEvent().subscribe(ev => this.selectedEvent = ev);
      }
    });
    this.initForm();
  }

  public formSubmit(): void {
    this.ticketsForm?.markAllAsTouched();
    if (this.ticketsForm?.invalid) {
      return;
    }

    this.orderService.submitOrder(this.ticketsForm?.value).subscribe(res => {
      this.orderSubmitSuccess = !!res.orderId;
      this.orderId = res.orderId;
    });
  }

  public enumTranslation(enumName: string, enumValue: string): string {
    const translationKey = ['enums', enumName, enumValue].join('.');
    return this.translateService.instant(translationKey);
  }

  public placeholderFor(controlName: string): string {
    return this.translateService.instant(`forms.placeholders.${controlName}`);
  }

  public labelFor(controlName: string): string {
    return this.translateService.instant(`forms.labels.${controlName}`);
  }

  public isInvalid(formControl: AbstractControl): boolean {
    return formControl.touched && formControl.invalid;
  }

  public getHintFor(paymentOption: PaymentOptions): string {
    return this.enabledPaymentOptions.includes(paymentOption) ? '' : this.translateService.instant('tooltips.paymentOptionDisabled');
  }

  public notify(): void {
    this.copySuccessMessage = this.translateService.instant('labels.shared.urlCopied');
  }

  private initForm(): void {
    this.ticketsForm = this.fb.group({
      salutation: [null],
      firstName: [null, [Validators.required, Validators.pattern(noDigitsPattern)]],
      lastName: [null, [Validators.required, Validators.pattern(noDigitsPattern)]],
      email: [null, [Validators.required, Validators.email]],
      dateOfBirth: [null, [Validators.required, minAgeValidator(this.minAllowedAge), maxAgeValidator(this.maxAllowedAge)]],
      ticketCount: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      paymentOption: [null, [Validators.required]],
      emailDelivery: [{value: true, disabled: true}],
      deliveryAddress: {
        value: this.fb.group({
          co: [],
          mailBox: [],
          street: [],
          houseNumber: [],
          postalCode: [null, [Validators.required, Validators.maxLength(5)]],
          city: [null, [Validators.required]]
        }),
        disabled: true
      }
    });
  }

}
