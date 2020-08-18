const getTheTitles = function() {
  const title = books.map(book => `${book.title}`);
  console.log(title);
}

module.exports = getTheTitles;
