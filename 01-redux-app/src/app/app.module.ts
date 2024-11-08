import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NietoComponent } from './contador/nieto/nieto.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contadorReducer } from './contador/contador.reducer';
import { HijoComponent } from './contador/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
