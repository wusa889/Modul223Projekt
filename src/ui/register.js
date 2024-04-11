$(document).ready(function () {
    checkLoginStatus();
  });

  function checkLoginStatus() {
    if (localStorage.length > 0) {
      const logout = document.getElementById("loginButton");
      logout.innerText = "Logout";
    }
  }

  function register(event) {
    event.preventDefault();
    let form = document.getElementById('myform');
    let formData = new FormData(form);
    let formDto = {
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email'),
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
    };

    console.log(formDto);

    $.ajax({
        url: 'http://localhost:3000/register',
        type: 'POST',
        contentType: 'application/json',
        data: `${JSON.stringify(formDto)}`,
        success: response => {
            localStorage.clear()
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
  