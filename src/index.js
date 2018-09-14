const form = document.querySelector('form');
const textArea = document.querySelector('#textArea');
let lastTweet;
let tweet;
const charCounter = document.querySelector('.charCount');
const tweetCounter = document.querySelector('.tweetCount');
const timeline = document.querySelector('.timeline');
let tweetStr = '';
let charCount = 0;
let tweetCount = 0;
let belowCharLimit = true;
charCounter.textContent = 0;
tweetCounter.textContent = 0;

textArea.addEventListener('input', event => {
    charCount = event.target.value.length;
    if (charCount <= 280) belowCharLimit = true;
    else belowCharLimit = false;
    
    tweetStr = event.target.value;
    charCounter.textContent = charCount;

    if (!belowCharLimit) charCounter.style.color = "red";
    else charCounter.style.color = "black";
});

form.addEventListener('submit', event => {
    event.preventDefault(); //prevent form from submitting
    console.log(charCount);
    if (charCount === 0) alert('Cannot post empty tweet!');

    else if (belowCharLimit) { //if char count < 280, proceed with tweet
        //Create div shell
        const div = document.createElement('div'); //<div></div>
        div.setAttribute('class','tweet');
        tweet = document.createElement('p'); // <p></p>

        //Check for @
        if (tweetStr.includes('@')) {
            let myArr = tweetStr.split(' ');
            
            myArr = myArr.map(item => {
                if (item[0]==='@') {
                    const handle =  item.slice(1);
                    return `<a href="/${handle}">@${handle}</a>`;
                }
                else return item;
            });
            tweetStr = myArr.join(' '); 
        }
        tweet.innerHTML = tweetStr; //Tweet p element

        //Button element
        const button = document.createElement('button'); // <button></button>
        const buttonText = document.createTextNode("Delete"); //"Delete"
        button.appendChild(buttonText);
        button.setAttribute('type','button');
        button.setAttribute('class','delete');

        //Add tweet and button to div wrapper
        div.appendChild(tweet);
        div.appendChild(button);

        //Post above last tweet
        timeline.insertBefore(div,lastTweet);
        lastTweet = [...timeline.children][0];
        tweetCount++;
        tweetCounter.textContent = tweetCount;
        //Clean up
        charCount = 0;
        charCounter.textContent = 0;
        form.reset(); 
        tweetStr = '';

        //Add button listeners
        button.addEventListener('click', event => {
            timeline.removeChild(event.target.parentNode);
            lastTweet = [...timeline.children][0];
            tweetCount--;
            tweetCounter.textContent = tweetCount;
        });
    }
    else alert("Above character limit!");
});


