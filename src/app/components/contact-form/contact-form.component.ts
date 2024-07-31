import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  contact!: Contact;
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.route.paramMap.subscribe(params => {
      const contactId = +params.get('id')!;
      if (contactId) {
        this.editMode = true;
        this.contactService.getContactById(contactId).subscribe(contact => {
          this.contact = contact;
          this.contactForm.patchValue(this.contact);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;

      if (this.editMode) {
        contactData.id = this.contact.id;
        this.contactService.updateContact(contactData).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.contactService.addContact(contactData).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
