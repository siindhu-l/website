document.addEventListener("DOMContentLoaded",function()
{
    const signupForm=document.getElementByld("sigupForm");

    if (signupForm) {
        signupForm.addEventListener("submit",function(event) {
            event.preventDefault();
        

            alert("account created succesfully!");

            window.location.href="welcome.html";

        });
    }
});