const phone_regex = /^0[0-9]{9}$/
const email_regex = /^[A-z0-9]+@[A-z0-9]+\.[A-z0-9]+$/

/**
 * format của email:
 *  - trước dấu @ phải có ít nhất 1 ký là chữ cái (hoa hoặc thường) hoặc số
 *  - sau dấu @:
 *    + trước dấu . phải có ít nhất 1 ký là chữ cái (hoa hoặc thường) hoặc số
 *    + sau dấu . phải có ít nhất 1 ký là chữ cái (hoa hoặc thường) hoặc số
 */
function validate(e,form) {
    e.preventDefault();
    const error = document.querySelector("#error")
    const input_all = form.querySelectorAll("input")
    error.innerHTML = ""
    
    for (let input of input_all) {
        if (input.name == "email") {
            if (!email_regex.test(input.value)) {
                error.innerHTML += "Email invalidate<br>"
            }
        }
    }
    
    if (error.innerHTML != "") {
        return;
    }
    console.log("submit successfully!");
}