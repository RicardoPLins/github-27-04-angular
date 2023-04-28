import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule
  ],
})
export class LayoutModule {}
