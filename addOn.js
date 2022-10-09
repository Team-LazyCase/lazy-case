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
    // Get a list of all text elements called "textElements".

    // Remove elements from the "textElements" list that do not match the 
    // heading or title styles in the document.

    /* Collect meta data about the text elements that remain in the 
    "textElements" list. This data will later be applied to the text that
    replaces the existing text in order to keep the text's original 
    stylings */     /* OR */       /* Edit the text in place if possible, 
    keeping the text's original stylings. */

    // Convert the string of the text elements list into an MLA style title case

    // Apply MLA-formatted-title-case text elements to replace existing text
    // elements.
    
    /* PROTOTYPE CODE */
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
    var arr = []
    var body = DocumentApp.getActiveDocument().getBody();
    var paragraphs = body.getParagraphs();
    paragraphs.forEach(paragraph => {
        var style = paragraph.getHeading();
        if (style != DocumentApp.ParagraphHeading.NORMAL) {
            arr.push(paragraph.getText().split(" "));
        }
        return arr
    })

    var banned = ["a", "an", "the", "for", "and", "nor", "but", "or", "yet", "so", "ago", "as", "at", "by", "for", "in", "of", "off", "on", "out", "per", "to", "up", "via"]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].toString() == arr[i][j].toString().toUpperCase()) {
            arr[i][j] = arr[i][j].toLowerCase()
        }

        if (banned.includes(arr[i][j]) == false) {
            arr[i][j] = arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
        }
    }

        arr[i][0] = arr[i][0].charAt(0).toUpperCase() + arr[i][0].slice(1);
        arr[i][arr[i].length - 1] = arr[i][arr[i].length - 1].charAt(0).toUpperCase() + arr[i][arr[i].length - 1].slice(1);

        arr[i] = arr[i].join(" ")
    }

    paragraphs.forEach(paragraph => {
        for (let i = 0; i < arr.length; i++) {
            if (paragraph.getText().toLowerCase() == arr[i].toLowerCase()) {
                paragraph.editAsText().replaceText(paragraph.getText(), arr[i])
            }
        }
    })
}

function runAPA() {
    // Brandon
}

function runChicago() {
    // James
}
