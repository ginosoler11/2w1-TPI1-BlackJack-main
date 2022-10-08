import { Injectable } from '@angular/core';
import { Card } from '../models/Card';

@Injectable()
export class DeckService {
  private deck: Card[] = [];
  private values: number[] = [];
  private palos: string[] = [];
  private cards: string[] = [];

  constructor() {
    this.load();
    this.pushDeck();
  }

  getDeck() {
    return this.deck;
  }

  load() {
    this.palos.push('h', 'c', 'd', 's');

    this.cards.push(
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13'
    );

    this.values.push(11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10);
  }

  pushDeck() {
    for (let i = 0; i < 13; i++) {
      let card = new Card();
      card.card = this.cards[i];
      card.palo = this.palos[0];
      card.valor = this.values[i];
      this.deck.push(card);
    }
    for (let i = 0; i < 13; i++) {
      let card = new Card();
      card.card = this.cards[i];
      card.palo = this.palos[1];
      card.valor = this.values[i];
      this.deck.push(card);
    }
    for (let i = 0; i < 13; i++) {
      let card = new Card();
      card.card = this.cards[i];
      card.palo = this.palos[2];
      card.valor = this.values[i];
      this.deck.push(card);
    }
    for (let i = 0; i < 13; i++) {
      let card = new Card();
      card.card = this.cards[i];
      card.palo = this.palos[3];
      card.valor = this.values[i];
      this.deck.push(card);
    }
  }
}
