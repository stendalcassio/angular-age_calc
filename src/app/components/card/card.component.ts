import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  onFormSubmit(event: Event): void {
    event.preventDefault();
    console.log('FORMULÁRIO PARADO');
  }

  @Input()
  labelText: string = '';
  @Input()
  labelFor: string = '';
  @Input()
  inputId: string = '';
  @Input()
  inputName: string = '';
  @Input()
  inputPlaceholder: string = '';
  @Input()
  dateInfo: string = '';
  @Input()
  dateTime: string = '';
  @Input()
  inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}
}
