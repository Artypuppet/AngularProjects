import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, NbButtonModule],
  template: `
    <button nbButton hero status="warning" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'" >{{ value }}</button>
  `,
  styles:['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
    @Input() value: 'X' | 'O';
}
