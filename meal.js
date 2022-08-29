const loadData = () => {
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data));
}
loadData();
const displayComment = data => {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = ``;
    data.forEach(comment =>{
    // console.log(comment);
    const commentBox = document.createElement('div');
    commentBox.classList.add('col');
    commentBox.innerHTML = `
    <h3>${comment.name}</h3>
    <p>${comment.email}</p>
    <p><b>${comment.body}</b></p>
    `;
    commentsContainer.appendChild(commentBox);

  });
 
}

