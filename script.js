// Function to fetch a random user and update the displayed card
async function fetchRandomUser() {
    // Get the container where the user cards will be displayed
    const cardsContainer = document.getElementById("cards-container");

    // Clear any existing user card from the container
    cardsContainer.innerHTML = '';

    try {
        // Fetch data from the Random User API
        const response = await fetch("https://randomuser.me/api/");

        // Parse the JSON response to get the user data
        const data = await response.json();

        // Get the first user from the response
        const user = data.results[0];  

        // Create a new card element for the user
        const card = document.createElement("div");
        card.classList.add("card");

        // Set the inner HTML of the card, including user's picture, name, email, and location
        card.innerHTML = `
            <img src="${user.picture.large}" alt="User Image">  <!-- Display user's picture -->
            <div class="card-content">
                <h2>${user.name.first} ${user.name.last}</h2>  <!-- User's full name -->
                <p><strong>Email:</strong> ${user.email}</p>  <!-- User's email -->
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>  <!-- User's location -->
                <button class="button" onclick="alert('Contact: ${user.email}')">Contact</button>  <!-- Contact button -->
            </div>
        `;

        // Append the created card to the cards container
        cardsContainer.appendChild(card);

    } catch (error) {
        // If an error occurs during the API fetch, log the error and display a message
        console.error("Error fetching user data:", error);
        cardsContainer.innerHTML = `<p>Failed to load user data. Please try again later.</p>`;
    }
}

// Call the fetchRandomUser function initially to display a user when the page loads
fetchRandomUser();
