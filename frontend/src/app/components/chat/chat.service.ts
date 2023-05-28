import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TextMessage } from '../models/text-messsage.model';


@Injectable({
	providedIn: 'root',
})
export class ChatService {
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		}),
	};

	getMessages(sessionToken: string) {
		return this.http.get(environment.backend.getMessagesUrl + sessionToken);
	}

	sendMessage(textMessage: TextMessage) {
		var reqBody = {
			projectId: environment.dialogflow.projectId,
			requestText: textMessage.text,
			sessionToken: textMessage.sessionToken,
			dateu: textMessage.dateu,
		};
		// console.log("TextMessage :",textMessage);
		return this.http.post(
			environment.backend.requestTextUrl,
			reqBody,
			this.httpOptions
		);
	}
}
