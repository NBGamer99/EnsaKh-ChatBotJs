import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})


export class MessagesComponent {
	username: string = '';
	@Input('text') text?: string;
	@Input('date') date: any;
	@Input('owner') owner?: boolean;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.username = params['username'];
		});
	}

}
