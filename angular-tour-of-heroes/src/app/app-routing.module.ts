import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './component/heroes/heroes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';

import { PagePanelHeroesComponent } from './page/page-panel-heroes/page-panel-heroes.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'panelHeroes', component: PagePanelHeroesComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'detail/:id', component: HeroDetailComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
