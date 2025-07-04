function toggleTheme() {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  document.querySelector(".theme-toggle").textContent = isLight ? "🌚" : "🌞";
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light");
    document.querySelector(".theme-toggle").textContent = "🌚";
  } else {
    // Default to dark mode
    document.body.classList.remove("light");
    document.querySelector(".theme-toggle").textContent = "🌞";
  }
});

// Terminal 
const facts = [
  "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
  "Bananas are radioactive due to their high potassium content.",
  "Octopuses have three hearts and blue blood.",
  "Water can boil and freeze at the same time (triple point).",
  "A day on Venus is longer than its year.",
  "Neutron stars can spin at a rate of 600 rotations per second.",
  "Humans share about 60% of their DNA with bananas.",
  "Sharks are older than trees.",
  "The Eiffel Tower can grow over 6 inches in summer due to heat expansion."
];

function showRandomFact() {
  const terminalBody = document.getElementById("terminal-body");
  const fact = facts[Math.floor(Math.random() * facts.length)];
  terminalBody.innerHTML = `
    <span class="prompt">guest@portfolio:~$</span> Welcome to my portfolio site!
    <br><span class="prompt">guest@portfolio:~$</span> Here's a fun fact:
    <br><span class="cmd">→ ${fact}</span><span class="cursor">|</span>
  `;
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  showRandomFact();
  setInterval(showRandomFact, 5000);
});

// Typed Name in hero section
  const name = "Shreya"; 
  const typedEl = document.getElementById("typed");

  let i = 0;
  function typeWriter() {
    if (i < name.length) {
      typedEl.textContent += name.charAt(i);
      i++;
      setTimeout(typeWriter, 200); // typing speed
    }
  }

  window.addEventListener("DOMContentLoaded", typeWriter);


  // Contact me form 

  document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const response = await fetch("https://formspree.io/f/mldnbknl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const status = document.getElementById("form-status");
  if (response.ok) {
    status.textContent = "Thanks for your message!";
    form.reset();
  } else {
    status.textContent = "Oops! Something went wrong.";
  }
});

