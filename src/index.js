const form = document.querySelector('form');
const textArea = document.querySelector('#areaText');
let lastTweet;
let tweet;
const counter = document.querySelector('.counter');
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
    event.preventDefault(); //prevent form from submitting
    
    if (belowCharLimit) { //if char count < 280, proceed with tweet
        //Create div shell
        const div = document.createElement('div'); //<div></div>
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
            console.log(tweetStr);
        }

        tweet.innerHTML = tweetStr; //Tweet p element

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
            lastTweet = [...timeline.children][0];
        });
    }
    else alert("Above character limit!");
});


