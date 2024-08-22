import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  options: string[] = ['Frontend', 'Backend', 'Fullstack'];
  selectedOption: string | null = null;
  isDropdownOpen = false;
  mail: string = 'rifshmuhammed@gmail.com';
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      eMail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', Validators.required]
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  onSubmit(event: Event) {
    
    event.preventDefault();
    emailJs.sendForm('service_m4av811', 'template_czg0f4b', event.target as HTMLFormElement, '7vBCRH8jMwYsw4iA6')
      .then((res: EmailJSResponseStatus) => {
        console.log("Email Sent", res.text);
      }, (err) => {
        console.log("An error occured", err.text);

      })
  }
}
