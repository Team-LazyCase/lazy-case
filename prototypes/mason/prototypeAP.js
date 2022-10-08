function onOpen() {
    DocumentApp.getUi()
        .createMenu('LazyCase')
        .addItem('Run AP', 'runAP')
        .addToUi();
}

function runAP() {
  var header = DocumentApp.getActiveDocument().getHeader();
  var title = header.editAsText()
  var old_title = header.getText()
  var new_title = header.getText()

  var new_title = new_title.toLowerCase();
  var new_title = new_title.split(" ");

  var banned = ["a", "an", "the", "for", "and", "nor", "but", "or", "yet", "so", "ago", "as", "at", "by", "for", "in", "of", "off", "on", "out", "per", "to", "up", "via"]

  for (let i = 0; i < new_title.length; i++) {
    new_title[0] = new_title[0].charAt(0).toUpperCase() + new_title[0].slice(1)
    new_title[new_title.length - 1] = new_title[new_title.length - 1].charAt(0).toUpperCase() + new_title[new_title.length - 1].slice(1)
    if (banned.includes(new_title[i]) == false) {
      new_title[i] = new_title[i].charAt(0).toUpperCase() + new_title[i].slice(1);
    }
  }
  
  var new_title = new_title.join(" ")
  title.replaceText(old_title, new_title);
}
