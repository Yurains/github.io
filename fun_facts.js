// Define an array of texts
const texts = [
    'Did you know that the word "vowel" comes from the Latin word "vocalis," meaning "sounding"?',
    'Did you know that the sentence "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo" is grammatically correct in English?',
    'Did you know that the term "onomatopoeia" refers to words that imitate the sound they describe, like "buzz" or "hiss"?',
    'Did you know that the word "laser" is an acronym for "Light Amplification by Stimulated Emission of Radiation"?',
    'Did you know that the Ewellic alphabet, used for the Klingon language in Star Trek, has its own script and characters?',
    'Did you know that the oldest known written language is Sumerian cuneiform, dating back to 3200 BCE?',
    'Did you know that the word "serendipity" has its origins in a Persian fairy tale?',
    'Did you know that the word "book" has an Old English origin and originally meant "a written document"?',
    'Did you know that the word "robot" was first introduced in a 1920 play by Czech playwright Karel Čapek?',
    'Did you know that the Inuit languages have multiple words for different types of snow, reflecting their environment?',
    'Did you know that some languages, like Japanese, have different writing systems for formal and informal communication?',
    'Did you know that there are more possible iterations of a game of chess than there are atoms in the known universe?',
    'Did you know that the word "hello" was originally used as a telephone greeting, not a face-to-face one?',
    'Did you know that the word "avocado" comes from the Nahuatl word "āhuacatl"?',
    'Did you know that the word "quixotic" comes from the character Don Quixote and means exceedingly idealistic or impractical?',
    'Did you know that the word "penguin" has a Welsh origin, meaning "white head"?',
    'Did you know that the Cherokee syllabary, created by Sequoyah in the 1820s, allows the Cherokee language to be written?',
    'Did you know that the concept of "Eskimo words for snow" is a linguistic myth, as the Inuit languages have a rich vocabulary for various snow types?',
    'Did you know that the word "karaoke" is Japanese for "empty orchestra"?',
    'Did you know that the term "crash blossom" refers to a headline or phrase that is ambiguous and can be interpreted in multiple ways?',
    'Did you know that the word "clue" has its origins in Greek mythology, referring to a ball of thread used by Theseus in the Labyrinth?',
    'Did you know that the word "sinister" originally meant "left" in Latin, but came to be associated with evil or malevolence?',
    'Did you know that there are languages, like Ubykh, that have extremely complex consonant systems with more than 80 different consonants?',
    'Did you know that the word "software" was first used in print in 1958, and "hardware" was coined to contrast with it?',
    'Did you know that the word "internet" is a contraction of "interconnected networks"?',
    'Did you know that the word "hello" was popularized by Thomas Edison, who suggested it as the standard greeting for answering the telephone?',
    'Did you know that the concept of "colorless green ideas sleep furiously" is a famous example of a grammatically correct, but semantically nonsensical sentence?',
    'Did you know that the term "loanword" refers to a word borrowed from one language and incorporated into another, like "cliché" from French?',
    'Did you know that the word "kangaroo" is believed to have originated from an Aboriginal Australian word meaning "I don\'t understand"?',
    'Did you know that the word "goodbye" is a contraction of "God be with you"?',
    'Did you know that some languages, like Finnish, don\'t use gender-specific pronouns like "he" or "she"?',
    'Did you know that the word "tsunami" comes from the Japanese words "tsu" (harbor) and "nami" (wave)?',
    'Did you know that there are approximately 7,000 languages spoken around the world today?',
    'Did you know that the most widely spoken language in the world is Mandarin Chinese?',
    'Did you know that the shortest complete sentence in the English language is "I am"?',
    'Did you know that the word "set" has the highest number of different meanings in the English language?',
    'Did you know that the Hawaiian alphabet has only 13 letters?',
    'Did you know that the word "bookkeeper" and "bookkeeping" are the only unhyphenated English words with three consecutive double letters?',
    'Did you know that the longest word in the English language without a vowel is "rhythms"?',
    'Did you know that the word "alphabet" comes from the first two letters of the Greek alphabet, "alpha" and "beta"?',
    'Did you know that the term "OK" is one of the most widely recognized words in the world, understood in many languages?',
    'Did you know that sign languages, like American Sign Language (ASL), are complete languages with their own grammar and syntax?',
    'Did you know that the word "mango" comes from the Tamil word "māṅkāy," which means "mango fruit"?',
    'Did you know that the longest word in the English language, found in some dictionaries, is "pneumonoultramicroscopicsilicovolcanoconiosis"?',
    'Did you know that the word "uncopyrightable" is the longest English word that can be written without repeating any letters?',
    'Did you know that there are languages like Pirahã that have no fixed words for specific numbers and only use approximate terms like "few" or "many"?',
    'Did you know that the Welsh language has a single word for "a red weather-related sunset" called "cysgod y serch"?',
    'Did you know that the Basque language is a language isolate, meaning it has no known linguistic relatives?',
    'Did you know that the word "gymnophobia" refers to the fear of learning grammar or language rules?',
    'Did you know that the longest one-syllable word in English is "screeched"?',
    'Did you know the dessert Tiramisu comes from Italian meaning "pick me up"?',

    'Did you know there is no word directly meaning "forget" in Southern Min and Squliq Atayal? There is only "cannot remember".',
    'Did you know in Southern Min the word <em>有影</em> "True" is literally "to have shadow"?',
    'Did you know in Squliq Atayal <em>hongu\' utux</em> "rainbow" is literally "the bridge of the ancestors\' spirits"?',
    'Did you know Taiwan, an island 1/4 the size of New York, is home to 20 more languages?',
    'Did you know Taiwan is the homeland of the Austronesian language family?',
    'Did you know there are up to 7 tones in Taiwan Southern Min?',
    'Did you know that Japanese, a colonial legacy, is spoken by some older Taiwanese people who grew up during the Japanese colonial period?',
    'Did you know that indigenous Formosan languages are considered endangered, with only a few thousand speakers remaining?',
    'Did you know that the Amis language is one of the most widely spoken indigenous languages in Taiwan?',
    'Did you know that Taiwanese people often use romanization systems for writing Taiwanese languages?',
    'Did you know that the Bunun language has a rich tradition of oral storytelling and song?',
    'Did you know that Mandarin Chinese is the medium of instruction in Taiwanese schools, but many subjects are taught in indigenous languages in some areas?',
    'Did you know that Taiwanese people often mix different languages and dialects in everyday conversation?',
    'Did you know that Rukai is known for its rich vocabulary related to nature and traditional practices?',
    'Did you know that in Taiwan people don\'t say "Hello!"? People say "Have you eaten?".',
    'Did you know that many indigenous Taiwanese languages are agglutinative, where words are formed by adding prefixes and suffixes to a root word?',
    'Did you know that some indigenous languages in Taiwan have complex systems for indicating social status and respect in speech?',
    'Did you know that the use of Hokkien in Taiwan is often accompanied by unique expressions and idioms not found in other Chinese-speaking regions?',

    'Did you know there is no word directly meaning "forget" in Southern Min and Squliq Atayal? There is only "cannot remember".',
    'Did you know in Southern Min the word <em>有影</em> "True" is literally "to have shadow"?',
    'Did you know in Squliq Atayal <em>hongu\' utux</em> "rainbow" is literally "the bridge of the ancestors\' spirits"?',
    'Did you know Taiwan, an island 1/4 the size of New York, is home to 20 more languages?',
    'Did you know Taiwan is the homeland of the Austronesian language family?',
    'Did you know there are up to 7 tones in Taiwan Southern Min?',
    'Did you know that Japanese, a colonial legacy, is spoken by some older Taiwanese people who grew up during the Japanese colonial period?',
    'Did you know that indigenous Formosan languages are considered endangered, with only a few thousand speakers remaining?',
    'Did you know that the Amis language is one of the most widely spoken indigenous languages in Taiwan?',
    'Did you know that Taiwanese people often use romanization systems for writing Taiwanese languages?',
    'Did you know that the Bunun language has a rich tradition of oral storytelling and song?',
    'Did you know that Mandarin Chinese is the medium of instruction in Taiwanese schools, but many subjects are taught in indigenous languages in some areas?',
    'Did you know that Taiwanese people often mix different languages and dialects in everyday conversation?',
    'Did you know that Rukai is known for its rich vocabulary related to nature and traditional practices?',
    'Did you know that in Taiwan people don\'t say "Hello!"? People say "Have you eaten?".',
    'Did you know that many indigenous Taiwanese languages are agglutinative, where words are formed by adding prefixes and suffixes to a root word?',
    'Did you know that some indigenous languages in Taiwan have complex systems for indicating social status and respect in speech?',
    'Did you know that the use of Hokkien in Taiwan is often accompanied by unique expressions and idioms not found in other Chinese-speaking regions?'
    
];

// // Get a reference to the div element by its class name
// var divElement = document.querySelector('.preloader');

// // Get the width of the div element
// var divWidth = divElement.getBoundingClientRect().width;

// Function to select and display a random text
function displayRandomText() {
    // Get a random index within the range of the array
    const randomIndex = Math.floor(Math.random() * texts.length);

    // Get the random text from the array
    const randomText = texts[randomIndex];

    // Display the random text in the HTML element with the id "randomText"
    // document.getElementById("randomText").style.width = document.querySelector('.preloader-animation').getBoundingClientRect().width
    const text_element = document.getElementById("randomText")
    text_element.style.opacity = 0

    setTimeout(
        function () {
            text_element.innerHTML = randomText
            text_element.style.opacity = 1
        }, 500
    )
}

// const randomIndex = Math.floor(Math.random() * texts.length);
// const randomText = texts[randomIndex];
// text_element = document.getElementById("randomText")
// text_element.innerHTML = randomText

displayRandomText()
const displayRandomTextInterval = setInterval(displayRandomText, 5000);

window.onload = function(){
    clearInterval(displayRandomTextInterval)
    document.getElementById("randomText").style.zIndex = '-10000'
    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 0
    )
    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 100
    )

    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 200
    )

    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 300
    )

    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 400
    )
    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 500
    )
    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 600
    )
    setTimeout(
        function () {
            document.getElementById("randomText").style.opacity = '0'
            document.getElementById("randomText").innerHTML = ''
        }, 700
    )

 };

// document.addEventListener('load', function () {
//     // This code will run when the HTML document is fully loaded and parsed.
//     const u = 1
//     clearInterval(displayRandomTextTask)
//     text_element.style.zIndex = '-10000'
// });

// function whenLoading() {
//     setInterval(displayRandomText, 1000);
// }

// window.addEventListener("load", whenLoading);

// Call the function when the page loads
// 
