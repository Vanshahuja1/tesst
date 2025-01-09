document.getElementById("simpleForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Example of a response message after submission
    document.getElementById("responseMessage").innerText = `Thank you, ${name}! Your message has been submitted.`;

    // Clear the form
    event.target.reset();
});
