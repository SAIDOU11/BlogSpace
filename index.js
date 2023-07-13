fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 15);
    document.getElementById("blog-list").innerHTML = postsArr
      .map((post) => {
        return `
      <h3>${post.title}</h3>     
      <p>${post.body}</p>
      <hr />
      `;
      })
      .join("");
  });
