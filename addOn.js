function onOpen() {
  DocumentApp.getUi()
    .createMenu('LazyCase')
    .addItem('Run MLA', 'runMLA')
    .addItem('Run AP', 'runAP')
    .addItem('Run Chicago', 'runChicago')
    .addItem('Run APA', 'runAPA')
    .addToUi();
}

function toTitleCaseMLA(inputText) {
  // Convert a string to title case using MLA style.
  var outputText = '';
  var currentWord = '';
  var currentWordIndex = 1;
  const totalWordCount = inputText.split(' ').length;
  const articles = ['a', 'an', 'the'];
  const coordinatingConjunctions = [
    'for',
    'and',
    'nor',
    'but',
    'or',
    'yet',
    'so',
  ];
  const single_word_prepositions = [
    'About',
    'After',
    'Ago',
    'Around',
    'At',
    'Before',
    'By',
    'Circa',
    'During',
    'Following',
    'For',
    'From',
    'Gone',
    'In',
    'On',
    'Past',
    'Since',
    'Until',
    'till',
    'Aboard',
    'Above',
    'Across',
    'Against',
    'Alongside',
    'Amid',
    'Among',
    'Astride',
    'At',
    'Atop',
    'Behind',
    'Below',
    'Beneath',
    'Beside',
    'Between',
    'Beyond',
    'By',
    'Far',
    'From',
    'In',
    'Inside',
    'Into',
    'Minus',
    'Near',
    'Of',
    'Off',
    'On',
    'Onto',
    'Upon',
    'Opposite',
    'Out',
    'Outside',
    'Over',
    'Round',
    'Through',
    'Throughout',
    'To',
    'Toward',
    'towards',
    'Under',
    'Underneath',
    'With',
    'Within',
    'Without',
    'Above',
    'Across',
    'Against',
    'Ahead',
    'Along',
    'Amid',
    'Around',
    'Away',
    'Behind',
    'Below',
    'Beneath',
    'Down',
    'Into',
    'Off',
    'On',
    'Onto',
    'Over',
    'Past',
    'Round',
    'Through',
    'Toward',
    'towards',
    'Under',
    'Up',
    'Via',
    'About',
    'Anti',
    'As',
    'Bar',
    'Barring',
    'Besides',
    'By',
    'But',
    'Concerning',
    'Considering',
    'Counting',
    'Cum',
    'Despite',
    'Except',
    'Excepting',
    'Excluding',
    'Given',
    'Including',
    'Less',
    'Like',
    'Notwithstanding',
    'Of',
    'Pending',
    'Per',
    'Plus',
    'Pro',
    'Re',
    'Regarding',
    'Save',
    'Saving',
    'Than',
    'Unlike',
    'Versus',
    'With',
    'Wort',
  ];

  const multiple_word_prepositions = [
    'Prior to',
    'Up to',
    'Up until',
    'Apart from',
    'Close to',
    'Far from',
    'Forward of',
    'In between',
    'In front of',
    'Near to',
    'Next to',
    'On board',
    'On top of',
    'Out of',
    'Outside of',
    'Together with',
    'Up against',
    'Along with',
    'Away from',
    'By means of',
    'Further to',
    'In between',
    'Off of',
    'Out of',
    'According to',
    'As for',
    'As per',
    'As to',
    'As well as',
    'Aside from',
    'Because of',
    'But for',
    'Contrary to',
    'Depending on',
    'Due to',
    'Except for',
    'In addition to',
    'in case of',
    'In face of',
    'In favor of',
    'in favour of',
    'In light of',
    'In spite of',
    'In view of',
    'Instead of',
    'On account of',
    'On behalf of',
    'Other than',
    'Owing to',
    'Preparatory to',
    'Regardless of',
    'Save for',
    'Thanks to',
    'With reference to',
    'With regard to',
  ];

  function isWordCapitalized(word) {
    // Capitalize the first word.
    if (currentWordIndex === 1) {
      return true;
    }
    // Capitalize the last word. (May not be necessary anymore.)
    else if (currentWordIndex === totalWordCount) {
      return true;
    }
    // Don't capitalize if the word is an article, preposition, or
    // coordinating conjunction.
    else if (
      articles.includes(word) ||
      single_word_prepositions.includes(word) ||
      coordinatingConjunctions.includes(word)
    ) {
      return false;
    } else {
      return true;
    }
  }

  function isWord(word) {
    // Check if the inputted string is a word.
    if (/[a-zA-Z]/.test(word.charAt(0)) === false) {
      return false;
    } else if (word.length === 1 && word !== 'i') {
      return false;
    }
    return true;
  }

  function capitalizeFirstLetter(word) {
    // Capitalize the first letter of a string.
    var firstLetterCapitalized = word[0].toUpperCase();
    word = word.slice(1);
    word = firstLetterCapitalized + word;
    return word;
  }

  // Parse through the inputted text one letter at a time.
  inputText = inputText.toLowerCase();
  for (let i = 0; i < inputText.length; i++) {
    if (/[a-zA-Z]/.test(inputText[i])) {
      currentWord += inputText[i];
    } else {
      if (isWordCapitalized(currentWord) && isWord(currentWord)) {
        currentWord = capitalizeFirstLetter(currentWord);
        currentWordIndex += 1;
      }
      outputText += currentWord + inputText[i];
      currentWord = '';
    }
  }

  // Add last word.
  if (isWord(currentWord)) {
    outputText += capitalizeFirstLetter(currentWord);
  }

  // Find and un-capitalize multiple-word prepositions.
  for (let i = 0; i < multiple_word_prepositions.length; i++) {
    const string = multiple_word_prepositions[i];
    const regex = new RegExp(string, 'i');
    outputText = outputText.replaceAll(
      regex,
      multiple_word_prepositions[i].toLowerCase()
    );
  }

  return outputText;
}

// Jonas
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

// Mason
function runAP() {
  var arr = [];
  var body = DocumentApp.getActiveDocument().getBody();
  var paragraphs = body.getParagraphs();
  paragraphs.forEach((paragraph) => {
    var style = paragraph.getHeading();
    if (style != DocumentApp.ParagraphHeading.NORMAL) {
      arr.push(paragraph.getText().split(' '));
    }
    return arr;
  });

  var banned = [
    'a',
    'an',
    'the',
    'for',
    'and',
    'nor',
    'but',
    'or',
    'yet',
    'so',
    'ago',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'off',
    'on',
    'out',
    'per',
    'to',
    'up',
    'via',
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toString() == arr[i][j].toString().toUpperCase()) {
        arr[i][j] = arr[i][j].toLowerCase();
      }

      if (banned.includes(arr[i][j]) == false) {
        arr[i][j] = arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
      }
    }

    arr[i][0] = arr[i][0].charAt(0).toUpperCase() + arr[i][0].slice(1);
    arr[i][arr[i].length - 1] =
      arr[i][arr[i].length - 1].charAt(0).toUpperCase() +
      arr[i][arr[i].length - 1].slice(1);

    arr[i] = arr[i].join(' ');
  }

  paragraphs.forEach((paragraph) => {
    for (let i = 0; i < arr.length; i++) {
      if (paragraph.getText().toLowerCase() == arr[i].toLowerCase()) {
        paragraph.editAsText().replaceText(paragraph.getText(), arr[i]);
      }
    }
  });
}

function runAPA() {
  // Brandon
}

// James
function runChicago() {
  // TODO: Set a page number
  // TODO: block quotes, blank line around, additional 1/2 inch indent, single spaced.
  setParagraphAlignment('LEFT');
  setParagraphSpacing(2);
  setPageMargins(72, 72, 72, 72);
  setParagraphIndentation(36);
  setHeadingFormatting();
}

function setParagraphAlignment(position) {
  // Function that sets the horizontal alignment for all paragraphs in the body of the document.
  let paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAlignment(DocumentApp.HorizontalAlignment.position);
  }
}

function setParagraphSpacing(spaces) {
  // Function that sets the line spacing for all paragraphs based on amount of empty lines between text.
  let paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
  for (let i = 0; i < paragraphs.length; i++) {
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
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setIndentFirstLine(space);
  }
}

function setHeadingFormatting() {
  // Function that changes capitalization of headings, and applies other formatting specific to headings not paragraphs.)
  let paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
  for (let i = 0; i < paragraphs.length; i++) {
    let style = paragraphs[i].getHeading();
    if (
      style === DocumentApp.ParagraphHeading.HEADING1 ||
      style === DocumentApp.ParagraphHeading.HEADING2
    ) {
      let outputText = toTitleCaseChicago(paragraphs[i].getText());
      paragraphs[i].setText(outputText);
      paragraphs[i].setIndentFirstLine(0);
    }
  }
}

function toTitleCaseChicago(str) {
  // Function that converts heading string to Chicago Style title casing.
  const coordinatingConjunctions = ['for', 'and', 'nor', 'but', 'or'];
  // Splits the string into substrings by white space and checks for conjunctions that are left out of capitalization in Chicago Style. returns the capitalized string.
  return str.replace(/\w\S*/g, function (txt) {
    if (!coordinatingConjunctions.includes(txt)) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    } else {
      return txt.toLowerCase();
    }
  });
}

/* TESTS */
function testMLA() {
  // This function is used to test the toTitleCaseMLA() function.

  // Input strings for testing.
  testCases = [
    'Hello world!',
    'how are you today?',
    'ABBA is a band',
    'the run-away-at-any-chance dog',
  ];

  // Expected output for the input strings.
  expectedOutputs = [
    'Hello World!',
    'How Are You Today?',
    'ABBA Is a Band',
    'The Run-Away-at-Any-Chance Dog',
  ];

  // Test the input data, compare it to the expected output, and log results.
  for (let i = 0; i < testCases.length; i++) {
    testOutput = toTitleCaseMLA(testCases[i]);
    if (testOutput === expectedOutputs[i]) {
      console.log(
        `Test ${i + 1} result: PASSED (test input: "${
          testCases[i]
        }" > test output: "${testOutput}" | expected output: "${
          expectedOutputs[i]
        }")`
      );
    } else {
      console.log(
        `Test ${i + 1} result: FAILED (test input: "${
          testCases[i]
        }" > test output: "${testOutput}" | expected output: "${
          expectedOutputs[i]
        }")`
      );
    }
  }
}
