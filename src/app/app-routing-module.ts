import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [
    {path:'', redirectTo: 'signin', pathMatch:'full'},
    {path:'signin', component:SigninComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'products', component:ProductsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}