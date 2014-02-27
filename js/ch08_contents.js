$(document).ready(function () {
    window.DEBUG = false;
    var contents = new contentsConstructor('contents.xml', 'JavaScript Programming');

    window.DEBUG = true;
    var sections = new sectionsConstructor('ch08_contents.xml', 'index');
    var links = $('#contents')[0];
    var title = $('#title')[0];
    var prev_link = $('#prev_link')[0];
    var next_link = $('#next_link')[0];

    title.innerHTML = 'Chapter ' + contents.getNumber() + ': Javascript Programming';
    prev_link.href = contents.getPrev().path;
    next_link.href = contents.getNext().path;


    var linkify = function (prefix, item) {
        var link = document.createElement('a');
        var listItem = document.createElement('li');
        link.href = item.path;
        link.innerHTML = prefix + ': ' + item.name;

        listItem.appendChild(link);

        if (item.sections !== undefined) {
            var subitems = item.sections.getItems();
            var list = document.createElement('ul');
            for (var i = 0; i < subitems.length; i++) {
                list.appendChild(linkify(prefix + '.' + (i + 1), subitems[i]));
            }

            listItem.appendChild(list);
        }

        return listItem;
    };

    var items = sections.getItems();

    for (var i = 0; i < items.length; i++) {
        links.appendChild(linkify( 's.' + contents.getNumber() + '.' + (i + 1), items[i]));
    }
});
