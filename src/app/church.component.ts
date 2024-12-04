import { Component, OnInit } from "@angular/core";
import { RouterOutlet, ActivatedRoute } from "@angular/router";
import { DataService } from "./data.service";
import { CommonModule } from "@angular/common";
import { GoogleMapsModule } from "@angular/google-maps"
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { WebService } from "./web.service";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'church',
    standalone: true,
    imports: [RouterOutlet, CommonModule, GoogleMapsModule, ReactiveFormsModule],
    providers: [DataService, WebService],
    templateUrl: './church.component.html',
    styleUrl: './church.component.css'
})
export class ChurchComponent {
    church_list: any;
    church_lat: any;
    church_lng: any;
    map_options: google.maps.MapOptions = {};
    map_locations: any[] = [ ]
    loremIpsum: any;
    temperature: any;
    weather: any;
    weatherIcon: any;
    weatherIconURL: any;
    temperatureColour: any;
    reviewForm: any;
    review_list: any;
    
    constructor( public dataService: DataService, private route: ActivatedRoute, private formBuilder: FormBuilder, public authService: AuthService, private webService: WebService) { }

    ngOnInit() {
        this.reviewForm = this.formBuilder.group( {
            username: ['', Validators.required],
            comment: ['', Validators.required],
            stars: 5
        });
        this.webService.getchurch(this.route.snapshot.paramMap.get('id')).subscribe( (response: any) => {
            this.church_list = [response];
        })

        this.webService.getReviews(this.route.snapshot.paramMap.get('id')).subscribe( (response) => { this.review_list = response; });

        this.church_list = this.dataService.getchurch(this.route.snapshot.paramMap.get('id'))
        this.church_lat = this.church_list[0].location.coordinates[0];
        this.church_lng = this.church_list[0].location.coordinates[1];
        console.log(this.church_list[0]['reviews'])

        this.map_locations.push( {
            lat: this.church_lat, lng: this.church_lng
        });

        this.map_options = {
            mapId: "DEMO_MAP_ID",
            center: { lat: this.church_lat,
                      lng: this.church_lng },
            zoom: 13,
        };

        this.dataService.getLoremIpsum(1).subscribe((response: any) => {this.loremIpsum = response.text.slice(0, 400);});

        this.dataService.getCurrentWeather(this.church_lat, this.church_lng).subscribe((response: any) => {let weatherResponse = response['weather'][0]['description'];
            this.temperature = Math.round((response['main']['temp']));
            this.weather = weatherResponse[0].toUpperCase() + weatherResponse.slice(1);
            this.weatherIcon = response['weather'][0]['icon'];
            this.weatherIconURL = "https://openweathermap.org/img/wn" + this.weatherIcon + "@4x.png";

            this.temperatureColour = this.dataService.getTemperatureColour(this.temperature)
        });
 
    }
    onSubmit() {
        this.webService.postReview(
                this.route.snapshot.paramMap.get('id'),
                this.reviewForm.value)
            .subscribe( (response) => {
                this.reviewForm.reset();

                this.webService.getReviews(
                this.route.snapshot.paramMap.get('id'))
                    .subscribe( (response) => {
                        this.review_list = response;
                    });
            });
    }

    isInvalid(control: any) {
        return this.reviewForm.controls[control].invalid && this.reviewForm.controls[control].touched;
    }

    isUntouched() {
        return this.reviewForm.controls.username.pristine || this.reviewForm.controls.comment.pristine;
    }

    isIncomplete() {
        return this.isInvalid('username') || 
               this.isInvalid('comment') || 
               this.isUntouched();
    }

}