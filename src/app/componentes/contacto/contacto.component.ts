import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  copiar(msg: HTMLElement) {
    const email = "ulisestcortes@gmail.com";
    const tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // let msg = document.getElementById('#msg');
    msg.innerText = "Mail copiado!";
    setTimeout(() => {
      msg.innerText = "Copiar mail"
    }, 3000);
  }
  paginaGitHub() {
    window.open('https://github.com/ulicortes', '_blank');
  }
}
