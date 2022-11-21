import { browser, by, element } from 'protractor';

export class AppPage {

  validEmail = 'pruebas@correo.com';
  validPassword = '123456';

  invalidEmail = 'pruebas@';
  invalidPassword = '';

  navigateTo() {
    return browser.get('/');
  }

  ingresarCampos(email: string, pass: string) {
    element(by.css('ion-input[name=email] input')).sendKeys(email);
    browser.sleep(1500);
    element(by.css('ion-input[name=password] input')).sendKeys(pass);
    browser.sleep(1500);
  }

  getLoginButton() {
    return element(by.css('ion-button[id=login-button]'));
  }

}