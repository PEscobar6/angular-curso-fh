import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter: number = 10;

  public increaseBy( value: number ): void {
    this.counter += value;
  }

  public decreaseBy( value: number ): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }
}
