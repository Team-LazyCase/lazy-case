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