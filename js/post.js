tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.toc-content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3',
    // Generate unordered list
    orderedList: false
});