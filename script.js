function wordSearch() {
    let sentence = document.querySelector('#sentenceInput').value;
    let word = document.querySelector("#searchWord").value;
    let output = document.querySelector("#p1d1");
    
    let isFound = sentence.includes(word);
    let p1d1 = isFound ? "[found!]" : "[not found!]";
    
    output.textContent = p1d1;
}

function outputReset() {
    document.querySelector('#p1d1').textContent = "[found | not found]";
}

function wordCount() {
    let rawSentence = document.querySelector("#wordCount").value;
    let output = document.querySelector('#p1d2');

    let trimmedSentence = rawSentence.trim();
    let charCount = trimmedSentence.length;
    
    output.textContent = "[" + charCount + "]";
}

