import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  @Input() list: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.list);
  }
}
