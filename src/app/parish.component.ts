import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";

@Component({
    selector: 'parish',
    standalone: true,
    imports: [RouterModule, RouterOutlet],
    templateUrl: './parish.component.html',
    styleUrl: './parish.component.css'
})

export class ParishComponent { }