function showSection(sectionId) {
  // Sab sections ko hide karo
  document.querySelectorAll(".content-section").forEach(sec => {
    sec.style.display = "none";
  });

  // Jo section click hua usko show karo
  document.getElementById(sectionId).style.display = "block";

  // Navbar sirf home section pe show hoga
  const nav = document.querySelector("nav");
  if (sectionId === "home") {
    nav.style.display = "block";  // show navbar
  } else {
    nav.style.display = "none";   // hide navbar
  }
}

// Pehle load pe home dikhana
showSection("home");

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showSection('home');
  });
  
  function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const response = document.getElementById("response");
    response.innerText = `Thanks, ${name}! We'll get back to you soon.`;
    response.classList.remove("hidden");
  }
  

  function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }

  function toggleQuote() {
    const quote = document.getElementById('quote-message');
    if (quote.style.display === 'none') {
      quote.style.display = 'block';
    } else {
      quote.style.display = 'none';
    }
  }

