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

    let form = document.getElementById('myform');
    let formData = new FormData(form);
    let formDto = {
        content: formData.get('PostContent'),
        id: id
    };

    console.log(formDto);
    console.log(id)

    $.ajax({
        url: 'http://localhost:3000/post',
        type: 'POST',
        contentType: 'application/json',
        data: `${JSON.stringify(formDto)}`,
        success: response => {
            console.log(response);
            document.getElementById('myform').reset();
            checkLoginStatus();
            window.location.href = "/";
        },
        error: (xhr, status, error) => {
            console.error("Fehler ", error)
        }
    })

  }