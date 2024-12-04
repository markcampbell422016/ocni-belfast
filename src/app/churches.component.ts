import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { WebService } from './web.service';

@Component({
    selector: 'churches',
    standalone: true,
    imports: [RouterOutlet, RouterModule],
    providers: [DataService, WebService],
    templateUrl: './churches.component.html',
    styleUrl: './churches.component.css'
})

export class ChurchesComponent {
    church_list: any;
    page: number = 1;

    constructor(public dataService: DataService, private webService: WebService) { }

    ngOnInit() {
        if (sessionStorage['page']) {
            this.page = Number(sessionStorage['page']);
        }
        // this.church_list = this.dataService.getchurches(this.page);

        this.webService.getchurches(this.page).subscribe((response) => {
            this.church_list = response;
        })
    }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1
            sessionStorage['page'] = this.page;
            this.webService.getchurches(this.page)
                .subscribe((response: any) => {
                    this.church_list = response;
                })
        }
    }
    nextPage() {
        if (this.page < this.dataService.getLastPageNumber()) {
            this.page = this.page + 1
            sessionStorage['page'] = this.page;
            this.webService.getchurches(this.page)
            .subscribe((response: any) => {
                this.church_list = response;
            })
        }
    }
}