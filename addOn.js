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
  const prepositions = [
    'aboard',
    'about',
    'above',
    'across',
    'after',
    'against',
    'along',
    'amid',
    'among',
    'anti',
    'around',
    'as',
    'at',
    'before',
    'behind',
    'below',
    'beneath',
    'beside',
    'besides',
    'between',
    'beyond',
    'but',
    'by',
    'concerning',
    'considering',
    'despite',
    'down',
    'during',
    'except',
    'excepting',
    'excluding',
    'following',
    'for',
    'from',
    'in',
    'inside',
    'into',
    'like',
    'minus',
    'near',
    'of',
    'off',
    'on',
    'onto',
    'opposite',
    'outside',
    'over',
    'past',
    'per',
    'plus',
    'regarding',
    'round',
    'save',
    'since',
    'than',
    'through',
    'to',
    'toward',
    'towards',
    'under',
    'underneath',
    'unlike',
    'until',
    'up',
    'upon',
    'versus',
    'via',
    'with',
    'within',
    'without',
  ]; /* This is not a comprehensive list -- only the 70 most common prepositions 
are in this list. There are also two-word prepositions with a total of ~150 
different prepositions in the English language.*/

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
      prepositions.includes(word) ||
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

  // TODO: Implement the do-not-capitalize-prepositions rule (add to list)
  // TODO: Implement the do-not-capitalize-to-in-infinitives rule (dict. API)
  // TODO: Implement the do-not-capitalize-certain-compound-words rule (dict. API)
  // TODO: Fix colon edge case "2020: your Great Year"
  // TODO: Fix hyphenated word edge case.
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

function runChicago() {
  // James
}
