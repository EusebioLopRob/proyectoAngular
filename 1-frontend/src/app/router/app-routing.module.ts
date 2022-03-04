import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { UserMain } from "../components/user/user-main/user-main.component";
import { Home } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ErrorComponent } from '../components/commons/error/error.component';

const routes: Routes = [
    
    //Home: ruta para la página principal
    { path: '', component: Home },
    //Ruta para la seccion de usuarios
    { path: 'user-main', component: UserMain },
    //Ruta página error
    { path: 'error', component: ErrorComponent },
    //{ path: 'ruta', component: componente },

    //Wildcard route: aquí iremos cuando ninguna url concuerde TIENE QUE ESTAR LA ULTIMA
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
