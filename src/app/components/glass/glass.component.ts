import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.scss'],
})
export class GlassComponent implements OnInit {
  @Input() listglass: any;
  constructor() {}

  ngOnInit(): void {}
}
