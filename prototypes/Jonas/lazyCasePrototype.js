// This script capitalizes the first letter of every word in the Google Doc.

function onOpen() {
    DocumentApp.getUi()
        .createMenu('Jonas Prototype')
        .addItem('Run', 'runLazyCase')
        .addToUi();
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function runLazyCase() {
    // Get and store the document's content as a single string.
    var document = DocumentApp.getActiveDocument();
    var body = document.getBody();
    var inputText = body.getText();

    // Turn the first letter and any other letter after a space into a capital.
    outputText = toTitleCase(inputText);

    // Replace the document's existing text with the text inside this string.
    textElement = body.editAsText();
    textElement.deleteText(0, textElement.getText().length - 1);
    textElement.appendText(outputText);
}

// This script capitalizes the first letter of every paragraph header in a
// Google doc.
function onOpen() {
    DocumentApp.getUi()
        .createMenu('Jonas Prototype')
        .addItem('Run', 'runLazyCase')
        .addToUi();
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function runLazyCase() {
    var body = DocumentApp.getActiveDocument().getBody();
    var paragraphs = body.getParagraphs();
    paragraphs.forEach((paragraph) => {
        var style = paragraph.getHeading();
        if (style === DocumentApp.ParagraphHeading.HEADING1) {
            let outputText = toTitleCase(paragraph.getText());
            paragraph.setText(outputText);
        }
    });
}

//   asdkfljasl;kdjfs

function onOpen() {
    DocumentApp.getUi()
        .createMenu('LazyCase')
        .addItem('Run MLA', 'runMLA')
        .addToUi();
}

function toTitleCaseMLA(inputText) {
    // Convert a string to title case using MLA style.
    return inputText.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function runMLA() {
    // Get all paragraph elements.
    var body = DocumentApp.getActiveDocument().getBody();
    var paragraphs = body.getParagraphs();
    // If the paragraph has a style other than normal text, convert to title case.
    paragraphs.forEach((paragraph) => {
        var style = paragraph.getHeading();
        if (style != DocumentApp.ParagraphHeading.NORMAL) {
            let outputText = toTitleCaseMLA(paragraph.getText());
            paragraph.setText(outputText);
        }
    });
}
