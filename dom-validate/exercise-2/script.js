const account_regex = /^[_a-z0-9]{6,}$/

function validate(e,form) {
    e.preventDefault();
    const error = document.querySelector("#error")
    const input_all = form.querySelectorAll("input")
    error.innerHTML = ""
    
    for (let input of input_all) {
        if (input.name == "account") {
            if (!account_regex.test(input.value)) {
                error.innerHTML += "The account is invalidate<br>"
            }
        }
    }
    
    if (error.innerHTML != "") {
        return;
    }
    
    console.log("submit successfully!");
}