import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
    selector: 'testWS',
    standalone: true,
    providers: [WebService],
    templateUrl: './testWS.component.html'
})
export class TestWSComponent {

    test_output: string[] = [];
    first_church_list: any[] = [];
    second_church_list: any[] = [];

    constructor(private webService: WebService) {}

    private testchurchesFetched() {
        this.webService.getchurches(1)
          .subscribe( (response) => {
            if (Array.isArray(response) && response.length == 4)
                this.test_output.push(
                "Page of churches fetched... PASS");
            else 
                this.test_output.push(
                "Page of churches fetched... FAIL");
          });
    }

    private testPagesOfchurchesAreDifferent() {
        this.webService.getchurches(1)
          .subscribe( (response) => {
            this.first_church_list = response;
            this.webService.getchurches(2)
              .subscribe( (response) => {
                this.second_church_list = response;
                if (this.first_church_list[0]["_id"] !=
                    this.second_church_list[0]["_id"])
                    this.test_output.push(
                        "Pages 1 and 2 are different... PASS");
                else 
                    this.test_output.push(
                    "Pages 1 and 2 are not different... FAIL");
              })  
          });  
    }

    private testGetchurch() {
        this.webService.getchurch('670685c72604c45ada6d1da0')
          .subscribe( (response) => {
            if (response.name == 'church 5')
              this.test_output.push("Fetch church 5 by ID... PASS");
            else 
              this.test_output.push("Fetch church 5 by ID... FAIL");  
          });
    }

    private testGetReviews() {
        this.webService.getReviews('670685c72604c45ada6d1da0')
          .subscribe( (response) => {
            if (Array.isArray(response))
              this.test_output.push(
                "Fetch Reviews of church 5... PASS");
            else 
               this.test_output.push(
                "Fetch Reviews of church 5... FAIL");  
          });
    }

    private testPostReview() {
        let test_review = {
            "username" : "Test User",
            "comment" : "Test Comment",
            "stars" : 5
        };
        this.webService.getReviews('670685c72604c45ada6d1da0')
        .subscribe( (response) => {
            let numReviews = response.length;
            this.webService.postReview(
                    '670685c72604c45ada6d1da0', test_review)
              .subscribe( (response) => {
                this.webService.getReviews(
                        '670685c72604c45ada6d1da0')
                  .subscribe( (response) => {
                    if (response.length == numReviews + 1)
                      this.test_output.push("Post review... PASS");
                    else 
                      this.test_output.push("Post review... FAIL");  
                  });
              });  
        });
    }
    
    ngOnInit() {
        this.testchurchesFetched();
        this.testPagesOfchurchesAreDifferent();
        this.testGetchurch();
        this.testGetReviews();
        this.testPostReview();
    }
}