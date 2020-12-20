import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxAgeValidator(maxAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!!control.value) {
      const selectedDate = new Date(control.value);
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - maxAge);
      if (isNaN(Date.parse(control.value)) || selectedDate < minDate) {
        return { maxAge };
      }
    }
    return null;
  };
}
