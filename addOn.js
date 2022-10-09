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

function runMLA() {
    var body = DocumentApp.getActiveDocument().getBody();
    var paragraphs = body.getParagraphs();
    paragraphs.forEach(paragraph => {
        var style = paragraph.getHeading();
        if (style === DocumentApp.ParagraphHeading.HEADING1) {
            let outputText = toTitleCase(paragraph.getText());
            paragraph.setText(outputText);
        }
    });
}

function runAP() {
    // Mason
}

function runAPA() {
    // Brandon
}

function runChicago() {
    // James
}
