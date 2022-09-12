let book = {
    title: "The Lord of rings",
    description: "A book about magic ring",
    numberOfPages: 100,
    author: "John Smith",
    reading: false,
updateReadingStatus(){
    this.reading = true;
    console.log(book)
    }
}
book.updateReadingStatus()

bookArr = [
        {
        title: "Harry Potter",
        description: "an adventure of a boy",
        numberOfPages: 200,
        author: "Tayo James",
        reading: false,
        },
        {
            title: "Rich Dad Poor dad",
            description: "A financial",
            numberOfPages: 300,
            author: "Robert Kiyosaki",
            reading: true,
        },
        {
            title: "Javascript Essential",
            description: " a programming book",
            numberOfPages: 400,
            author: "Peter Samson",
            reading: true,
        }
]

bookArr.forEach(element => {
    console.log(element)
});
