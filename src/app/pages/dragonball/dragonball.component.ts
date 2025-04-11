import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html'
})
export class DragonballComponent {
  characters = signal<Character[]>([
    {
      id:1,
      name: 'Goku',
      power: 1292
    },
    {
      id:2,
      name: 'Vegeta',
      power: 3211
    },
    {
      id:3,
      name: 'Pikolo',
      power: 4444
    },
  ]);


}
