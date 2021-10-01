import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'calculadora', url: '/calculator', icon: 'calculator' },
    { title: 'conversor', url: '/conversor', icon: 'swap-horizontal' },
    { title: 'operaciones logicas', url: '/operator', icon: 'construct' },
  ];
  constructor() {}
}
