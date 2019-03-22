import { DiscographyModule } from './discography.module';

describe('DiscographyModule', () => {
    let discographyModule: DiscographyModule;

    beforeEach(() => {
        discographyModule = new DiscographyModule();
    });

    it('should create an instance', () => {
        expect(discographyModule).toBeTruthy();
    });
});
