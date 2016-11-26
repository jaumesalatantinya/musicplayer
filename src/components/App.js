import SectionsService from '../services/SectionsService';
import ErrorDispatcher from '../services/ErrorDispacher';
import Accordion from './Accordion/Accordion';
import  '../styles/index.scss';

class App {

    constructor () {
        this.sections = [];
        this.accordion = new Accordion();
    }

    init () {
        this.getSectionsFromRenderedAccordion();
        this.getSectionsFromApi().then(() => {
            this.renderAccordion();
        });
    }

    getSectionsFromRenderedAccordion () {
        this.sections = SectionsService.getSectionsFromHtml('#a1');
    }

    getSectionsFromApi () {
        return SectionsService.getSectionsFromApi().then ((sections) => {
            this.sections.push(sections);
        }).catch((error) => {
            ErrorDispatcher.dispatchError('App--getSectionsFromApi: ' + error.message);
        });
    }

    renderAccordion () {
        this.accordion.loadSections(this.sections);
        this.accordion.render();
    }
}

export default App;

