import { Inject, Optional, ViewChild, Component, OnInit, forwardRef, Input } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor, Validator, NgModel, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UserProfileComponent),
  multi: true
};

export const USER_PROFILE_VALIDATORS: any = {
  provide: NG_ASYNC_VALIDATORS,
  useExisting: forwardRef(() => UserProfileComponent),
  multi: true
};

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [USER_PROFILE_VALUE_ACCESSOR, USER_PROFILE_VALIDATORS]
})
export class UserProfileComponent implements OnInit, ControlValueAccessor, Validator {
  @ViewChild('nameField') nameField: NgModel;
  @ViewChild('ageField') ageField: NgModel;
  formFields: NgModel[];

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

  ngOnInit() {
    this.formFields = [];
    this.formFields.push(this.nameField);
    this.formFields.push(this.ageField);
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

  validate(c: AbstractControl): Observable<{ [key: string]: any; }> {
    const subject = new Subject();
    setTimeout(() => {
      const errors = {};
      if (c && c.value && this.nameField) {
        console.log(c.value.name, this.nameField.value);
      }
      this.formFields.forEach(field => {
        if (field && field.invalid) {
          errors[field.name] = field.errors;
        }
      });
      subject.next(Object.keys(errors).length ? errors : null);
      subject.complete();
    });
    return subject;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}
