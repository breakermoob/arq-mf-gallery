import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { BeforeclickComponent } from "./prueba/beforeclick/beforeclick.component";
import { DefaultComponent } from "./prueba/default/default.component";

const routes: Routes = [
  { path: "", component: DefaultComponent },
  { path: "prueba", component: BeforeclickComponent },
  { path: "**", component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule { }