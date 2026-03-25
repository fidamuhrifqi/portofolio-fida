import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  dataService = inject(PortfolioDataService);
  
  get educationData() { return this.dataService.data().education; }
  get ui() { return this.dataService.ui(); }

  trackByIndex(index: number, item: any): number { return index; }
}
