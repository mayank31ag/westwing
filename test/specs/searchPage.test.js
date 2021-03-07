const SearchPage = require('../pageobjects/search.page');

describe('Westwing Page', () => {
    it('User should able to Search Mobel', () => {
        SearchPage.search();
        SearchPage.selectMobel();

        expect(SearchPage.verifyMobelPage).toHaveTextContaining(
            'You are on Mobel Page');
    });
});


