import { Component, OnInit, Input } from '@angular/core';
import { CoctailService } from 'src/app/core/services/coctail/coctail.service';
import { CoctailinfoComponent } from '../../coctailinfo/coctailinfo.component';

@Component({
  selector: 'app-coctail',
  templateUrl: './coctail.component.html',
  styleUrls: ['./coctail.component.scss'],
})
export class CoctailComponent implements OnInit {
  constructor(private coctailServise: CoctailService) {}
  // list: any = [];
  // randomList: any = [];
  @Input() listCoctail: any;

  ngOnInit(): void {
    // console.log(this.listCoctail);
  }

  // info(id) {
  //   this.coctailInfo.getInfo(id);
  // }
}
