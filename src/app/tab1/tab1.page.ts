
import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { flowerOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, IonIcon],
})
export class Tab1Page {
  constructor() {
    addIcons({
      'flower-outline': flowerOutline,
    });
  }
  readonly currentDate = new Intl.DateTimeFormat('es-PY', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  readonly greeting = this.getGreeting();

  private getGreeting(): string {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return '¡Buenos días!';
    }

    if (hour >= 12 && hour < 19) {
      return '¡Buenas tardes!';
    }

    return '¡Buenas noches!';
  }
}
