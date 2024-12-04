import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";

@Component({
    selector: 'resources',
    standalone: true,
    imports: [RouterOutlet, RouterModule],
    templateUrl: './resources.component.html',
    styleUrl: './resources.component.css'
})

export class ResourcesComponent { }