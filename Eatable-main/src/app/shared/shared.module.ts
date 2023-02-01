import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga/carga.component';



@NgModule({
  declarations: [
    CargaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CargaComponent],
})
export class SharedModule { }
