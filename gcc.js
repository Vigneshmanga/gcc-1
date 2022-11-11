let passwordInputEl = document.getElementById("password");
let logInBtn = document.getElementById("logInBtn");
let errorMsgEl = document.getElementById("errormessage");
let emojisContainerEl = document.getElementById("emojisContainer");
let openEyeEmojiEl = document.getElementById("openEye");
let closedEyeEmojiEl = document.getElementById("closedEye");

let isEyeOpen = false;
emojisContainerEl.onclick = function() {
    openEyeEmojiEl.classList.toggle("d-none");
    closedEyeEmojiEl.classList.toggle("d-none");
    if (isEyeOpen) {
        passwordInputEl.setAttribute("type", "password");
        isEyeOpen = false;
    } else {
        passwordInputEl.setAttribute("type", "text");
        isEyeOpen = true;
    }
};

function passwordcheck() {
    let enterdPassword = passwordInputEl.value;
    errorMsgEl.textContent = "";
    if (enterdPassword === "datascienc") {
        logInBtn.setAttribute("onclick", "display('sectiondsSem1')");
    } else {
        logInBtn.removeAttribute("onclick", "display('sectiondsSem1')");
    }
}

passwordInputEl.addEventListener("keydown", passwordcheck);

logInBtn.onclick = function() {
    if (passwordInputEl.value === "") {
        errorMsgEl.textContent = "Please enter password";
    } else if (passwordInputEl.value !== "datascience") {
        errorMsgEl.textContent = "Invalid password";
    }
};