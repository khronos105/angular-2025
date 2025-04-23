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
  name = signal('Gohan')
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
    {
      id:3,
      name: 'Pikolo',
      power: 4444
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
