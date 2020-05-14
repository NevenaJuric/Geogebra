import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './partials/navigation/navigation.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FooterComponent } from './partials/footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      ActivitiesComponent,
      FooterComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
