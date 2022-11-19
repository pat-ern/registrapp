import { browser, ExpectedConditions } from 'protractor';
import { AppPage } from './app.po';;

describe('Testeando login para probar que', () => {
  let page: AppPage;

  let emailLabel = 'Usuario';
  let passLabel = 'Contraseña';

  beforeEach(() => {
    page = new AppPage();
    
  });

  it('el label del input de correo es ' + emailLabel, async () => {
    page.navigateTo();
    expect(page.getEmailInputLabel()).toContain(emailLabel);
  });

  it('el label del input de contraseña es ' + passLabel, async () => {
    page.navigateTo();
    expect(page.getPasswordInputLabel()).toContain(passLabel);
  });

  it('boton ingresar es clickeable con inputs validos', async () => {
    page.navigateTo();
    page.typeEmailInput();
    browser.sleep(1000);
    page.typePasswordInput();
    browser.sleep(1000);
    var boton = page.getLoginButton();
    expect(ExpectedConditions.elementToBeClickable(boton));
  });

});