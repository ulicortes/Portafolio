import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {

  movimiento() {
    let win = window.innerHeight;
    let posicion = document.documentElement.scrollTop;
    // if(posicion < win) {
    //   document.documentElement.getElementsByTagName('div')[1].style.transform = `translateX(${posicion * 0.2}vw)`;
    // } else if(posicion >= win && posicion < win*2) {
    //   document.documentElement.getElementsByTagName('div')[6].style.transform = `translateX(-${(posicion-win) * 0.2}vw)`;
    // }
  }
}
