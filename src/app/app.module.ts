import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule 
{
  constructor()
  {
    console.log("*****app.module ya se construyo----")
    navigator.serviceWorker.ready.then(async(swReg)=>{
      console.log("--REAYDY!!!!----")

  //    veremos-----
      self.addEventListener('message',(event) => {
        if(event.data && event.data.type=='MESSAGE_IDENTIFIER')
        {
         console.log("--PRESIONO EL BOTON PARA TARJETA y se respondio desde el WS ----")
        }
      })
   
      
   })

  }
}
