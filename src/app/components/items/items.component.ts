import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit, DoCheck, OnDestroy {
  public itemTitle: string;
  public items: Array<any>;

  constructor() {
    this.itemTitle = 'Items component!';
    this.items = [
      {
        title:
          'Kumpel, team project to find and create rooms, used GraphQL, MongoDB and JWT',
        image: '../../../assets/images/kumpel.png',
      },
      {
        title:
          'Pokedex, team project to search pokemones, used MongoDB and Firebase',
        image: '../../../assets/images/Pokedex.png',
      },
      {
        title: 'Redux REST geolocation weather app',
        image: '../../../assets/images/ReduxWeather.png',
      },
    ];
  }

  ngOnInit() {
    console.log(this.items);

    console.log('2');
  }

  ngDoCheck() {
    console.log('3');
  }
  changeTitle() {
    this.itemTitle = 'another title';
  }
  ngOnDestroy() {
    console.log('Component will be deleted');
  }
}
