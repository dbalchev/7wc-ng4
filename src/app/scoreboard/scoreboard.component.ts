import { Component, OnInit } from '@angular/core';

class Field {
    constructor (
        public name: string,
        public label: string
    )
    {

    }
}

const FIELDS: Array<Field> = [
    new Field("war","Война"),
    new Field("money","Пари"),
    new Field("wonders","Чудеса"),
    new Field("building","Сгради"),
    new Field("trade","Търговия"),
    new Field("guides","Гилдии"),
    new Field("science","Наука"),
    new Field("black","Черни"),
    new Field("leaders","Лидери"),
]

class PlayerScore {
    public scores:Array<number | null> = FIELDS.map(_ => null);
    constructor(
        public name: string
    ) {
    }
    public sum(): number {
        return this.scores.reduce((s, v) => s + v);
    }
}

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  FIELDS=FIELDS;
  public players: Array<PlayerScore> = [];
  constructor() { }

  ngOnInit() {
  }
  addPlayer(newPlayerInput: any) {
      this.players.push(new PlayerScore(newPlayerInput.value));
      newPlayerInput.value = '';
  }
}
