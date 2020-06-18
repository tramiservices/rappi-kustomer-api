import { expect, use, should, assert } from 'chai';
import { app } from '../app'
const chaiHttp = require('chai-http');

describe('App', () => {
    use(chaiHttp);
    it('start', () => {
        const isBinded = app.start();
        expect(app.dino).to.be.true;
    })
})