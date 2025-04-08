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
  // ngOnInit() {
  //   this.active();
  // }
  // active() {
  //   let as = document.body.getElementsByTagName('a');
  //   this.borrar()
  //   if (location.pathname == '/') {
  //     as[0].style.color = 'white';
  //     as[0].classList.add('activo')
  //   } else if (location.pathname == '/info') {
  //     as[1].style.color = 'white';
  //     as[1].classList.add('activo')
  //   } else if (location.pathname == '/proyectos') {
  //     as[2].style.color = 'white';
  //     as[2].classList.add('activo')
  //   }
  // }
  // borrar() {
  //   let as = document.body.getElementsByTagName('a');
  //   for (let index = 0; index < as.length; index++) {
  //     as[index].style.color = '#afafaf';
  //     as[index].classList.remove('activo')
  //   }
  // }
}
