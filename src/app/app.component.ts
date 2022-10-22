import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  constructor(
    private menu: MenuController,
    private router: Router) {}

  goToScanPage() {
    this.menu.close();
    this.router.navigate(['/scan']);
  }

  goToHistorialPage() {
    this.menu.close();
    this.router.navigate(['/historial']);
  }

  goToSettingsPage() {
    this.menu.close();
    this.router.navigate(['/settings']);
  }

  goToCuentaPage() {
    this.menu.close();
    this.router.navigate(['/cuenta']);
  }

  goToLoginPage() {
    this.menu.close();
    this.router.navigate(['/login']);
  }


}
