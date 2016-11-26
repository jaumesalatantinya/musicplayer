class SectionsService {

    static validateHtml (target) {
        if (!document.querySelector(target)) {
            return false;
        }
        if (!document.querySelector(target).classList.contains('Accordion')) {
            return false;
        }
        let headers = document.querySelectorAll(target + ' .Accordion-header');
        let contents = document.querySelectorAll(target + ' .Accordion-content');
        if (headers.length == 0 || contents.length == 0 || headers.length != contents.length) {
            return false;
        }
        return true;
    }

    static getHtmlSections (target) {

        let sections = [];
        let headers = document.querySelectorAll(target + ' .Accordion-header');
        let contents = document.querySelectorAll(target + ' .Accordion-content');
        let numPanels = headers.length;
        for (let i = 0; i < numPanels; i++) {
            sections.push({
                header: headers[i].innerHTML,
                content: contents[i].innerHTML
            });
        }
        return sections;
    }


    static getSectionsFromHtml (target) {

        if (SectionsService.validateHtml(target)) {
            return SectionsService.getHtmlSections(target);
        }
        else {
            return [];
        }
    }

    static getSectionsFromApi () {
        const section = {
            header: 'Section 5',
            content: 'Section 5 Content...'
        };
        const delay = 1000;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], section));
            }, delay);
            // Uncoment to see erro handling
            //reject(new Error('Error getSections from API'));
        });
    }
}

export default SectionsService;
