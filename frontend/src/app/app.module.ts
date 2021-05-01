
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';

import { SocketIoModule } from "ngx-socket-io";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:3000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
