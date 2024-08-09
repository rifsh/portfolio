import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

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
      phone: ['', [Validators.required, Validators.email]],
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

  onSubmit() {
    console.log(this.contactForm.value);
    
  }
}
