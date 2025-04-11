function bookNow(roomName) {
    alert(`Booking started for ${roomName}!`);
    // Later, you can redirect to a booking form or add payment integration here.
  }
// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }
    




  // Constants
const PRICE_PER_NIGHT = 2000;

// Elements
const form = document.getElementById("bookingForm");
const formMsg = document.getElementById("formMsg");
const priceDisplay = document.getElementById("priceDisplay");
const totalPriceInput = document.getElementById("total_price");

// Calculate total price
function calculateTotalPrice() {
  const checkin = new Date(document.getElementById("checkin").value);
  const checkout = new Date(document.getElementById("checkout").value);
  const guests = parseInt(document.getElementById("guests").value);

  if (isNaN(checkin.getTime()) || isNaN(checkout.getTime()) || isNaN(guests) || guests <= 0) {
    priceDisplay.textContent = "Total Price: ₹0";
    totalPriceInput.value = "";
    return;
  }

  const timeDiff = checkout - checkin;
  const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (days <= 0) {
    priceDisplay.textContent = "Total Price: ₹0";
    totalPriceInput.value = "";
    return;
  }

  const total = days * PRICE_PER_NIGHT * guests;
  priceDisplay.textContent = `Total Price: ₹${total}`;
  totalPriceInput.value = `₹${total}`;
}

// Event Listeners for real-time price update
document.getElementById("checkin").addEventListener("change", calculateTotalPrice);
document.getElementById("checkout").addEventListener("change", calculateTotalPrice);
document.getElementById("guests").addEventListener("input", calculateTotalPrice);

// Form submission using EmailJS
form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_wef4cuo", "template_sydu8tq", this)
    .then(() => {
      formMsg.textContent = "Booking confirmed! Confirmation email sent.";
      formMsg.style.color = "green";
      form.reset();
      priceDisplay.textContent = "Total Price: ₹0";
      totalPriceInput.value = "";
    })
    .catch((error) => {
      formMsg.textContent = "Error! Please try again later.";
      formMsg.style.color = "red";
      console.error("EmailJS error:", error);
    });
});





document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formMsg = document.getElementById("formMsg");
  
    emailjs.sendForm('service_wef4cuo', 'template_lqts6gq', this)
      .then(function () {
        formMsg.textContent = "Your message has been sent! A confirmation email has been sent to your inbox.";
        formMsg.style.color = "#28a745";
        document.getElementById("contactForm").reset();
      }, function (error) {
        formMsg.textContent = "Oops! Something went wrong. Please try again later.";
        formMsg.style.color = "red";
        console.error("EmailJS Error:", error);
      });
  });
  



  // Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}





document.getElementById("heroBookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const hotel = document.getElementById("hotelType").value;
  const checkin = document.getElementById("checkinHero").value;
  const checkout = document.getElementById("checkoutHero").value;

  if (!hotel || !checkin || !checkout) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`✅ Booking for ${hotel} from ${checkin} to ${checkout} submitted!`);
  // You can redirect, save to storage, or send to backend here
});




let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.children.length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

setInterval(autoSlide, 1000); // Auto-slide every 4s


// experiment for chatbox

const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const message = chatInput.value.trim();
  if (!message) return;

  addMessage(message, "user");

  // (In future: send message to server here)

  // Temporary fake reply (simulate staff)
  setTimeout(() => {
    addMessage("Hello and welcome to RJ Hotel! 😊 We're delighted to have you here. Whether you’re looking to book a room, inquire about our services, or need assistance with anything else, our team is here to help you. Feel free to ask any questions — we're always happy to assist!");
  }, 1000);

  chatInput.value = "";
});

function addMessage(text, sender) {
  const messageEl = document.createElement("div");
  messageEl.classList.add("message", sender);
  messageEl.textContent = text;
  chatBox.appendChild(messageEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}




 