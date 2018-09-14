import { LoginModule } from './login.module';

describe('LoginModuleModule', () => {
  let loginModule: LoginModule;

  beforeEach(() => {
    loginModule = new LoginModule();
  });

  it('should create an instance', () => {
    expect(loginModule).toBeTruthy();
  });
});
