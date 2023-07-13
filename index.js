let postsArray = [];
const titleInput = document.getElementById("blog-title");
const bodyInput = document.getElementById("blog-body");
const form = document.getElementById("new-post");

function renderPost() {
  document.getElementById("blog-list").innerHTML = postsArray
    .map((post) => {
      return `
      <h3>${post.title}</h3>     
      <p>${post.body}</p>
      <hr />
      `;
    })
    .join("");
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPost();
  });

document.getElementById("new-post").addEventListener("submit", (e) => {
  e.preventDefault();
  let postTitle = titleInput.value;
  let postBody = bodyInput.value;
  const data = {
    title: postTitle,
    body: postBody,
  };
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      postsArray.unshift(post);
      renderPost();
      form.reset();
    });
});
