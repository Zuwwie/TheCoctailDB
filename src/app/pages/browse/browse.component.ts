import { Component, OnInit, Input } from '@angular/core';
import { CoctailService } from 'src/app/core/services/coctail/coctail.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  constructor(private coctailServise: CoctailService) {}
  list: any = [];
  search: string;
  coctailList: any = [];
  errors = false;
  ngOnInit(): void {}
  searchCoctail() {
    console.log(this.search);
    if (this.search === undefined) {
      this.search = null;
    }
    if (this.search !== ` ` && this.search !== ``) {
      this.coctailServise.getBrowse(this.search).subscribe(
        (data) => {
          this.list = data.drinks;
          console.log(this.list);
          this.errors = false;

          if (this.list === null) {
            this.list = [];
            this.errors = true;
          }
          // this.coctailList.push(this.list);
          // console.log(this.coctailList);
        },
        (error) => {}
      );
    } else {
      this.list = [];
      this.errors = true;
      // console.log(this.list);
    }
  }
}
