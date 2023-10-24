import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input()
  labelText: string = ''
  @Input()
  labelFor: string = ''
  @Input()
  inputId: string = '';
  @Input()
  inputName: string = '';
  @Input()
  inputPlaceholder: string = '';
  @Input()
  inputValue: string = '';
  @Input()
  meuInput:string = '';

  constructor() {
  }

  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(newValue: string): void {
    this.inputValueChange.emit(newValue);
  }

  ngOnInit(): void {
  }

}
