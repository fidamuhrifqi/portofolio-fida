import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  dataService = inject(PortfolioDataService);
  
  get projectsData() { return this.dataService.data().projects; }
  get ui() { return this.dataService.ui(); }

  trackByIndex(index: number, item: any): number { return index; }
}
