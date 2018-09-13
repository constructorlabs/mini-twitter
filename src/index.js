document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  let newTweet = document.querySelector('#tweet').value;
  newTweet = `<p> ${newTweet} </p>`;
  const newTweetNode = document.createElement('div');
  newTweetNode.innerHTML = newTweet;
  const timelineNode = document.querySelector('.timeline');
  const refTweetNode = document.querySelector('.timeline div:first-child');
  timelineNode.insertBefore(newTweetNode, refTweetNode);
  document.querySelector('#tweet').value = "";
});
