$(document).ready(function () {
  checkLoginStatus();
  loadDataAndInitTable();
});

function checkLoginStatus() {
  if (localStorage.length > 0) {
    const logout = document.getElementById("loginButton");
    logout.innerText = "Logout";
  }
}

function loadDataAndInitTable() {
  // Get the posts data from your server
  const pathname = window.location.pathname;
  const segments = pathname.split("/");
  const postid = Number(segments[2]);

  $.get(`http://localhost:3000/postbyid/${postid}`, (response) => {
    let posts;
    try {
      posts = JSON.parse(response);
    } catch (e) {
      if (typeof response === "object") {
        posts = response;
      } else {
        console.error("Error parsing response as JSON:", e);
        return;
      }
    }

    let likes = posts[0].likes.length;
    let user = posts[0].userid.username;

    $("#tbody").empty();

    if (Number(localStorage.role) === 2 || Number(localStorage.role) === 3) {
      $("#theadders").append("<th>Delete</th>");
    }

    posts.forEach((post) => {
      let row = `<tr>
            <td>${post.content}</td>
            <td>${user}</td>
            <td>${likes}</td>`;

      if (Number(localStorage.role) === 2 || Number(localStorage.role) === 3) {
        row += `<td><button onclick="deletePost(${post.id})">delete</button></td>`;
      }

      row += `</tr>`;
      $("#tbody").append(row);
    });

    // Fetch additional comments data independently
    fetchComments(postid);
  }).fail((xhr, status, error) => {
    console.log(
      "Something went wrong while loading the posts!",
      xhr,
      status,
      error
    );
  });
}

function fetchComments(postid) {
  $.get(`http://localhost:3000/allComments/${postid}`, (response) => {
    let comments;
    try {
      comments = JSON.parse(response);
    } catch (e) {
      if (typeof response === "object") {
        comments = response;
      } else {
        console.error("Error parsing response as JSON:", e);
        return;
      }
    }

    $("#tcommentbody").empty();
    if (Number(localStorage.role) === 2 || Number(localStorage.role) === 3) {
      $("#theadderscomment").append("<th>Delete</th>");
      comments.forEach((comment) => {
        $("#tcommentbody").append(
          `<tr><td>${comment.content}</td><td>${comment.userid.username}</td><td><button onclick="deleteComment(${comment.id})">delete</button></td></tr>`
        );
      });
    } else {
      comments.forEach((comment) => {
        $("#tcommentbody").append(
          `<tr><td>${comment.content}</td><td>${comment.userid.username}</td></tr>`
        );
      });
    }
  }).fail((xhr, status, error) => {
    console.log("Failed to load comments!", xhr, status, error);
  });
}

function deletePost(postid) {
  const formDto = {
    userid: localStorage.id,
    role: localStorage.role,
  };
  console.log(formDto);

  $.ajax({
    url: `http://localhost:3000/post/${postid}`,
    type: "DELETE",
    contentType: "application/json",
    data: `${JSON.stringify(formDto)}`,
    success: (response) => {
      console.log(response);
      window.location.href = "/";
    },
    error: (xhr, status, error) => {
      console.error("Fehler ", error);
    },
  });
}

function deleteComment(commentId) {
  const formDto = {
    userid: localStorage.id,
    role: localStorage.role,
  };
  console.log(formDto);

  $.ajax({
    url: `http://localhost:3000/comment/${commentId}`,
    type: "DELETE",
    contentType: "application/json",
    data: `${JSON.stringify(formDto)}`,
    success: (response) => {
      console.log(response);
      window.location.reload();
    },
    error: (xhr, status, error) => {
      console.error("Fehler ", error);
    },
  });
}

function tonewcomment(){
  const pathname = window.location.pathname;
  const segments = pathname.split("/");
  const postid = Number(segments[2]);
  window.location.href = `/post/${postid}/comment`

}
