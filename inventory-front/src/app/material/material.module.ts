import { NgModule } from '@angular/core';
import {MatTreeModule, MatIconModule} from '@angular/material';

const materials = [
  MatTreeModule,
  MatIconModule
];
@NgModule({
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})
export class MaterialModule { }
