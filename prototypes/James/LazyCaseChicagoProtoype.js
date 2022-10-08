function onOpen() {
    DocumentApp.getUi()
        .createMenu('LazyCase')
        .addItem('Run MLA', 'runMLA')
        .addItem('Run AP', 'runAP')
        .addItem('Run Chicago', 'runChicago')
        .addItem('Run APA', 'runAPA')
        .addToUi();
}

// A copy-paste function that capitalizes the first letter of every word.
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function runChicago() {
    // James
    // -Set margins
    // -Set a page number
    // -Set double spacing
    // -Left Align text
    // -Chapter heading, subheading, second level subheading
    // -block quotes, blank line around, additional 1/2 inch indent, single spaced.
    setParagraphAlignment("LEFT")
    setParagraphSpacing(2);
    
    
}

function setParagraphAlignment(position) {
    // Function that sets the horizontal alignment for all paragraphs in the body of the document.
    let paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
    for (let i = 0;i < paragraphs.length;i++) {
      paragraphs[i].setAlignment(DocumentApp.HorizontalAlignment.position);
    }
}

function setParagraphSpacing(spaces) {
    // Function that sets the line spacing for all paragraphs based on amount of empty lines between text.
    let paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
    for (let i = 0;i < paragraphs.length;i++) {
      paragraphs[i].setLineSpacing(spaces);
    }
}