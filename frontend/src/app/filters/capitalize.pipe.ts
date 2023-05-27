import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
	transform(value: string): string {
		if (!value) return '';

		// Split the string into words
		const words = value.split(' ');

		// Capitalize the first word
		words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

		// Join the words back into a string
		return words.join(' ');
	}
}
