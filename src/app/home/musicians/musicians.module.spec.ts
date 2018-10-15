import { MusiciansModule } from './musicians.module';

describe('MusiciansModule', () => {
    let musiciansModule: MusiciansModule;

    beforeEach(() => {
        musiciansModule = new MusiciansModule();
    });

    it('should create an instance', () => {
        expect(musiciansModule).toBeTruthy();
    });
});
