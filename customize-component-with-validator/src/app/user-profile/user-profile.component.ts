import { AbstractControl, Validator, NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef, Input } from '@angular/core';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UserProfileComponent),
  multi: true
};

export const USER_PROFILE_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => UserProfileComponent),
  multi: true
};

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [USER_PROFILE_VALUE_ACCESSOR, USER_PROFILE_VALIDATORS]
})
export class UserProfileComponent implements ControlValueAccessor, Validator {
  user: any;

  get name() {
    return this.user.name;
  }

  set name(value) {
    this.user.name = value;
    this.notifyValueChange();
  }

  get age() {
    return this.user.age;
  }

  set age(value) {
    this.user.age = value;
    this.notifyValueChange();
  }

  @Input() disabled: boolean;

  onChange: (value) => {};
  onTouched: () => {};
  onValidatorChange: () => void;

  constructor() {
    this.user = {};
  }

  notifyValueChange() {
    if (this.onChange) {
      this.onChange({
        name: this.name,
        age: this.age
      });
    }
  }

  writeValue(obj: any): void {
    this.user = obj;
    if (!this.user) {
      this.user = {};
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    return { 'error': 'error' };
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}
