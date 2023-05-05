const form = document.querySelector("#registration");
const output = document.querySelector("#output");

function handleSubmit(event) {
  event.preventDefault();

  const firstName = document.querySelector("#fN").value.trim();
  const lastName = document.querySelector("#lN").value.trim();
  const email = document.querySelector("#emailID").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (firstName === "" || lastName === "" || email === "" || password === "") {
    alert("Please fill out all fields.");
    return;
  }

  const data = {
    firstName,
    lastName,
    email,
    password
  };

  displayData(data);
}

function displayData(data) {
  output.innerHTML = `
    <h2>Registration Information:</h2>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Password:</strong> ${data.password}</p>
  `;
}

form.addEventListener("submit", handleSubmit);
