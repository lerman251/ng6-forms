import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
    static invalidProjectName(control: AbstractControl): { [s: string]: boolean } | null{
        if (control.value === 'Test') {
            return { 'invalidProjectName': true };
        }
        return null;
    }
    
    static asyncInvalidProjectName(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Testproject') {
                    resolve({ 'invalidProjectName': true });
                } else {
                    resolve(null);
                }
            }, 2000);
        })
        return promise;
    }
}