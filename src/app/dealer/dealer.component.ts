import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css'],
})
export class DealerComponent implements OnInit {
  @Input() play = false;
  constructor() {}

  ngOnInit(): void {}
}
