import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DeckService } from './services/deck.service';
import { PlayerComponent } from './player/player.component';
import { DealerComponent } from './dealer/dealer.component';

@NgModule({
  declarations: [AppComponent, GameComponent, PlayerComponent, DealerComponent],
  imports: [BrowserModule],
  providers: [DeckService],
  bootstrap: [AppComponent],
})
export class AppModule {}
