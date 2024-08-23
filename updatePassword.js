let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let newPasswordInput = "";

newPasswordEl.addEventListener("blur", function(event)
{
    newPasswordInput = event.target.value;
    if(event.target.value === "")
    {
        newPasswordErrMsgEl.textContent = "Requied*";
    }
    else
    {
        newPasswordErrMsgEl.textContent = "";
    }
});

let confirmPasswordInput = "";

confirmPasswordEl.addEventListener("blur", function(event)
{
    confirmPasswordInput = event.target.value;
    if(event.target.value === "")
    {
        confirmPasswordErrMsgEl.textContent = "Requied*";
    }
    else if(newPasswordInput !== confirmPasswordInput)
    {
        confirmPasswordErrMsgEl.textContent = "Password not matched";
    }
    else
    {
        confirmPasswordErrMsgEl.textContent = "";
    }
});

let updatePasswordFormEl = document.getElementById("updatePasswordForm");

updatePasswordFormEl.addEventListener("submit",function(event)
{
    event.preventDefault();
});