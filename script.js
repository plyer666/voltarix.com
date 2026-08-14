function showBessBrochure() {

    const brochure =
        document.getElementById("brochure-section");

    brochure.scrollIntoView({
        behavior: "smooth"
    });

}function showBessBrochure() {

    const brochure =
        document.getElementById("brochure-section");

    brochure.scrollIntoView({
        behavior: "smooth"
    });

}

function sendEmail(event) {

    event.preventDefault();

    const firstName =
        document.getElementById("firstName").value;

    const lastName =
        document.getElementById("lastName").value;

    const email =
        document.getElementById("email").value;

    const company =
        document.getElementById("company").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    const emailBody =
`Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}

Message:
${message}`;


    const mailtoLink =
        "mailto:sales@voltarix.com.my" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(emailBody);


    window.location.href = mailtoLink;

}