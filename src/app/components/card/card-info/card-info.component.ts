import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css'],
})
export class CardInfoComponent implements OnInit {
  @Input()
  dateInfo: string = '';
  @Input()
  dateTime: string = '';
  constructor() {}

  ngOnInit(): void {
    this.dateTime = '--';
  }
}
