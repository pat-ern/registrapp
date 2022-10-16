import { Component, OnInit } from '@angular/core';
//import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private camera: CameraService) { }
  

  ngOnInit() {
  }

  cameraFuncion(){
    this.camera.takePicture()
  }

}
