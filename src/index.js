document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  let newTweet = document.querySelector('#tweet').value;
  newTweet = `<p> ${newTweet} </p>
              <p class='delete'><i class="fas fa-trash-alt"></i></p>`;
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
      timelineNode.removeChild(e.target.parentNode.parentNode);
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
