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
