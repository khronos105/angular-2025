import { Component } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent{
    counter = 12

    increaseBy(value: number): void
    {
        this.counter += value
    }

    resetCounter(): void
    {
        this.counter = 12
    }
}