const form = document.querySelector('form');
const textArea = document.querySelector('#areaText');
let lastTweet;
let tweet;
const counter = document.querySelector('.counter');
//Select parent to post tweet under
const timeline = document.querySelector('.timeline');
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

        //Check for @
        if (tweetStr.includes('@')) {
            tweetStr.split(' ').map(item => {
                if (item[0]==='@') return 
            })        
        }

        else {
        //Tweet p element
        tweet = document.createElement('p'); // <p></p>
        const tweetText = document.createTextNode(tweetStr); // sdlfkjsdlfksldf
        tweet.appendChild(tweetText); // <p>sldfsldfkjslkdf</p>
        console.log(tweet.innerHTML);
        }

        //Button element
        const button = document.createElement('button'); // <button></button>
        const buttonText = document.createTextNode("Delete"); //"Delete"
        button.appendChild(buttonText);
        button.setAttribute('type','button');

        //Add tweet and button to div wrapper
        div.appendChild(tweet);
        div.appendChild(button);

        //Post above last tweet
        timeline.insertBefore(div,lastTweet);
        lastTweet = [...timeline.children][0];

        //Clean up
        counter.textContent = 0;
        form.reset(); 

        //Add button listeners
        button.addEventListener('click', event => {
            timeline.removeChild(event.target.parentNode);
        });
    }
    else alert("Above character limit!");
});


