import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrls: ['./price-tag.component.css']
})
export class PriceTagComponent implements OnInit {
  @Input() myData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
