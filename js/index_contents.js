$(document).ready(function () {
    // instantiate our `contents`
    var contents = new contentsConstructor('contents.xml', 'index');
    // grab the html element we're going to stuff our links in
    var links = $('#contents')[0];

    var items = contents.getItems();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        element = document.createElement('a');
        element.innerHTML = 'Chapter ' + item.number + ': ' + item.name;
        element.href = item.path;
        links.appendChild(element);

        var br = document.createElement('br');
        links.appendChild(br);
    }
});
// vim: et sts=4 sw=4
