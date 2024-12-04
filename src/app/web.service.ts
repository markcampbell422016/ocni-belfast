import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**
 * The Web Service provides access to the endpoints of the
 * Church Directory API
 */
@Injectable()
export class WebService{

    /**
     * The default page size to be returned
     */
    pageSize: number = 4;

    /**
     * The constructor for the Web Service
     * @param http Injecting the HttpClient to the WebService class
     */
    constructor(private http: HttpClient) { }

    /**
     * Fetch a page of churches from the Church Directory API
     * @param page The page number requested
     * @returns An Observable for the collection of churches
     */
    getchurches(page: number) {
        return this.http.get<any>(
            'http://localhost:5000/api/v1.0/churches?pn=' + page + '&ps=' + this.pageSize);
    }

    /**
     * Fetch a single church from the Church Directory API
     * @param id The identifier of the church requested
     * @returns An Observable for the church object
     */
    getchurch(id: any) {
        return this.http.get<any>(
            'http://localhost:5000/api/v1.0/churches/' + id);
    }

    /**
     * Add a review to the collection for the specified church
     * @param id The identifier of the church for which the review is provided
     * @param review The review to be added
     * @returns An Observable on an object containing a link to the new review
     */
    postReview(id: any, review: any) {
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);
        return this.http.post<any>(
            'http://localhost:5000/api/v1.0/churches/' + id + "/reviews", postData);
    }

    /**
     * Fetch the collection of reviews for a specified church
     * from the Church Directory API
     * @param id The identifier of the church for which reviews are requested
     * @returns An Observable for the collection of reviews
     */
    getReviews(id: any) {
        return this.http.get<any>('http://localhost:5000/api/v1.0/churches/' + id + '/reviews');
    }
}