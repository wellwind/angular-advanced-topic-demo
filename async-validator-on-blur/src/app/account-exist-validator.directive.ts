import { Directive, ElementRef, HostListener, ViewChild, Input, Injector } from '@angular/core';
import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, NgModel, AsyncValidatorFn, NgControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Directive({
  selector: '[appAccountExistValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: AccountExistValidatorDirective, multi: true }]
})
export class AccountExistValidatorDirective implements AsyncValidator {
  private _validatorFn: AsyncValidatorFn;
  private _doValidation: boolean;

  constructor(private injector: Injector) {

  }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    return Observable.create((observer: Observer<ValidationErrors>) => {
      console.log('validate');
      const result = this._doValidation ? { 'error': 'error' } : null;
      console.log(result);
      observer.next(result);
      observer.complete();
    });
  }

  @HostListener('focus')
  onfocus() {
    // console.log(this.injector.get(FormControl));
    // const model = this.injector.get(NgModel) as NgModel;
    // console.log(model.control.asyncValidator);
    // this.validatorFn = model.control.asyncValidator;
    // model.control.clearAsyncValidators();
    this._doValidation = false;
  }

  @HostListener('blur')
  onBlur() {
    const model = this.injector.get(NgModel) as NgModel;
    // model.control.setAsyncValidators(this.validatorFn);
    this._doValidation = true;
    model.control.updateValueAndValidity();
  }
}
