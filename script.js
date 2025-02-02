const submitForm = () => {
    alert('Form submitted');
    if(document.getElementById('fname').value === '' || document.getElementById('lname').value === '' || document.getElementById('').value === '') {
        // alert('Please fill in all fields');
        document.getElementById('errorMsg').style.display = 'block';
    }
}