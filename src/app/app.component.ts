import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Full Name';
  value = '';
  update(value: string) { this.value = value; }
  valueName = '';
  updateName(valueName: string) { this.valueName = valueName; }
}
