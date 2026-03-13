
// DARK MODE TOGGLE CODE


const toggle = document.getElementById("darkModeToggle");
//finds the checkbox element with id="darkModeToggle from html which toggles dark mode"
if (toggle) {
//checks if toggle actually exists on page
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    //add dark class to the <htmlL element which activates all the dark mode styles in CSS
    toggle.checked = true;
    //makes the toggle switch appear turned on if dark mode was saved
  }

  toggle.addEventListener("change", () => {
    //listens for when the toggle switch is changed(clicked)
    if (toggle.checked) { 
      document.documentElement.classList.add("dark");
      //if switch is on/checked, add the dark class to the page
      localStorage.setItem("theme", "dark");
      //saves the users theme preferences in browser so it persists 
    } else {
      document.documentElement.classList.remove("dark");
      //if switch is off/unchecked, remove the dark mode class
      localStorage.setItem("theme", "light");
      //save the light mode preference
    }

  });

}



// SMOOTH SCROLL CODE

document.querySelectorAll("nav a").forEach(link => {
//select all <a> links inside nav bar and loop through them one by one
  link.addEventListener("click", function(e) {
    //adds a listener for clicks for each link
    const targetId = this.getAttribute("href");
      //gets the value of the links href attribute
    if (targetId.startsWith("#")) {
      //checks if link starts with #, which is an anchor link designed to scroll to that specific id attribute
      e.preventDefault();
        //prevents defualt instan jump behavior
      const target = document.querySelector(targetId);
        //finds element on page and matches the id
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          //makes the scrolling animation smooth
          block: "start"
          //aligns target section to top of screen
        });
      }

    }

  });

});



// HERO BUTTON SCROLL (INDEX ONLY)

const heroButton = document.querySelector(".primary-btn");
//selects the id "primary-btn" for view my work button that scrolls to projects
if (heroButton) {
//like above, checks if the button exists on the page
  heroButton.addEventListener("click", () => {
    //listens for a click
    const projects = document.querySelector("#projects");
    //finds project sections id
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
      //scrools smoothly to projects section
    }

  });

}



// SCROLL REVEAL CODE FOR IMPROVED SMOOTHNESS

const sections = document.querySelectorAll(".section");
//selects all elements with class "section"
if (sections.length > 0) {
//checks if any sections exist on the page
  const observer = new IntersectionObserver((entries, observer) => {
    //creates an IntersectionObserver
    //this function watches elements and triggers when they enter the viewport (users visible area of webpage)
    entries.forEach(entry => {
      //loops through each of the observed sections
      if (entry.isIntersecting) {
          //checks if section is visible in the viewport
        entry.target.classList.add("revealed");
          //adds the "revealed" class to trigger CSS animation

        // stop observing after reveal (prevents repeated animations)
        observer.unobserve(entry.target);
          //stops observing that section once it has been revealed
      }

    });

  }, {
    threshold: 0.2,
    //section has to be 20% visible before triggering to prevent too early of a trigger
    rootMargin: "0px 0px -80px 0px"
    //adjust the detection area ever so slightly so animations trigger a bit earlier and not too late
  });

  sections.forEach(section => observer.observe(section));
  //starts observing each section on page, makes our previous observor function work or "watch"
}



// SCROLL PROGRESS BAR SMOOTH

const progressBar = document.querySelector(".progress-bar");
//selects the progress bar element 
if (progressBar) {
  //make sure it exists
  let ticking = false; //base case for no scroll update
  //prevents too many updates while scrolling
  function updateProgress() {

    const scrollTop = window.scrollY;
    //gets how far the page has been scrolled vertically (Y direction)
    const docHeight = document.body.scrollHeight - window.innerHeight;
    //calculates the total scrollable hieght of the page
    const progress = (scrollTop / docHeight) * 100;
    //calculates how far user has scrolled as a %
    progressBar.style.width = progress + "%"; //width = horizontal length of element
    //updates width of the progress bar to match scroll progress

    ticking = false;
    //resets and allows the next scroll update to run
  }

  window.addEventListener("scroll", () => {
    //listens for a user scroll
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      //schedules the progress update for next animation
      ticking = true;
      //like earlier, prevents too many updates at once
    }

  });

}


// CONTACT FORM USING FORM SPREE


const form = document.getElementById("contact-form");
//selects contact form element
if (form) {

  form.addEventListener("submit", async function(e) {
    //runs this function with form is submitted
    e.preventDefault();
    //prevents browser default from submission behavior to ensure thankyou page works and formspree page does not pop up 
    const data = new FormData(form);
    //collects all form inputs (name, email, message)
    try {

      const response = await fetch(form.action, {
        method: "POST",
        //sends the form data as a POST request
        body: data,
        //sends the collected form data
        headers: {
          "Accept": "application/json"
          //tells formspree to return JSON instead of HTML
        }
      });

      if (response.ok) {
        window.location.href = "thankyou.html";
        //redirects user to thank you page if submission worked
      } else {
        alert("Something went wrong. Please try again.");
        //shows an error message if submission failed
      }

    } catch (error) {
      alert("Network error. Please try again.");
      //shows an error if the internet request fails
    }

  });

}