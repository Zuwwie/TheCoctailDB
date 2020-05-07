import { Component, OnInit } from '@angular/core';
import { CoctailService } from 'src/app/core/services/coctail/coctail.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  list: any = [];
  randomList: any = [];

  constructor(private coctailServise: CoctailService) {}

  ngOnInit(): void {
    this.randomCoctail();
  }

  randomCoctail() {
    for (let i = 0; i < 5; i++) {
      this.coctailServise.getRandom().subscribe(
        (data) => {
          this.list = data.drinks[0];
          // console.log(this.list);
          this.randomList.push(this.list);
          // console.log(this.randomList);
        },
        (error) => {}
      );
      // setTimeout(() => {
      //   console.log(this.randomList);
      // }, 500);
    }
  }
}
