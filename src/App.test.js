import { expect } from "chai";
import { spy } from 'sinon';
import App from './App';


describe('App Tests', () => {


    describe('Constructor', () => {
        it('Should empty inicialize content and accordion', () => {
            const app = new App();
            expect(app.sections).to.exist;
            expect(app.accordion).to.exist;

        });
    });
  
   describe('Init', () => {

        it('Should call getSectionsFromRenderedAccordion getSectionsFromApi', () => {
            const app = new App();
            spy(app, 'getSectionsFromRenderedAccordion');
            spy(app, 'getSectionsFromApi');
            app.init();
            expect(app.getSectionsFromRenderedAccordion.called).to.be.true;
            expect(app.getSectionsFromApi.called).to.be.true;
        });
    });
});
