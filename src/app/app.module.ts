import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component.component';
import { BusinessContactsComponent } from './business-contacts.component';
import { DashboardInfoComponent } from './dashboard-info.component';
import {routing} from './app.routing';
import {FeService} from './fe.service';
import { SearchPipePipe } from './search-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    BusinessContactsComponent,
    DashboardInfoComponent,
    SearchPipePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routing
  ],
  providers: [FeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
