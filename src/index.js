
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let newTweet= document.querySelector("#tweet").value;
    newTweet = `<div class="tweet"><p> ${newTweet} </p></div>`;
    console.log(newTweet);
    
});


