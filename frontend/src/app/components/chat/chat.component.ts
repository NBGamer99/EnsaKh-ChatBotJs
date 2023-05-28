import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/messages.model';
import { TextMessage } from '../models/text-messsage.model';
import { environment } from 'src/environments/environment';
import { ResponseMessage } from '../models/response-message.model';

// Schemas
// import { sessionSchema } from '../../../../../backend/models/sessoinId.module.js'

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
	username: string = '';
	BACK_ENABLED: boolean = true;
	showError: boolean = false;
	@Input('messages') messages!: Message[];

	textInput = '';
	sessionTokenKey = 'sessionToken'; // Key for storing the session token
	sessionExpirationMinutes = 30; // Expiration time for the session token in minutes


	constructor(
		private route: ActivatedRoute,
		private ChatService: ChatService
	) {
		this.messages = []; // Initialize the messages array
	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.username = params['username'];
		});
		const sessionToken = sessionStorage.getItem(this.sessionTokenKey);

		if (sessionToken) {
			console.log(sessionToken)
			// User already has a session, perform necessary actions
			this.restoreSession(sessionToken);
		} else {
			// User doesn't have a session, generate a new token
			this.generateSessionToken();
		}
	}

	restoreSession(sessionToken : string) {
		this.ChatService.getMessages(sessionToken).subscribe(
			(res: any) => {
				this.messages = res;
			},
			(error) => {
				console.error(error);
			}
		);
	}

	generateSessionToken() {
		// Generate a new session token or identifier
		const sessionToken = this.generateRandomToken();

		// Store the session token in sessionStorage
		sessionStorage.setItem(this.sessionTokenKey, sessionToken);
	}

	generateRandomToken(): string {
		// Generate a random token using desired logic
		// Here's a simple example using a timestamp and random number
		const timestamp = new Date().getTime();
		const randomNumber = Math.floor(Math.random() * 10000);
		return `${timestamp}-${randomNumber}`;

	}


	sendMessage() {
		const sessionToken = sessionStorage.getItem(this.sessionTokenKey);
		if (this.textInput) {
			let newMessage: Message = {
				text: this.textInput,
				date: new Date().toDateString(),
				userOwner: true,
			};
			// console.log("user :",newMessage);

			this.messages.push(newMessage);
			let messageBack: TextMessage = {
				username: this.username,
				text: this.textInput,
				sessionToken:  sessionToken,
				dateu: newMessage.date
			};
			if (this.BACK_ENABLED) {
				this.ChatService.sendMessage(messageBack).subscribe(
					(res: ResponseMessage) => {
						let messageReturn: Message = {
							text: res.responseMessage,
							date: new Date().toDateString(),
							userOwner: false,
						};
						// console.log("bot :",messageReturn);
						this.messages.push(messageReturn);
					}
				);
			}
			this.textInput = '';
		} else {
			// Show the error message
			this.showError = true;

			// Hide the error message after 3 seconds
			setTimeout(() => {
				this.hideErrorMessage();
			}, 3000);
		}
	}

	hideErrorMessage() {
		this.showError = false;
	}

	onKey(event: any) {
		if (event.keyCode == 13) {
			this.sendMessage();
		}
	}
}
