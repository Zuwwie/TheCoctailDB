import { Component, OnInit, Output } from '@angular/core';
import { CoctailService } from 'src/app/core/services/coctail/coctail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coctailinfo',
  templateUrl: './coctailinfo.component.html',
  styleUrls: ['./coctailinfo.component.scss'],
})
export class CoctailinfoComponent implements OnInit {
  @Output() list: any;
  inList: any = {};
  ingredientList: any = [];
  ingredientMeasure: any = [];
  constructor(
    private coctailServise: CoctailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    console.log(this.route.fragment['value']);
    // tslint:disable-next-line:no-string-literal
    this.getInfo(this.route.fragment['value']);
  }

  getInfo(id): void {
    // console.log(`w`);
    this.coctailServise.getCoctail(id).subscribe(
      (data) => {
        this.list = data.drinks[0];
        console.log(this.list);
        // console.log(this.list.strIngredient1);
      },
      (error) => {}
    );
  }
}
