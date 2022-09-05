import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  data: any; //variable que puede recibir cualquier valor, para recibir email y password

  constructor(private menu: MenuController, private router: Router, private activatedRoute: ActivatedRoute) { 

  this.activatedRoute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state){
      this.data = router.getCurrentNavigation().extras.state.user;
      console.log(this.data)
    }else{
      this.router.navigate(["/login"])
    }
  });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
