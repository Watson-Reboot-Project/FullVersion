$(document).ready(function () {
    var contents = new contentsConstructor('contents.xml', 'JavaScript Programming');
    var sections = new sectionsConstructor('ch08_contents.xml', 'index');
    var links = $('#contents')[0];
    var title = $('#title')[0];
    var prev_link = $('#prev_link')[0];
    var next_link = $('#next_link')[0];

    title.innerHTML = 'Chapter ' + contents.getNumber() + ': Javascript Programming';
    prev_link.href = contents.getPrev().path;
    next_link.href = contents.getNext().path;

    var items = sections.getItems();
    for (var i = 0; i < items.length; i++) {
        var link = document.createElement('a');
        var listitem = document.createElement('li');
        link.href = items[i].path;
        link.innerHTML = contents.getNumber() + '.' + (i+1) + ' ' + items[i].name;


        listitem.appendChild(link);
        links.appendChild(listitem);
    }
});
