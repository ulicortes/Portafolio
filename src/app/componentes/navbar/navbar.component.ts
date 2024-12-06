import { Component, Input } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
// @Injectable()
export class NavbarComponent {
  // constructor(private document: Document) {}
  ngOnInit() {
    this.active();
  }
  active() {
    let as = document.body.getElementsByTagName('a');
    this.borrar()
    if (location.pathname == '/') {
      as[0].style.color = 'white';
      as[0].classList.add('activo')
    } else if (location.pathname == '/info') {
      as[1].style.color = 'white';
      as[1].classList.add('activo')
    } else if (location.pathname == '/proyectos') {
      as[2].style.color = 'white';
      as[2].classList.add('activo')
    }
  }
  borrar() {
    let as = document.body.getElementsByTagName('a');
    for (let index = 0; index < as.length; index++) {
      as[index].style.color = '#afafaf';
      as[index].classList.remove('activo')
    }
  }
  // color:string = "";
  // fondo:string = "";
  // tiempo:number = 0;
  // load(ventana: number) {
  //   let win = document.documentElement.getElementsByTagName('body')[0];

  //   if (ventana == 1) {
  //     this.color = "transparent";
  //     this.fondo = "url('./assets/fondo.png')";
  //     this.tiempo = 100;
  //   } else if (ventana == 2) {
  //     this.color = "rgb(130, 255, 136)";
  //     this.fondo = "none";
  //     this.tiempo = 1000;
  //   } else if (ventana == 3) {
  //     this.fondo = "none";
  //     this.color = "rgb(243, 255, 130)";
  //     this.tiempo = 1000;
  //   } else if (ventana == 4) {
  //     this.fondo = "none";
  //     this.color = "rgb(232, 255, 191)";
  //     this.tiempo = 1000;
  //   }
  //   setTimeout(() => {
  //     win.style.backgroundColor = this.color;
  //     win.style.backgroundImage = this.fondo;
  //   }, this.tiempo);
  // }

}
