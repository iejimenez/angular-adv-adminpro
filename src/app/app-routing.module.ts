import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthRoutingModule } from "./auth/auth.routing";
import { PagesRoutingModule } from "./pages/pages.routing";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

const routes: Routes = [
    //path: '/dashboard' PagesRouting
    //path: '/login' or '/register' AuthRouting
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent }
]

@NgModule({
    declarations:[],
    imports: [ 
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}