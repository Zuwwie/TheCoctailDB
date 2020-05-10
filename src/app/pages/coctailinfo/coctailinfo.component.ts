import { Component, OnInit, Output } from '@angular/core';
import { CoctailService } from 'src/app/core/services/coctail/coctail.service';

@Component({
  selector: 'app-coctailinfo',
  templateUrl: './coctailinfo.component.html',
  styleUrls: ['./coctailinfo.component.scss'],
})
export class CoctailinfoComponent implements OnInit {
  @Output() list: any;
  constructor(private coctailServise: CoctailService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    // console.log(`w`);
    this.coctailServise.getCoctail().subscribe(
      (data) => {
        this.list = data.drinks[0];
        console.log(this.list);
      },
      (error) => {}
    );
  }
}
