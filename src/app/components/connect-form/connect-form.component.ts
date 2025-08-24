import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-connect-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.scss'],
})
export class ConnectFormComponent {
  connectForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.connectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.connectForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.connectForm.invalid) {
      return;
    }

    console.log('Form submitted:', this.connectForm.value);
    alert('Message sent!');
    this.onClear();
  }

  onClear() {
    this.connectForm.reset();
    this.submitted = false;
  }
}
