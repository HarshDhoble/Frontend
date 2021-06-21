/*Reading status of a book library*/
var library = [ 
    {
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        readingStatus: false
    },
    {
        title: 'The Rudest Book Ever',
        author: 'Shwetabh Gangwar',
        readingStatus: true
    },
    {
        title: 'The Laws of Human Nature',
        author: 'Robert Greene',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
   