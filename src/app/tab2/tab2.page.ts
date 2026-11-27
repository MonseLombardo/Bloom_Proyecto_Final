import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  IonContent,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBadge,
  IonSpinner,
  IonButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  leafOutline,
  sparklesOutline,
  phonePortraitOutline,
  heartOutline,
} from 'ionicons/icons';

import { Mision } from '../models/mision.model';
import { MisionesService } from '../services/misiones.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonBadge,
    IonSpinner,
    IonButton,
  ],
})
export class Tab2Page implements OnInit {
  misiones: Mision[] = [];
  loading = true;
  error = '';

  completedMissions: number[] = [];
  private readonly storageKey = 'bloom-missions-completed';

  constructor(
    private misionesService: MisionesService,
    private cdr: ChangeDetectorRef,
  ) {
    addIcons({
      'leaf-outline': leafOutline,
      'sparkles-outline': sparklesOutline,
      'phone-portrait-outline': phonePortraitOutline,
      'heart-outline': heartOutline,
    });
  }

  ngOnInit(): void {
    const savedMissions = localStorage.getItem(this.storageKey);

    if (savedMissions) {
      this.completedMissions = JSON.parse(savedMissions);
    }

    this.misionesService.obtenerMisiones().subscribe({
      next: (misiones) => {
        this.misiones = misiones;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = 'No se pudieron cargar las misiones. Intentá nuevamente.';
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }
  isCompleted(id: number): boolean {
    return this.completedMissions.includes(id);
  }

  toggleMission(id: number): void {
    if (this.isCompleted(id)) {
      this.completedMissions = this.completedMissions.filter(
        missionId => missionId !== id,
      );
    } else {
      this.completedMissions = [...this.completedMissions, id];
    }

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.completedMissions),
    );
  } 
}
