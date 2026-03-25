import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  dataService = inject(PortfolioDataService);
  
  get experienceData() { return this.dataService.data().experience; }
  get ui() { return this.dataService.ui(); }

  trackByIndex(index: number, item: any): number { return index; }
}
