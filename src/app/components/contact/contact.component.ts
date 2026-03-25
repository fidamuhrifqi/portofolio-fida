import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  dataService = inject(PortfolioDataService);
  cdr = inject(ChangeDetectorRef);
  contactData = this.dataService.data.contact;
  
  emailCopied = false;

  copyEmail(event: Event) {
    event.preventDefault(); // Prevent opening a blank tab if no mail client exists
    navigator.clipboard.writeText(this.contactData.email).then(() => {
      this.emailCopied = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.emailCopied = false;
        this.cdr.detectChanges();
      }, 2000);
    });
  }
}
