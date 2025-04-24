import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super.component.html'
})
export class DragonballSuperPageComponent {
  name = signal('')
  power = signal(0)

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

  addCharacter()
  {
    if(!this.name() || !this.power() || this.power() <= 0){
      return
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update(list => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields()
  {
    this.name.set('');
    this.power.set(0);
  }
}
