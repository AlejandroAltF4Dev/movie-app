import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPipe } from './services/list.pipe';
import { YoutubeUrlPipe } from './services/youtube-url.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './screens/login/login.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPipe,
    YoutubeUrlPipe,
    LoginComponent,
    SignUpComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [ListPipe, YoutubeUrlPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
