class UiDomElementsFactory {

    static createDomElement (element, attributes) {
        let domElement;
        domElement = document.createElement(element);
        Object.keys(attributes).map( attr => domElement[attr] = attributes[attr] );
        return domElement;
    }

    static createText (text) {
        return document.createTextNode (text);
    }

    static addEvent (element, event, cb) {
        element.addEventListener(event, cb)
    }
}

export default UiDomElementsFactory;
