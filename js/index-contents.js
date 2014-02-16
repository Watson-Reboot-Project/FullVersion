$(document).ready(function () {
    // instantiate our `contents`
    var contents = new contentsConstructor('contents.xml', 'index');
    // grab the html element we're going to stuff our links in
    var links = $('#contents')[0];

    var items = contents.getItems();


    // for each item in the Table of Contents, make a link
    for (var i = 0; i < items.length; i++) {
        // grab the next item from contents
        var item = items[i];
        // make an html element for it
        element = document.createElement('a');

        // set it's name
        element.innerHTML = 'Chapter ' + item.number + ': ' + item.name;
        // set the path to jump to
        element.href = item.path;

        // and drop it in the page
        links.appendChild(element);
        var br = document.createElement('br');
        links.appendChild(br);
    }
});
// vim: et sts=4 sw=4
