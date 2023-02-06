import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//** Used for API Server **
const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PlaysService {
	//** Used for URL methods to connect to variable
  model = 'plays';

  constructor(private http: HttpClient) {}

//GET
  all() {
    return this.http.get(this.getUrl());
  }

//GET (by id) - used for searching?
  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

//POST (used to save new)
  create(play) {
    return this.http.post(this.getUrl(), play);
  }

//PUT (used to update as new)
  update(play) {
    return this.http.put(this.getUrlWithID(play.id), play);
  }

//DELETE
  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }


//Methods to simplify REST/CRUD
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}