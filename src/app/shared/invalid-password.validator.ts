import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidPasswordValidator (passwordRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const invalid = passwordRe.test(control.value);
        return invalid ? {invalidPassword: { value: control.value }} : null
    }
}

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// (?=.*[a-z]): 少なくとも1つの小文字を含む
// (?=.*[A-Z]): 少なくとも1つの大文字を含む
// (?=.*\d): 少なくとも1つの数字を含む
// [a-zA-Z\d]{8,}: 英数字を含む文字列で、最低8文字以上