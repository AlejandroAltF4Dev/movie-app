import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListPipe } from './services/list.pipe';
import { YoutubeUrlPipe } from './services/youtube-url.pipe';

@NgModule({
    declarations: [AppComponent, ListPipe, YoutubeUrlPipe],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
    providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
    bootstrap: [AppComponent],
    exports: [
        ListPipe,
        YoutubeUrlPipe
    ]
})
export class AppModule {
}
