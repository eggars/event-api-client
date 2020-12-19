import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientIdInterceptor } from './core/interceptors/client-id.interceptor';
import { ClientTrackingService } from '@data/services/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
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

// tslint:disable-next-line: typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
