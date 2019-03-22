import { SplashModule } from './splash.module';

describe('SplashModule', () => {
  let splashModule: SplashModule;

  beforeEach(() => {
    splashModule = new SplashModule();
  });

  it('should create an instance', () => {
    expect(splashModule).toBeTruthy();
  });
});
