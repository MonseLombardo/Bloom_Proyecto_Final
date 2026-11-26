import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  flowerOutline,
  checkmarkCircle,
  ellipseOutline,
  sunnyOutline,
  partlySunnyOutline,
  moonOutline,
} from 'ionicons/icons';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, IonIcon],
})
export class Tab1Page implements OnInit {

  ngOnInit(): void {
    const savedHabits = localStorage.getItem('bloom-habits');

    if (savedHabits) {
      this.habits = JSON.parse(savedHabits);

    }
  }

  constructor() {
    addIcons({
      'flower-outline': flowerOutline,
      'checkmark-circle': checkmarkCircle,
      'ellipse-outline': ellipseOutline,
      'sunny-outline': sunnyOutline,
      'partly-sunny-outline': partlySunnyOutline,
      'moon-outline': moonOutline,
    });
  }

  readonly currentDate = new Intl.DateTimeFormat('es-PY', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  readonly greeting = this.getGreeting();

  readonly periods = [
    {
      name: 'Mañana',
      icon: 'sunny-outline',
      description: 'Empezá el día con calma',
    },
    {
      name: 'Tarde',
      icon: 'partly-sunny-outline',
      description: 'Un momento para vos',
    },
    {
      name: 'Noche',
      icon: 'moon-outline',
      description: 'Cerrá el día cuidándote',
    },
  ];

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

  getHabitsByPeriod(period: string) {
    return this.habits.filter(habit => habit.period === period);
  }

  toggleHabit(id: number): void {
    const habit = this.habits.find(item => item.id === id);

    if (habit) {
      habit.completed = !habit.completed;
      localStorage.setItem('bloom-habits', JSON.stringify(this.habits));
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
