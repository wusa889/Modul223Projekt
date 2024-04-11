$(document).ready(function () {
  loadDataAndInitTable();
  checkLoginStatus();
});

function checkLoginStatus() {
  if (localStorage.length > 0) {
    const logout = document.getElementById("loginButton");
    logout.innerText = "Logout";
  }
}

function loadDataAndInitTable() {
  // Get the posts data from your server
  $.get("http://localhost:3000/allpost", (response) => {
    let posts;
    try {
      // Ensure the response is treated as JSON
      posts = JSON.parse(response);
    } catch (e) {
      // If the response is already an object, use it directly
      if (typeof response === "object") {
        posts = response;
      } else {
        console.error("Error parsing response as JSON:", e);
        return; // Exit the function if parsing fails
      }
    }

    console.log(posts);

    // Clear the table body to ensure no duplicates
    $("#tbody").empty();

    // Iterate over each post in the response
    posts.forEach((post) => {
      // Append a new row for each post into the table body
      const likeCount = post.likes.length
      const postUser = post.userid.username
      $("#tbody").append(
        `<tr><td><a href="http://127.0.0.1:3000/post/${post.id}">${post.id}<a/></td><td>${post.content}</td><td>${postUser}</td><td>${likeCount}</td></tr>`
      );
    });
  }).fail((xhr, status, error) => {
    // Log errors if the request fails
    console.log("Something went wrong while loading the posts!");
    console.log(xhr);
    console.log(status);
    console.log(error);
  });
}
