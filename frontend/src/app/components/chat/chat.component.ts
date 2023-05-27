import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/messages.model';
import { TextMessage } from '../models/text-messsage.model';
import { environment } from 'src/environments/environment';
import { ResponseMessage } from '../models/response-message.model';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
	username: string = '';
	BACK_ENABLED: boolean = true;
	@Input('messages') messages!: Message[];


	textInput = '';

	constructor(private route: ActivatedRoute,private ChatService: ChatService) {
		this.messages = []; // Initialize the messages array
	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.username = params['username'];
		});
	}
	sendMessage() {
		let newMessage: Message = {
			text: this.textInput,
			date: '',
			userOwner: true,
		};

		this.messages.push(newMessage);

		let messageBack: TextMessage = {
			username: environment.username,
			text: this.textInput,
		};
		if (this.BACK_ENABLED) {
			this.ChatService.sendMessage(messageBack).subscribe((res: ResponseMessage) => {
					let messageReturn: Message = {
						text: res.responseMessage,
						date: new Date().toDateString(),
						userOwner: false,
					};
					this.messages.push(messageReturn);
				});
		}
		this.textInput = '';
	}

	onKey(event: any) {
		if (event.keyCode == 13) {
			this.sendMessage();
		}
	}
}
