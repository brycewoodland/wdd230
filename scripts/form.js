const rating = document.getElementById("rating");
rating.addEventListener('change', () => {
    document.getElementById("currentRating").innerHTML = rating.value;
})

const confirm = document.getElementById("confirmPassword")
confirm.addEventListener('blur', () => {
    const password = document.getElementById("password")
    if (password.value != confirm.value) {
        document.getElementById("message").innerHTML = "Passwords do not match!";
        password = "";
        confirmPassword = "";
        password.focus()
    }
    else {
        document.getElementById("message").innerHTML = ""
    }
})