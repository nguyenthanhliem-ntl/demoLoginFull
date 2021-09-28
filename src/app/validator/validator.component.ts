import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {

  formSignUp: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['',[gmailValidator,Validators.email,Validators.required]],
      password: ['',Validators.minLength(6), Validators.required]
    })
  }

  onSubmit() {
    if(this.formSignUp.invalid) {
      alert("yêu cầu điền đầy đủ thông tin !")
    }else{
      console.log(this.formSignUp.value)
  }

}}
function gmailValidator(formControl: FormControl)  {
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true };
}
