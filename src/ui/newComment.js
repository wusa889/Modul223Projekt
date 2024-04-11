$(document).ready(function () {
    checkLoginStatus();
  });
  
  function checkLoginStatus() {
    if (localStorage.length > 0) {
        const logout = document.getElementById("loginButton");
        logout.innerText = "Logout";
    }
    else{
        window.location.href = "/login";
    }
  }

  function Create(event){
    event.preventDefault();
    let id = localStorage.getItem('id')

    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    const postid = Number(segments[2]);

    console.log(postid)
  
    let form = document.getElementById('myform');
    let formData = new FormData(form);
    let formDto = {
        content: formData.get('CommentContent'),
        userid: id,
    };

    console.log(formDto);

    $.ajax({
        url: `http://localhost:3000/post/${postid}/comment`,
        type: 'POST',
        contentType: 'application/json',
        data: `${JSON.stringify(formDto)}`,
        success: response => {
            console.log(response);
            document.getElementById('myform').reset();
            checkLoginStatus();
            window.location.href = `/post/${postid}`;
        },
        error: (xhr, status, error) => {
            console.error("Fehler ", error)
        }
    })

  }