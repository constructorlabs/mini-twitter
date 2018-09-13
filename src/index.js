const form = document.querySelector('form');
const textArea = document.querySelector('#areaText');
let lastTweet;
const counter = document.querySelector('.counter');
let tweetStr = '';
let charCount = 0;
let belowCharLimit = true;

textArea.addEventListener('input', event => {
    charCount = event.target.value.length;
    if (charCount <= 280) belowCharLimit = true;
    else belowCharLimit = false;
    
    tweetStr = event.target.value;
    counter.textContent = charCount;

    if (!belowCharLimit) counter.style.color = "red";
    else counter.style.color = "black";
});

form.addEventListener('submit', event => {
    event.preventDefault();
    
    if (belowCharLimit) {
        //Create div shell
        const div = document.createElement('div');

        //Tweet p element
        const tweet = document.createElement('p'); // <p></p>
        const tweetText = document.createTextNode(tweetStr); // sdlfkjsdlfksldf
        tweet.appendChild(tweetText); // <p>sldfsldfkjslkdf</p>

        //Button element
        const button = document.createElement('button'); // <button></button>
        const buttonText = document.createTextNode("Delete"); //"Delete"
        button.appendChild(buttonText);
        button.setAttribute('type','button');

        //Add tweet and button to div wrapper
        div.appendChild(tweet);
        div.appendChild(button);

        //Select parent to post tweet under
        const parentNode = document.querySelector('.timeline');

        //Post above last tweet
        lastTweet = parentNode.insertBefore(div,lastTweet);

        //Clean up
        counter.textContent = 0;
        form.reset(); 
    }
    else alert("Above character limit!");
});