const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");


btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("Định không nhập à 😀");
    } else {
        const user = {
            username: '0343925539',
            password: "LƯU THU HÀ"
        };
        console.log(user);
        if(user.username === inputUsername.value) {
            if (user.password === (inputPassword.value).toUpperCase()) {
                alert("Gét gô 😁");
                window.location.href = "main.html";
            }
        } else {
            alert("😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫");
            inputPassword.value = "";
            inputPassword.focus();
        }
    }
});