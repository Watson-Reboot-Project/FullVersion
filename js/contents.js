function contentsConstructor(xml_location, name) {
    // so we have a reference to our `contents` object throughout (private)
    var self = this;
    // all our information-of-interest (private)
    var items, number, index;

    // take a name of an element and return it's location in sequence
    // (private)
    var locate = function (name) {
        if (name === 'index') {
            return null;
        }

        for (var i = 0; i < items.length; i++) {
            if (items[i].name === name) {
                return i;
            }
        }

        throw new Error('[-] Element not found: ' + name);
    }

    // do all of this when making the object (private)
    var init = function () {
        items = [];

        // synchronously pull in xml and parse it into index and
        // items
        $.ajax({ url: xml_location, async: false, success: function (xml) {

            var $xmlobj = $($('index', xml)[0]);
            index = {};

            // set up the 'Table Of Contents' item
            index.name = 'index';
            index.path = $xmlobj.find('path').text();

            // set up our list of items
            $chapters = $('chapter', xml);
            for (var i = 0; i < $chapters.length; i++) {
                var item = {};
                $xmlobj = $($chapters[i]);

                item.name = $xmlobj.find('name').text();
                item.path = $xmlobj.find('path').text();
                item.number = i + 1;

                var sub_xml = $xmlobj.find('sections').text();
                if (sub_xml !== '') {
                    item.sections = sectionsConstructor(sub_xml, 'index');
                }

                items.push(item);
            }
        }});

        number = locate(name);
    };

    // get the next item in sequence
    // (used for setting up links)
    self.getNext = function () {
        if (number === null) {
            throw new Error('[-] Asking for next, but we\'re in index!');
        }

        if (items.length == number + 1) {
            // the current item is last: link them home
            return index;
        } else {
            return items[number + 1];
        }
    };

    // get the previous item in sequence
    // (used for setting up links)
    self.getPrev = function () {
        if (number === null) {
            throw new Error('[-] Asking for previous, but we\'re in index!');
        }

        if (0 === number) {
            // the current item is the first: link them home
            return index;
        } else {
            return items[number - 1];
        }
    };

    self.getItems = function () {
        return JSON.parse(JSON.stringify(items));
    }

    self.getNumber = function () {
        if (number === null) {
            throw new Error('[-] Asking for number, but we\'re in index!');
        }

        return number + 1;
    }

    self.getIndex = function () {
        return JSON.parse(JSON.stringify(index));
    }

    // call our loadup function
    init();
}

function sectionsConstructor (xml_location, name) {
    var self = this;
    var items, number, index, count;

    var locate = function (name) {
        if (name === 'index') {
            return null;
        }

        for (var i = 0; i < items.length; i++) {
            if (items[i].name === name) {
                return i;
            }
        }

        throw new Error('[-] Element not found: ' + name);
    }

    // do all of this when making the object (private)
    var init = function () {
        items = [];

        // synchronously pull in xml and parse it into index and
        // items
        $.ajax({ url: xml_location, async: false, success: function (xml) {

            var $xmlobj = $($('index', xml)[0]);
            index = {};

            // set up the 'Table Of Contents' item
            index.name = 'index';
            index.path = $xmlobj.find('path').text();

            // set up our list of items
            // FUN FACT: THIS IS THE ONLY PART THAT'S DIFFERENT.
            // IT SURE WOULD BE NICE IF WE KNEW HOW TO DO INHERITANCE IN THIS
            // GOD-FORSAKEN LANGUAGE
            $sections = $('section', xml);
            for (var i = 0; i < $sections.length; i++) {
                var item = {};
                $xmlobj = $($sections[i]);

                item.name = $xmlobj.find('name').text();
                item.path = $xmlobj.find('path').text();
                item.numfigures = Number($xmlobj.find('numfigures').text());
                item.runningsum = count + item.numfigures;
                item.number = i + 1;

                var sub_xml = $xmlobj.find('subsections').text();
                if (sub_xml !== '') {
                    item.sections = sectionsConstructor(sub_xml, 'index');
                }

                items.push(item);
            }
            // END "ONLY PART THAT'S DIFFERENT"
        }});

        number = locate(name);
    };

    // get the next item in sequence
    // (used for setting up links)
    self.getNext = function () {
        if (number === null) {
            throw new Error('[-] Asking for next, but we\'re in index!');
        }

        if (items.length == number + 1) {
            // the current item is last: link them home
            return index;
        } else {
            return items[number + 1];
        }
    };

    // get the previous item in sequence
    // (used for setting up links)
    self.getPrev = function () {
        if (number === null) {
            throw new Error('[-] Asking for previous, but we\'re in index!');
        }

        if (0 === number) {
            // the current item is the first: link them home
            return index;
        } else {
            return items[number - 1];
        }
    };

    self.getItems = function () {
        return JSON.parse(JSON.stringify(items));
    }

    self.getNumber = function () {
        if (number === null) {
            throw new Error('[-] Asking for number, but we\'re in index!');
        }

        return number + 1;
    }

    self.getIndex = function () {
        return JSON.parse(JSON.stringify(index));
    }

    // call our loadup function
    init();
}

// vim: et sts=4 sw=4
