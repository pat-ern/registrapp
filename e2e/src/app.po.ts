import { browser, by, element } from 'protractor';

export class AppPage {

  validUsername = 'pruebas@email.com';
  validPassword = '123456';

  navigateTo() {
    return browser.get('/');
  }

  getEmailInputLabel() {
    return element(by.css('ion-label[name=emailinputlabel]')).getText();
  }

  getPasswordInputLabel() {
    return element(by.css('ion-label[name=passwordinputlabel]')).getText();
  }

  typeEmailInput() {
    element(by.css('ion-input[name=email] input')).sendKeys(this.validUsername);
  }

  typePasswordInput() {
    element(by.css('ion-input[name=password] input')).sendKeys(this.validPassword);
  }

  getLoginButton() {
    return element(by.css('ion-button[id=login-button]'));
  }

}