import { RouterModule, Routes } from '@angular/router';

import { Pagina1Component } from "./components/pagina1/pagina1.component";
import { Pagina2Component } from "./components/pagina2/pagina2.component";
import { Pagina3Component } from "./components/pagina3/pagina3.component";
import { Pagina4Component } from "./components/pagina4/pagina4.component";



const app_routes: Routes = [
  { path: 'pag1', component: Pagina1Component },
  { path: 'pag2', component: Pagina2Component },
  { path: 'pag3', component: Pagina3Component },
  { path: 'pag4', component: Pagina4Component },
  { path: '**', pathMatch: 'full', redirectTo: 'pag1' }
];

export const app_routing = RouterModule.forRoot(app_routes);
