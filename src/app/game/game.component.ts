import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  play: boolean;
  show = false;
  pointsPlayer: number = 0;
  pointsDealer: number = 0;
  deck: Card[] = [];
  deckPlayer: Card[] = [];
  deckDealer: Card[] = [];
  messageWinner: string = '';

  constructor(private service: DeckService) {}

  ngOnInit(): void {
    this.deck = this.service.getDeck();
  }

  showCard(b: boolean) {
    this.show = b;
  }

  hitCard() {
    let card = 0;
    card = Math.floor(Math.random() * 52);
    this.pointsPlayer += this.deck[card].valor;
    this.deckPlayer.push(this.deck[card]);

    if (this.pointsPlayer > 21) {
      this.messageWinner = 'Dealer Win😐';
      this.play = false;
    }
    if (this.pointsPlayer == 21) {
      this.messageWinner = '¡BLACKJACK!🤑';
      this.play = false;
    }
    if (this.deck[card].card == 'As' && this.pointsPlayer > 21) {
      this.pointsPlayer -= 10;
    }
  }

  dealer() {
    while (this.pointsDealer <= 17) {
      let card = 0;
      card = Math.floor(Math.random() * 52);
      this.pointsDealer += this.deck[card].valor;
      this.deckDealer.push(this.deck[card]);
    }
    if (this.pointsDealer > this.pointsPlayer && this.pointsDealer <= 21) {
      this.messageWinner = 'Dealer Win😩';
      this.play = false;
      return;
    }
    if (this.pointsPlayer == this.pointsDealer) {
      this.messageWinner = 'Tie😐';
      this.play = false;
      return;
    }
    this.messageWinner = 'You Win!🤑';
    this.play = false;
  }

  restart() {
    this.pointsPlayer = 0;
    this.pointsDealer = 0;
    this.deckPlayer = [];
    this.deckDealer = [];
    this.showCard(false);
    this.messageWinner = '';
  }
}
