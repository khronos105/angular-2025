import { effect, Injectable, signal } from '@angular/core'
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService
{
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

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(character: Character)
  {
    this.characters.update(list => [...list, character])
  }
}
