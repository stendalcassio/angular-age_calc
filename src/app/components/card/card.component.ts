import { Component, OnInit, Input } from '@angular/core';
import {
  parseISO,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  isValid,
} from 'date-fns';
import { empty } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
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

  @Input()
  meuInput: string = '';

  day: string | null = null;
  months: string | null = null;
  year: string | null = null;

  yearsDifference: number | null = null;
  monthsDifference: number | null = null;
  daysDifference: number | null = null;

  onInputValueChanged(value: string, field: string): void {
    if (field === 'day') {
      this.day = value;
    } else if (field === 'month') {
      this.months = value;
    } else if (field === 'year') {
      this.year = value;
    }
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();

    const numericDay = Number(this.day);
    const numericMonth = Number(this.months);
    const numericYear = Number(this.year);

    if (isNaN(numericDay) || isNaN(numericMonth) || isNaN(numericYear)) {
      console.log(
        'Por favor, insira valores numéricos válidos para os campos de data.'
      );
    } else if (
      numericDay < 1 ||
      numericDay > 31 ||
      numericMonth < 1 ||
      numericMonth > 12 ||
      numericYear < 1
    ) {
      alert('Por favor, insira valores válidos para os campos de data.');
    } else {
      const formattedDay = ('0' + numericDay).slice(-2);
      const formattedMonth = ('0' + numericMonth).slice(-2);

      const inputDate = `${numericYear}-${formattedMonth}-${formattedDay}`;
      const selectedDate = parseISO(inputDate);

      if (isValid(selectedDate)) {
        const currentDate = new Date();
        this.yearsDifference = differenceInYears(currentDate, selectedDate);
        this.monthsDifference =
          differenceInMonths(currentDate, selectedDate) % 12;
        this.daysDifference = differenceInDays(currentDate, selectedDate) % 30; // Ajuste para meses com diferentes números de dias
      } else {
        console.log('Por favor, insira uma data válida.');
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
