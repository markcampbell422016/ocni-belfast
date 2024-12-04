import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChurchesComponent } from './churches.component';
import { NavComponent } from './nav.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChurchesComponent, NavComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'churchFE';
  year = '2024';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.populateReviews();
  }
}
