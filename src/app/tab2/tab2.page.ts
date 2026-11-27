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
  ],
})
export class Tab2Page implements OnInit {
  misiones: Mision[] = [];
  loading = true;
  error = '';

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
}
