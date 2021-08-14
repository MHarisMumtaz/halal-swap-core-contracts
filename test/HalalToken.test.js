const { assert } = require("chai");

const HalalToken = artifacts.require('HalalToken');

contract('HalalToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.halal = await HalalToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.halal.mint(alice, 1000, { from: minter });
        assert.equal((await this.halal.balanceOf(alice)).toString(), '1000');
    })
});
