function order(words){
    // Split the input string into an array of words
    const wordArray = words.split(' ');

    // Sort the words based on the number found within each word
    wordArray.sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)); // Extract number from word A
        const numB = parseInt(b.match(/\d+/)); // Extract number from word B
        return numA - numB; // Compare the extracted numbers for sorting
    });

    // Join the sorted words and return as a single string
    return wordArray.join(' ');
}

  console.log(order("is2 this1 food4 a3"))