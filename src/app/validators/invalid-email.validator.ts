import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const invalidEmailValidator = (emailRe: RegExp): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const invalid = emailRe.test(control.value);
        return invalid ? {invalidEmail: { value: control.value }} : null
    }
}