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

function runAP() {
    // Mason
}

function runChicago() {
    // James
}

function runAPA() {
    // Brandon
}
