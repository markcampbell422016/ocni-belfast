import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";

@Component({
    selector: 'directions',
    standalone: true,
    imports: [RouterOutlet, RouterModule],
    templateUrl: './directions.component.html',
    styleUrl: './directions.component.css'
})

export class DirectionsComponent { }