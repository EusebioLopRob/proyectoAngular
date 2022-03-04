import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { UserMain } from "../components/user/user-main/user-main.component";
import { Home } from '../components/home/home.component';
import { PageNotFound } from '../components/page-not-found/page-not-found.component';
import { Error } from '../components/commons/error/error.component';
import { Cuenta } from '../components/cuenta/cuenta.component';
import { Info } from '../components/info/info.component';

const routes: Routes = [
    
    //Home: ruta para la página principal
    { path: '', component: Home },
    //Ruta para la seccion de usuarios
    { path: 'admin', component: UserMain },
    //Ruta página error
    { path: 'error', component: Error },
    // Ruta de Mi Cuenta
    { path: 'account', component: Cuenta },
    // Ruta de Acerca de
    { path: 'info', component: Info },
  
    //Wildcard route: aquí iremos cuando ninguna url concuerde TIENE QUE ESTAR LA ULTIMA
    { path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
