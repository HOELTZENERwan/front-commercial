import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavFooterComponent } from './nav-footer.component';



@NgModule({
  declarations: [NavFooterComponent],
  exports: [NavFooterComponent],
  entryComponents: [NavFooterComponent],
  imports: [
    CommonModule
  ]
})
export class NavFooterModule { }
