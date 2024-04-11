$(document).ready(function () {
    localStorage.clear()
    checkLoginStatus()
});

function checkLoginStatus() {
    if (localStorage.length > 0) {
      const logout = document.getElementById("loginButton");
      logout.innerText = "Logout";
    }
}

function login(event) {
    event.preventDefault();
    let form = document.getElementById('myform');
    let formData = new FormData(form);
    let formDto = {
        username: formData.get('username'),
        password: formData.get('password'),
    };

    console.log(formDto);

    $.ajax({
        url: 'http://localhost:3000/login',
        type: 'POST',
        contentType: 'application/json',
        data: `${JSON.stringify(formDto)}`,
        success: response => {
            localStorage.clear()
            console.log(response);
            let resObj = JSON.parse(response)
            localStorage.setItem("id",`${String(resObj.id)}`)
            localStorage.setItem("role", `${String(resObj.role)}`)
            document.getElementById('myform').reset();
            checkLoginStatus();
            window.location.href = "/";
        },
        error: (xhr, status, error) => {
            console.error("Fehler ", error)
        }
    })


}


