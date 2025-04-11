import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [ UpperCasePipe ]
})

export class HeroPageComponent{
    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed(() => {
        return `${ this.name() } - ${ this.age() }`
    })

    capitalizedName = computed(() => this.name().toUpperCase()) 


    getHeroDescription():string {
        return `${ this.name() } - ${ this.age() }`;
    }


    changeHero(): void
    {
        this.name.set('Spiderman')
        this.age.set(22)
    }

    changeAge(): void
    {
        this.age.set(60)
    }

    resetForm(): void
    {
        this.name.set('Ironman')
        this.age.set(45)
    }
}