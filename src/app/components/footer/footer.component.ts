import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  esHome: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == '/home'){
      this.esHome = true;
    }
  }

  back(){
    this.router.navigate(['/home']);
  }

}
