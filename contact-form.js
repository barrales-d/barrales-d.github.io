
const myEmail = 'barrales-d06@gmail.com';


function sendEmail() {
    const form = document.querySelector('form');
    const name = form.elements['Name'].value;
    const email = form.elements['Email'].value;
    const msg = form.elements['Message'].value;

    const link = 'mailto:' + encodeURIComponent(myEmail)
        + '?cc=' + encodeURIComponent(email)
        + "&subject=Feedback from: " + encodeURIComponent(name)
        + "&body=" + encodeURIComponent(msg);

    window.open(link);
}