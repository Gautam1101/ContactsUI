import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  searchTerm: string = '';
  pageNumber: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts(this.pageNumber, this.pageSize, this.searchTerm).subscribe(response => {
      this.contacts = response.contacts; // Use 'contacts' instead of 'Contacts'
      this.totalPages = response.totalPages; // Use 'totalPages' instead of 'TotalPages'
    });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      this.loadContacts(); // Reload contacts after deletion
    });
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.pageNumber = page;
      this.loadContacts();
    }
  }

  onSearchChange(): void {
    this.pageNumber = 1; // Reset to first page on search
    this.loadContacts();
  }
}
