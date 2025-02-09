document.getElementById('errorMsg').style.display = "none";
document.getElementById('errorMsgTwo').style.display = "none";
document.getElementById('errorMsgThree').style.display = "none";
document.getElementById('errorMsgFour').style.display = "none";

const submitForm = () => {
    event.preventDefault();

    if (document.getElementById('fname').value === '') {
        document.getElementById('errorMsg').style.display = 'block';
        document.getElementById('fname').style.border = '2px solid red';
    } else if (document.getElementById('lname').value === '') {
        document.getElementById('errorMsgTwo').style.display = 'block';
        document.getElementById('lname').style.border = '2px solid red';
    } else if (document.getElementById('email').value === '') {
        document.getElementById('errorMsgThree').style.display = 'block';
        document.getElementById('email').style.border = '2px solid red';
    } else if (document.getElementById('password').value === '') {
        document.getElementById('errorMsgFour').style.display = 'block';
        document.getElementById('password').style.border = '2px solid red';
    }
}
