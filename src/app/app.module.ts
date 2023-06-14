import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataReducer } from './store/data/data-reducers';
import { DataEffects } from './store/data/data-effects';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, StoreModule.forRoot({ data: DataReducer }), EffectsModule.forRoot([DataEffects])],
  bootstrap: [AppComponent],
})
export class AppModule {}
