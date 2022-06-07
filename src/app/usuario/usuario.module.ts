import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombresComponent } from './nombres/nombres.component';
import { RopaComponent } from './ropa/ropa.component';



@NgModule({
  declarations: [
    NombresComponent,
    RopaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NombresComponent,
    RopaComponent
  ]
})
export class UsuarioModule { }
