import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
