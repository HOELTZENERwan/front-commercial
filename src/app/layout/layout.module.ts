import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { NavFooterModule } from '../partials/nav-footer/nav-footer.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NavFooterModule
  ]
})
export class LayoutModule { }