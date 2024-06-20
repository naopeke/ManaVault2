import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidPasswordValidator (passwordRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const invalid = passwordRe.test(control.value);
        return invalid ? {invalidPassword: { value: control.value }} : null
    }
}