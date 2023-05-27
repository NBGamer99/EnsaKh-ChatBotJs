import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './components/chat/chat.service';
import { CapitalizePipe } from './filters/capitalize.pipe';
import { MessagesComponent } from './components/messages/messages.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent, HomeComponent, ChatComponent, CapitalizePipe, MessagesComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
	providers: [ChatService],
	bootstrap: [AppComponent],
	schemas:[]
})
export class AppModule {}
