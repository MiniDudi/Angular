import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApoliceComponent } from './component/apolice/apolice.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { MediaComponent } from './component/media/media.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    ApoliceComponent,
    CalculadoraComponent,
    ClienteComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
