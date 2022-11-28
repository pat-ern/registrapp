//Testing se hace en archivos .spec.ts
//Se puede hacer testing individual de componentes o generales, o en el e2e como en su ejemplo
//Para hacer testing en pages y componentes, revisar documentacion
//https://ionicframework.com/docs/angular/testing#pages-and-components
//https://angular.io/guide/testing#component-test-basics
//https://angular.io/guide/testing-components-basics
//https://angular.io/guide/testing-components-scenarios#component-testing-scenarios
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // TODO: add more tests!

});
