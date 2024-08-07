import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidEmailValidator(emailRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const invalid = !emailRe.test(control.value);
        return invalid ? {invalidEmail: { value: control.value }} : null
    }
}

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//https://angular.dev/guide/forms/form-validation#defining-custom-validators

//https://angular.dev/guide/forms/form-validation

