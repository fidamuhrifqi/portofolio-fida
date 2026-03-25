import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  dataService = inject(PortfolioDataService);
  
  get aboutData() { return this.dataService.data().about; }
  get ui() { return this.dataService.ui(); }

  trackByIndex(index: number, item: any): number { return index; }
}
