import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {

  validUsername = 'testmail@domain.com';
  validPassword = '123456';

  navigateTo() {
    return browser.get('/');
  }

  getLabelText() {
    return element(by.css('ion-label[name=userinputlabel]')).getText();
  }

}