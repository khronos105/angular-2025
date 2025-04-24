import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html'
})
export class DragonballSuperPageComponent {

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
  ]);

}
