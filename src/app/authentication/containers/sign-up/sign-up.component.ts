import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import {UserRequest} from '@app/core/models';
import {AuthenticationApiService} from '@app/core/http';
import {Tools} from '@app/shared/utils/tools';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  aUser: UserRequest;

  public signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationApiService: AuthenticationApiService
  ) { }

  ngOnInit() {
    this.signUpForm.valueChanges.subscribe((aValue) => {
      this.aUser = new UserRequest();
      this.aUser.fromForm(aValue);
    });
    this.signUpForm.controls.email.setValue(Tools.safeGet(() => this.route.snapshot.params.email));
  }

  onSubmit() {
    const errorFields = {
      NAME_NOT_EMPTY: 'name',
      NAME_MAX_LENGTH_40: 'name',
      USERNAME_NOT_EMPTY: 'username',
      USERNAME_MAX_LENGTH_15: 'username',
      PASSWORD_NOT_EMPTY: 'password',
      PASSWORD_MAX_LENGTH_100: 'password',
    };

    for (const control in this.signUpForm.controls) {
      if (this.signUpForm.controls.hasOwnProperty(control)) {
        this.signUpForm.controls[control].markAsUntouched();
        this.signUpForm.controls[control].setErrors({});
      }
    }

    const aSignUp = this.aUser;
    this.authenticationApiService.signup(aSignUp)
      .subscribe({
        next: signup => this.router.navigate(['authentication/log-in']),
        error: errors => {
          for (const error of errors) {
            this.signUpForm.controls[errorFields[error]].markAsTouched();
            this.signUpForm.controls[errorFields[error]].setErrors({[error]: true});
          }
        }
      });
  }

  onCancel() {
    this.router.navigate(['authentication/log-in']);
  }

}
