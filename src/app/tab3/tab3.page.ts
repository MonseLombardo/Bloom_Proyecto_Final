import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
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
  moonOutline,
  heartOutline,
  flowerOutline,
} from 'ionicons/icons';

import { Consejo } from '../models/consejo.model';
import { ConsejosService } from '../services/consejos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
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
export class Tab3Page implements OnInit {
  consejos: Consejo[] = [];
  loading = true;
  error = '';

  constructor(
    private consejosService: ConsejosService,
    private cdr: ChangeDetectorRef,
  ) {
    addIcons({
      'seedling': leafOutline,
      'leaf-outline': leafOutline,
      'moon-outline': moonOutline,
      'heart-outline': heartOutline,
      'flower-outline': flowerOutline,
    });
  }

  ngOnInit(): void {
    this.consejosService.obtenerConsejos().subscribe({
      next: (consejos) => {
        this.consejos = consejos;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = 'No se pudieron cargar los consejos. Intentá nuevamente.';
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }
}
