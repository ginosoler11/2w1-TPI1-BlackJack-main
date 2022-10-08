import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Output() onHit = new EventEmitter();
  @Output() onStand = new EventEmitter();
  @Output() onNewGame = new EventEmitter();
  @Input() play = false;

  constructor() {}

  ngOnInit(): void {}

  hit() {
    this.onHit.emit();
  }

  stand() {
    this.onStand.emit();
  }

  newGame() {
    this.play = true;
    this.onNewGame.emit();
  }
}
