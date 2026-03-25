import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Fida Muhamad Rifqi. All Rights Reserved.</p>
        <p class="built-with">Built with Angular 21 & SCSS</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--bg-color);
      padding: 2rem;
      text-align: center;
      border-top: 1px solid var(--border-color);
    }
    p {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      color: var(--text-tertiary);
    }
    .built-with {
      font-size: 0.75rem;
      margin-bottom: 0;
      opacity: 0.7;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
