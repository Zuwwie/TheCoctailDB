import { Component, OnInit } from '@angular/core';
import { CoctailService } from 'src/app/core/services/coctail/coctail.service';
import { CoctailinfoComponent } from '../coctailinfo/coctailinfo.component';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public alcohol = false;
  ingredient = false;
  glass = false;
  public show = false;
  listglass: any = [];
  newToDoForm: FormGroup;
  list: any = [];
  value: any;
  randomList: any = [];
  listForm: any = [];
  listGlas: any;
  // cheak: any;
  constructor(
    private coctailServise: CoctailService // private coctailInfo: CoctailinfoComponent
  ) {}
  ngOnInit(): void {
    this.randomCoctail();
    this.glasses();
    // this.formCoctail(`vodka`);

    // console.log(this.cheak);
  }

  randomCoctail() {
    for (let i = 0; i < 4; i++) {
      this.coctailServise.getRandom().subscribe(
        (data) => {
          this.list = data.drinks[0];
          // console.log(this.list);
          this.randomList.push(this.list);
          // console.log(this.randomList);
        },
        (error) => {}
      );
    }
    for (let i = 0; i < 20; i++) {
      this.coctailServise.getRandom().subscribe(
        (data) => {
          this.list = data.drinks[0];

          this.listForm.push(this.list);
        },
        (error) => {}
      );
    }
  }
  formCoctail(ingredient) {
    this.coctailServise.getByingredient(ingredient).subscribe(
      (data) => {
        this.listForm = data.drinks;
        console.log(this.listForm);
      },
      (error) => {}
    );
  }
  formCoctailAlcohol(alcohol) {
    console.log(alcohol);
    this.coctailServise.getalcohol(alcohol).subscribe(
      (data) => {
        this.listForm = data.drinks;

        console.log(this.listForm);
      },
      (error) => {}
    );
  }
  formCoctailglasses(glass) {
    console.log(glass);
    this.coctailServise.sortGlassInput(glass).subscribe(
      (data) => {
        this.listForm = data.drinks;
        console.log(this.listForm);
      },
      (error) => {}
    );
  }
  glasses() {
    this.coctailServise.getGlassInput().subscribe(
      (data) => {
        // tslint:disable-next-line:no-string-literal
        this.listGlas = data['drinks'];
        console.log(this.listGlas);
        this.listGlas.pop();
        console.log(this.listGlas);
      },
      (error) => {}
    );
  }
  hide(nav) {
    // console.log(nav);
    if (nav === `alcohol`) {
      this.alcohol = !this.alcohol;
      this.glass = false;
      this.ingredient = false;
    }
    if (nav === `glass`) {
      this.glass = !this.glass;
      this.alcohol = false;
      this.ingredient = false;
    }
    if (nav === `ingredient`) {
      this.ingredient = !this.ingredient;
      this.glass = false;
      this.alcohol = false;
    }
  }
}
