import { IntervalDir } from './interval.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { EquipmentModule } from './equipment/equipment.module';

@NgModule({
  declarations: [
    AppComponent,
    IntervalDir
  ],
  imports: [
    BrowserModule,
    EquipmentModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
