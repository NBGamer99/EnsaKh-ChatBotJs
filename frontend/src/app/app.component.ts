import { Component } from '@angular/core';
import { Message } from './components/models/messages.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'frontend';
	messages = [];

}
