import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './component/app.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { MessagesComponent } from './component/messages/messages.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroSearchComponent } from './component/hero-search/hero-search.component';

import { PagePanelHeroesComponent } from './page/page-panel-heroes/page-panel-heroes.component';
/**
  InMemoryDataService used in environment dev
  to simulate a source of data 
*/
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PagePanelHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    /**
      The HttpClientInMemoryWebApiModule module intercepts HTTP requests 
      and returns simulated server responses.  
      Remove it when a real server is ready to receive requests. 
    */
    HttpClientInMemoryWebApiModule.forRoot( 
      InMemoryDataService, { dataEncapsulation: false } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
