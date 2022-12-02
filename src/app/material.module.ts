import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

const modules = [MatCardModule, MatInputModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
