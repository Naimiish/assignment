document.getElementById('userForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const responseDiv = document.getElementById('response');

  if (!username) {
    alert("Username cannot be empty!");
    return;
  }

  // Send POST request to backend API
  try {
    const response = await fetch('http://<BACKEND-SERVICE-IP>:80/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    });
    const data = await response.json();
    responseDiv.innerHTML = `<p>${data.message || data.error}</p>`;
  } catch (error) {
    console.error("Error submitting data:", error);
    responseDiv.innerHTML = `<p>Error connecting to the server.</p>`;
  }
});