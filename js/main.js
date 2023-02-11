// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("vui lòng không để trống");
    } else {
        const user = {
            username: inputUsername.value,
            password: "thanhngoan1602"
        };
        console.log(user);
        if (user.password === inputPassword.value) {
            alert("Đăng Nhập Thành Công");
            window.location.href = "index1.html";
        } else {
            alert("Đăng Nhập Thất Bại");
            inputPassword.value = "";
            inputPassword.focus();
        }
    }
});