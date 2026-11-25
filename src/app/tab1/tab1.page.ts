
import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { flowerOutline } from 'ionicons/icons';
import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
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
      'checkmark-circle': checkmarkCircle,
      'ellipse-outline': ellipseOutline,
    });
  }

  readonly currentDate = new Intl.DateTimeFormat('es-PY', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  readonly greeting = this.getGreeting();

  habits = [
    {
      id: 1,
      name: 'Tomar agua',
      description: 'Mantenerme hidratada',
      period: 'Mañana',
      emoji: '💧',
      completed: false,
    },
    {
      id: 2,
      name: 'Leer',
      description: 'Dedicar unos minutos a la lectura',
      period: 'Tarde',
      emoji: '📖',
      completed: false,
    },
    {
      id: 3,
      name: 'Estirarme',
      description: 'Regalarle movimiento a mi cuerpo',
      period: 'Noche',
      emoji: '🌷',
      completed: false,
    },
  ];

  get completedHabits(): number {
    return this.habits.filter(habit => habit.completed).length;
  }

  get pendingHabits(): number {
    return this.habits.length - this.completedHabits;
  }

  get totalHabits(): number {
    return this.habits.length;
  }

  toggleHabit(id: number): void {
    const habit = this.habits.find(item => item.id === id);

    if (habit) {
      habit.completed = !habit.completed;
    }
  }

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
