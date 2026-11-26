import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { Consejo } from '../models/consejo.model';
import { ConsejosService } from '../services/consejos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page implements OnInit {
  consejos: Consejo[] = [];
  loading = true;
  error = '';

  constructor(private consejosService: ConsejosService) { }

  ngOnInit(): void {
    this.consejosService.obtenerConsejos().subscribe({
      next: (consejos) => {
        this.consejos = consejos;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los consejos. Intentá nuevamente.';
        this.loading = false;
      },
    });
  }
}
