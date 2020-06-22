import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para uso de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { NetflixComponent } from './componentes/netflix/netflix.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentariosComponent,
    NetflixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // y hacer los imports correspondientes para ngmodule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
