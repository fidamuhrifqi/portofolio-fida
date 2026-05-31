import { Component, inject, HostListener, ElementRef } from '@angular/core';

import { PortfolioDataService } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dataService = inject(PortfolioDataService);
  elementRef = inject(ElementRef);
  isMenuOpen = false;
  isDarkMode = false;
  activeSection = 'hero';
  private readonly sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

  get ui() { return this.dataService.ui(); }
  get currentLang() { return this.dataService.currentLang(); }

  constructor() {
    // Check system preference or local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  toggleLanguage() {
    this.dataService.toggleLanguage();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
    this.updateActiveSection();
  }

  scrollTo(section: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;
    this.activeSection = section;
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 140;
    const currentSection = this.sectionIds
      .map(id => ({ id, element: document.getElementById(id) }))
      .filter((item): item is { id: string; element: HTMLElement } => !!item.element)
      .reverse()
      .find(item => item.element.offsetTop <= scrollPosition);

    if (currentSection) {
      this.activeSection = currentSection.id;
    }
  }
}
