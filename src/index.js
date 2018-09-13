document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  let newTweet = document.querySelector('#tweet').value;
  let tweetArr = newTweet.split(" ");
  newTweet = tweetArr.map(word => word.startsWith("@") ? `<a href="#">${word}</a>` : word).join(" ");
  newTweet = `<p> ${newTweet} </p>
              <button class="delete"><i class="fas fa-trash-alt"></i></button>`;
  const newTweetNode = document.createElement('div');

  newTweetNode.innerHTML = newTweet;
  const timelineNode = document.querySelector('.timeline');
  const refTweetNode = document.querySelector('.timeline div:first-child');
  if (document.querySelector('#tweet').value.length <= 280) {
    timelineNode.insertBefore(newTweetNode, refTweetNode);
    document.querySelector('#tweet').value = '';
    document.querySelector('#count').textContent = 0;
  }
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', e => {
        timelineNode.removeChild(e.target.parentElement.parentElement);
    });
  });
});

document.querySelector('#tweet').addEventListener('input', e => {
  document.querySelector('#count').textContent = e.target.value.length;
  if (e.target.value.length > 280) {
    let count = document.querySelector('#count');
    count.style.color = 'red';
  } else {
    count.style.color = 'black';
  }
});
