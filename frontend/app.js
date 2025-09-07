document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");

  // Page templates
  const pages = {
    explore: `
      <h1>Explore</h1>
      <p>Discover hidden gems, top attractions, and trending spots near you.</p>
    `,
    map: `
      <h1>Map</h1>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%" height="400" style="border:0;" allowfullscreen="">
      </iframe>
    `,
    search: `
      <h1>Search</h1>
      <input type="text" placeholder="Search destinations..." />
    `,
    plan: `
      <h1>Trip Planning</h1>
      <p>Build your itinerary with recommendations tailored to your style.</p>
    `,
    twin: `
      <h1>Travel Twin AI</h1>
      <textarea id="twin-input" placeholder="Ask your AI Twin..."></textarea>
      <button onclick="askTwin()">Send</button>
      <div id="twin-response"></div>
    `,
    profile: `
      <h1>Your Profile</h1>
      <p>Name: <span id="profile-name">Guest</span></p>
      <p>Email: <span id="profile-email">guest@example.com</span></p>
    `
  };

  // Load page content
  function loadPage(page) {
    mainContent.innerHTML = pages[page];
    setActiveNav(page);
  }

  // Highlight active tab
  function setActiveNav(page) {
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("data-page") === page) {
        item.classList.add("active");
      }
    });
  }

  // Default page
  loadPage("explore");

  // Navigation clicks
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");
      loadPage(page);
    });
  });
});

// Travel Twin AI function
async function askTwin() {
  const input = document.getElementById("twin-input").value;
  const responseBox = document.getElementById("twin-response");

  if (!input) {
    responseBox.innerText = "Please enter a question.";
    return;
  }

  responseBox.innerText = "Thinking...";

  try {
    const res = await fetch("http://localhost:5000/api/twin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    responseBox.innerText = data.reply;
  } catch (error) {
    responseBox.innerText = "Error connecting to AI Twin.";
  }
}
