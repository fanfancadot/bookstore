import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


const routes: Routes = [
   {path : 'cart', loadChildren : 'app/cart/cart.module#CartModule'},
       
    {path: '', pathMatch : 'full', redirectTo :'catalog'},
   //  {path: '**', pathMatch : 'full', redirectTo :'notfound'},
    
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule {}
