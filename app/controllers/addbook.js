// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var myBooks = Alloy.Collections.books;

function addBook() {
	var book = Alloy.createModel('books', {
		title : $.titleInput.value,
		author : $.authorInput.value
	});
	
	myBooks.add(book);
	book.save();
	
	//Close the window
	$.addbook.close();
}
