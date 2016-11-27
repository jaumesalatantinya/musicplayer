/*import { expect } from "chai";
import { spy } from 'sinon';
import { fetch } from "isomorphic-fetch";
import Accordion from '../vanilla/app/components/Accordion';


const validAccordionHTML = '<dl id="a1" class="Accordion"><dt class="Accordion-header">Section 1</dt><dd class="Accordion-content"><p>Section 1 Content...</p></dd><dt class="Accordion-header">Section 2</dt><dd class="Accordion-content"><p>Section 2 Content...</p></dd><dt class="Accordion-header">Section 3</dt><dd class="Accordion-content"><p>Section 3 Content...</p></dd><dt class="Accordion-header">Section 4</dt><dd class="Accordion-content"><p>Section 3 Content...</p></dd></dl>';

describe("Sanitize tests", () => {
    it("Should do math's 5==5", () => {
        expect(5===5).to.equal(true);
    });

    it("Should fail with incorrect math's 4==5", () => {
        expect(4===5).to.equal(false);
    });
});


describe("Accordion Tests", () => {


    describe("Contructor", () => {

        it("Should store as object props target and defaultPanel when correct values are passed as parameters", () => {
            const a = new Accordion('#a1',1);
            expect(a.target).to.equal('#a1');
            expect(a.defaultPanel).to.equal(1);
        });

        it("Should init defaultPanel to 0 when no value is passed as param", () => {
            const a = new Accordion('#a1');
            expect(a.defaultPanel).to.equal(0);
        });

        it("Should dispatch error when no target is passed as param", () => {
            const a = new Accordion();
            expect(a.error).to.equal(true);
        });

        it("Should init panels array empty", () => {
            const a = new Accordion();
            expect(a.panels).to.exist;
            expect(a.panels).to.be.empty;
        });
    });

  
    describe("Init", () => {

        let a;
        beforeEach(() => {
            a = new Accordion('#a1',1);
            document.body.innerHTML = validAccordionHTML; 
        });
        afterEach(() => {
            document.body.innerHTML = ''; 
        });

        it("Should call validateHtml getPanels addClickEventToPanelHeaders closeAllPanels & openPanel", () => {
            spy(a, 'validateHtml');
            spy(a, 'getPanels');
            spy(a, 'addClickEventToPanelHeaders');
            spy(a, 'closeAllPanels');
            spy(a, 'openPanel');
            a.init();
            expect(a.validateHtml.called).to.be.true;
            expect(a.getPanels.called).to.be.true;
            expect(a.addClickEventToPanelHeaders.called).to.be.true;
            expect(a.closeAllPanels.called).to.be.true;
            expect(a.openPanel.called).to.be.true;
        });

        it("Should asign defaultPanel to 0 if default panel is greater than panels.length", () => {
            expect(a.target).to.equal('#a1');
            expect(a.defaultPanel).to.equal(1);
        });

        
    });


    describe("Validate HTML", () => {
        
        let a;
        beforeEach(() => {
            a = new Accordion('#a1', 2);
            spy(a, 'dispatchError');
        });
        afterEach(() => {
            document.body.innerHTML = ''; 
        });

        it("Should dispatch error when no Accordion is in HTML", () => {
            a.validateHtml();
            expect(a.dispatchError.calledWith('No HTML elements for id target: #a1')).to.equal(true);
        });

        it("Should dispatch error when target element has no class Accordion ", () => {
            document.body.innerHTML = '<dl id="a1"></dl>';
            a.validateHtml();
            expect(a.dispatchError.calledWith('Target doesn\'t have Accordion class')).to.equal(true);
            
        });

        it("Should dispatch error when Accordion has no child elements", () => {
            document.body.innerHTML = '<dl id="a1" class="Accordion"></dl>';
            a.validateHtml();
            expect(a.dispatchError.calledWith('Accordion is empty or dt and dd elements doesn\'t match')).to.equal(true);

        });

        it("Should dispatch error when dt and dd doesn't match", () => {
            document.body.innerHTML = '<dl id="a1" class="Accordion"><dt class="Accordion-header">Section 1</dt></dl>';
            a.validateHtml();
            expect(a.dispatchError.calledWith('Accordion is empty or dt and dd elements doesn\'t match')).to.equal(true);
        });
    });


    describe("Get Panels", () => {
        it("Should fill panels with DOM elements", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.getPanels();
            expect(a.panels.length).to.equal(4);
        });
    });


    describe("Close all panels", () => {
        it("Should remove all is-open class from panels contents and add is-close class", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.getPanels();
            a.closeAllPanels();
            expect(a.panels[0].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[1].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[2].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[3].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[0].content.classList.contains('is-close')).to.equal(true);
            expect(a.panels[1].content.classList.contains('is-close')).to.equal(true);
            expect(a.panels[2].content.classList.contains('is-close')).to.equal(true);
            expect(a.panels[3].content.classList.contains('is-close')).to.equal(true);
            document.body.innerHTML = '';
        });
    });


    describe("Open Panel", () => {
        it("Should add is-open class to panel passed as param", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.getPanels();
            let panel = a.panels[0];
            a.openPanel(panel);
            expect(a.panels[0].content.classList.contains('is-open')).to.equal(true);
            document.body.innerHTML = '';
        });
    });

    describe("Add Click Event To Panel Headers", () => {
        it("Should asign click event to header panels", () => {
            
        });
    });


    describe("Load Users", () => {
        
        it("Should attach to the last panel content from JSON", (done) => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.getPanels();
            a.loadUsers();
            setTimeout(() => {
                expect(a.panels[3].content.innerHTML).to.equal('<p>Peter - peter@peter.es</p><p>Dan - dan@dan.es</p><p>Tomas - tomas@tomas.es</p>');
                done();
            }, 100);
        });
    });


    describe("Dispatch Error", () => {
        let a;
        beforeEach(() => {
            a = new Accordion('#a1', 2);
        });
        afterEach(() => {
            document.body.innerHTML = ''; 
        });

        it("Should do nothing when no error is passed as param", () => {
            a.dispatchError();
            expect(a.error).to.equal(false);
        });

        it("Should asign this.error to true when some error is passed as param", () => {
            a.dispatchError('Test Error');
            expect(a.error).to.equal(true);
        });

        it("Should render to HTML when there is an accordion", () => {
            document.body.innerHTML = validAccordionHTML;
            a.dispatchError('Test Error');
            expect(document.querySelector('#a1').innerHTML).to.equal('<div class="u-error">Test Error</div>')
        });
    });
});
*/