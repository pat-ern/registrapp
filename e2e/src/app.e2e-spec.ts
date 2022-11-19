import { ExpectedConditions } from 'protractor';
import { AppPage } from './app.po';;

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should get email input label', async () => {
    
    expect(page.getLabelText()).toContain('Hola');
    // check if login button is enabled after input is typed
    //expect(page.getLoginButton().isEnabled()).toBeTruthy();
  });

  //it('should type password', async () => {
    //expect(page.typeLoginInputPassword());
    // check if login button is enabled after input is typed
    //expect(page.getLoginButton().isEnabled()).toBeTruthy();
  //});

  //it('should enable login', async () => {
    //expect(page.getLoginButton().isEnabled()).toBeTruthy();
  //});

  // obtener el texto del boton login 
  //it('should get login button text', async () => {
    //var texto_boton = page.getLoginButton().getText();
    //console.log(texto_boton);
  //});

});