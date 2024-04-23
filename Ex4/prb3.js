function findMostFrequentWord(str) { 


    const words = str.split(/\s+/); 


    const wordFrequency = {}; 

    words.forEach(word => { 


        const lowercaseWord = word.toLowerCase(); 


        if (wordFrequency[lowercaseWord]) { 

            wordFrequency[lowercaseWord]++; 

        } else { 

            wordFrequency[lowercaseWord] = 1; 

        } 

    }); 



    let mostFrequentWord = ''; 

    let highestFrequency = 0; 

    for (const word in wordFrequency) { 

        if (wordFrequency[word] > highestFrequency) { 

            mostFrequentWord = word; 

            highestFrequency = wordFrequency[word]; 

        } 

    } 

     

    return mostFrequentWord; 

} 


const inputString = "the quick brown fox jumps over the lazy dog the the the"; 



const mostFrequent = findMostFrequentWord(inputString); 

console.log("Most frequent word:", mostFrequent); 