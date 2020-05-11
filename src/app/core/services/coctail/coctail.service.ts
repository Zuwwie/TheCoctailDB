import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoctailService {
  private randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) {}
  getRandom(): any {
    // console.log(this.http.get(`${this.randomUrl}`));

    return this.http.get(`${this.randomUrl}`);
  }
  getBrowse(search: string): any {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
  }
  getCoctail(id): any {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
  getByingredient(ingredient): any {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
  }
  getGlassInput() {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
    );
  }
}
