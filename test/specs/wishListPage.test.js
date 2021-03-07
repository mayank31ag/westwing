const WishListPage = require('../pageobjects/wishlist.page');

describe('WishList Page', () => {
    it('User should able to see Wish List Count', () => {
        WishListPage.enterEmailAndPassword();
        expect(WishListPage.verifyWishList).to.be.equal(1);
    });

    it('User should able to delete Product from WishList', () => {
        WishListPage.enterEmailAndPassword();
        expect(WishListPage.verifyWishList).to.be.equal(empty);
    });
});