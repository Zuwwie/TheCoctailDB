import { Component, OnInit, Input } from '@angular/core';
import { CoctailService } from 'src/app/core/services/coctail/coctail.service';

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

  ngOnInit(): void {}
}
