import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
 { path: '', component: MenuComponent },
 { path: 'info', component: SobreMiComponent },
 { path: 'proyectos', component: ProyectosComponent },
 { path: 'contacto', component: ContactoComponent },
 { path: 'formulario', redirectTo: './php/contacto.php'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
