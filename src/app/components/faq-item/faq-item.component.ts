import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


interface Item {
  question: string;
  answer: string;
  number: number;
}

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
  animations: [
    trigger('collapse', [
      state(
        'open',
        style({
          height: '*',
          visibility: 'visible',
        })
      ),
      state(
        'closed',
        style({
          height: '0',
          visibility: 'hidden',
        })
      ),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FaqItemComponent {

  items: Item[] = [
    {
      number: 1,
      question: 'How do I register for the Gina Mata T-T-T event in Abuja? 1',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 2,
      question: 'Who is eligible to apply for Gina Mata?2',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 3,
      question: 'Is Fasaha 4.0 remote or hybrid?3',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 4,
      question: 'Who is eligible to apply for Gina Mata?4',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 5,
      question: 'Why apply for Gina Mata?5',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 6,
      question: 'How do I register for the Gina Mata T-T-T event in Abuja? 6',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 7,
      question: 'Who is eligible to apply for Gina Mata?7',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 8,
      question: 'Is Fasaha 4.0 remote or hybrid?8',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 9,
      question: 'Who is eligible to apply for Gina Mata?9',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      number: 10,
      question: 'Why apply for Gina Mata?10',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    }  
  ];
  leftItems: any[] = [];
  rightItems: any[] = [];
  openItemIndex: number = -1;

  constructor() {
    this.distributeItems()
  }

// distributer the faq to left and right
  private distributeItems(): void {
    let half: number;
  if (this.items.length % 2 === 0) {
    half = this.items.length / 2
  } else {
    half = this.items.length / 2 + 0.5;
  }
    this.leftItems = this.items.slice(0, half);
    this.rightItems = this.items.slice(half, this.items.length)
}

  // Function to toggle the item's collapse state.
  toggleItem(index: number): void {
    this.openItemIndex = this.openItemIndex === index ? -1 : index;
  }
}
