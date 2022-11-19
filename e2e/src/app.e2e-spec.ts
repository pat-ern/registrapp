import { browser } from 'protractor';
import { AppPage } from './app.po';;

describe('Testeando login para probar que', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    
  });

  it('boton "Ingresar" ES clickeable con usuario y contrasena VALIDOS', async () => {
    page.ingresarCampos(page.validEmail, page.validPassword);
    page.getLoginButton().getAttribute('disabled').then(function (disabled) {
      expect(disabled).toBe(null);
    });
  });

  it('boton "Ingresar" NO ES clickeable con usuario y contrasena INVALIDOS', async () => {
    page.ingresarCampos(page.invalidEmail, page.invalidPassword);
    page.getLoginButton().getAttribute('disabled').then(function (disabled) {
      expect(disabled).toBe('true');
    });
  });

  it('boton "Ingresar" NO ES clickeable con usuario y contrasena VACIOS', async () => {
    page.ingresarCampos('', '');
    page.getLoginButton().getAttribute('disabled').then(function (disabled) {
      expect(disabled).toBe('true');
    });
  });

});