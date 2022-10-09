function onOpen() {
    DocumentApp.getUi()
        .createMenu('LazyCase')
        .addItem('Run MLA', 'runMLA')
        .addItem('Run AP', 'runAP')
        .addItem('Run Chicago', 'runChicago')
        .addItem('Run APA', 'runAPA')
        .addToUi();
}

function runChicago() {
    // TODO: Set a page number
    // TODO: block quotes, blank line around, additional 1/2 inch indent, single spaced.
    setParagraphAlignment("LEFT")
    setParagraphSpacing(2);
    setPageMargins(72, 72, 72, 72);
    setParagraphIndentation(36);
    setHeadingFormatting();
    
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

function setPageMargins(top, bottom, left, right) {
    // Function that sets the page margins for the document. Specified in points.
    let body = DocumentApp.getActiveDocument().getBody();
    body.setMarginTop(top);
    body.setMarginBottom(bottom);
    body.setMarginLeft(left);
    body.setMarginRight(right);
}

function setParagraphIndentation(space) {
    // Function that sets the indentation for the first line of a paragraph. Specified in points
   let paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
    for (let i = 0;i < paragraphs.length;i++) {
      paragraphs[i].setIndentFirstLine(space);
    }
}

function setHeadingFormatting() {
    // Function that changes capitalization of headings, and unindents them (since headings count as paragraphs, but should not be indented.)
    let paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
    for (let i = 0;i < paragraphs.length;i++) {
      let style = paragraphs[i].getHeading();
      if ((style === DocumentApp.ParagraphHeading.HEADING1) || (style === DocumentApp.ParagraphHeading.HEADING2)) {
          let outputText = toTitleCaseChicago(paragraphs[i].getText());
          paragraphs[i].setText(outputText);
          paragraphs[i].setIndentFirstLine(0);
      }
    }
}

function toTitleCaseChicago(str) {
    const coordinatingConjunctions = [
        'for',
        'and',
        'nor',
        'but',
        'or'
      ];

    return str.replace(/\w\S*/g, function (txt) {
        if (!coordinatingConjunctions.includes(txt)){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        } else {
            return txt.toLowerCase();
        }
    });
}

// function createBlockQuote() {

// }
