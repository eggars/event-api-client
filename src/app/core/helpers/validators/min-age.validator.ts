import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!!control.value) {
      const selectedDate = new Date(control.value);
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() - minAge);
      if (isNaN(Date.parse(control.value)) || selectedDate > maxDate) {
        return { minAge };
      }
    }
    return null;
  };
}
