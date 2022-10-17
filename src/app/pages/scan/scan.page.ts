import { Component, OnInit } from '@angular/core';
//import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { CameraService } from '../../services/camera.service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  code: any;

  constructor(
    private camera: CameraService,
    private scanner: BarcodeScanner
    ) { }
  
  ngOnInit() {
    this.startScan();
  }

  //cameraFuncion(){
  //  this.camera.takePicture()
  //}

  startScan(){
  this.scanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.code = barcodeData.text;
   }).catch(err => {
       console.log('Error', err);
   });
  }

}
