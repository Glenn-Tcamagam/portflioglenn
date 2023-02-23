import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GaleriedesignComponent } from "./galeriedesign/galeriedesign.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  { path: "navbar", component: NavbarComponent },
  { path: "galeriedesign", component: GaleriedesignComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
