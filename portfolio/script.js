// Mobile Menu Toggle
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  const mobileBtn = document.querySelector(".mobile-menu-btn")

  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none"
    mobileBtn.textContent = "☰"
  } else {
    navMenu.style.display = "flex"
    navMenu.style.flexDirection = "column"
    navMenu.style.position = "absolute"
    navMenu.style.top = "100%"
    navMenu.style.left = "0"
    navMenu.style.right = "0"
    navMenu.style.backgroundColor = "white"
    navMenu.style.padding = "1rem"
    navMenu.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
    mobileBtn.textContent = "✕"
  }
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        const navMenu = document.querySelector(".nav-menu")
        const mobileBtn = document.querySelector(".mobile-menu-btn")
        if (window.innerWidth <= 768 && navMenu.style.display === "flex") {
          navMenu.style.display = "none"
          mobileBtn.textContent = "☰"
        }
      }
    })
  })
})

// Contact form submission
function submitForm(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Create mailto link
  const mailtoLink = `mailto:apmouriya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

  // Open email client
  window.location.href = mailtoLink

  // Show success message
  alert("Thank you for your message! Your email client should open now.")

  // Reset form
  event.target.reset()
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".skill-card, .achievement-card, .project-card, .about-item")
  animateElements.forEach((el) => observer.observe(el))
})

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
  }
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    // Uncomment the line below to enable typing effect
    // typeWriter(heroTitle, originalText, 80);
  }
})

// Skill progress animation (optional enhancement)
function animateSkillBars() {
  const skillCards = document.querySelectorAll(".skill-card")

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-5px) scale(1)"
    })
  })
}

// Initialize skill animations
document.addEventListener("DOMContentLoaded", animateSkillBars)

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const navMenu = document.querySelector(".nav-menu")
  const mobileBtn = document.querySelector(".mobile-menu-btn")
  const header = document.querySelector(".header")

  if (window.innerWidth <= 768 && navMenu.style.display === "flex" && !header.contains(event.target)) {
    navMenu.style.display = "none"
    mobileBtn.textContent = "☰"
  }
})

// Add loading state to buttons
function addLoadingState(button, originalText) {
  button.disabled = true
  button.innerHTML = '<span class="icon">⏳</span> Loading...'

  setTimeout(() => {
    button.disabled = false
    button.innerHTML = originalText
  }, 2000)
}

// Enhanced form validation
function validateForm(formData) {
  const name = formData.get("name").trim()
  const email = formData.get("email").trim()
  const subject = formData.get("subject").trim()
  const message = formData.get("message").trim()

  if (name.length < 2) {
    alert("Please enter a valid name (at least 2 characters).")
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return false
  }

  if (subject.length < 5) {
    alert("Please enter a subject (at least 5 characters).")
    return false
  }

  if (message.length < 10) {
    alert("Please enter a message (at least 10 characters).")
    return false
  }

  return true
}

// Update form submission with validation
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault()

      const formData = new FormData(event.target)

      if (!validateForm(formData)) {
        return
      }

      const submitBtn = event.target.querySelector('button[type="submit"]')
      const originalBtnText = submitBtn.innerHTML

      addLoadingState(submitBtn, originalBtnText)

      const name = formData.get("name")
      const email = formData.get("email")
      const subject = formData.get("subject")
      const message = formData.get("message")

      // Create mailto link
      const mailtoLink = `mailto:apmouriya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

      // Open email client
      setTimeout(() => {
        window.location.href = mailtoLink
        alert("Thank you for your message! Your email client should open now.")
        event.target.reset()
      }, 1000)
    })
  })
})
