import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrl: './time-card.component.css',
})
export class TimeCardComponent {
  // გამოვაცხადოთ რომ ეს კომპონენტი იღებს რაღაც მონაცემებს
  // ყველაფერი რაც იწყება @ ეწოდება დეკორატორი

  // ამ შემთხვევაში გავნსაზღვერთ რომ ამ კომპონენტს
  // შეუძლია 2 მონაცემის მიღება
  // ერთი plate: string და მეორე time: string
  @Input() plate: string = '';
  @Input() time: string = '';
}
