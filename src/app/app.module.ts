import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientIdInterceptor } from './core/interceptors/client-id.interceptor';
import { ClientTrackingService } from './services/client-tracking/client-tracking.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientIdInterceptor,
      multi: true,
      deps: [ClientTrackingService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
