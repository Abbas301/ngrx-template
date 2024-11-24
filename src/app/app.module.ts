import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './app.material.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { InMemoryService } from './Service/in-memory.service';
import { movieReducer } from './store/reducers/movie.reducer';
import { MovieEffect } from './effects/movie.effects';

@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([MovieEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
