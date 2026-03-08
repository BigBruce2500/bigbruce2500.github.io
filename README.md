# Caden's Portfolio Website

A personal portfolio website built from scratch using **HTML, CSS, and JavaScript** to showcase my work and projects as an Electrical Engineering and Computer Science student at UC Berkeley.

This project focuses on learning how modern websites work at a fundamental level by building everything using **vanilla web technologies without frameworks**.

## Live Website

https://bigbruce2500.github.io/portfolio-website

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Formspree
- Git & GitHub
- GitHub Pages

## Features

- Responsive design for desktop and mobile
- Light and dark mode with saved user preference
- Smooth scrolling navigation
- Scroll progress indicator
- Section reveal animations
- Interactive project cards
- Contact form with email delivery
- Clean modern UI built entirely with custom CSS

## Project Structure

```
portfolio-website
│
├── index.html
├── about.html
├── thankyou.html
│
├── style.css
├── script.js
│
├── Images/
│   ├── Portrait.png
│   ├── Websitecover.avif
│   ├── micromouse.avif
│   ├── baseball.jpg
│   ├── pokemon.jpeg
│   ├── meandsis.JPG
│   ├── meandsis2.jpeg
│   └── orovilletheatre.jpg
│
└── Resume/
```

## Key Technical Components

### Dark Mode System

The site includes a light and dark theme controlled through a toggle switch.  
The selected theme is saved using **localStorage**, allowing the user's preference to persist between pages.

### Scroll Animations

Sections animate into view as the user scrolls using the **IntersectionObserver API**, improving performance compared to scroll event listeners.

### Scroll Progress Bar

A dynamic progress bar at the top of the page visually indicates how far the user has scrolled through the content.

### Contact Form

The contact form allows visitors to send messages directly from the website.  
Form submissions are handled using **Formspree**, allowing the site to receive emails without needing a backend server.

## Challenges and Solutions

### GitHub Pages Image Paths

Images initially worked in local development but failed after deployment due to **case-sensitive file paths** on GitHub Pages.

### Dark Mode Page Flash

A brief flash occurred when switching between pages before the saved theme loaded.  
This was solved by applying the saved theme early in the page load.

### Scroll Animation Performance

Scroll animations occasionally caused minor performance hiccups.  
This was improved by unobserving sections after they are revealed.

## Future Improvements

- Add additional projects
- Link projects to GitHub repositories
- Add live demos
- Improve accessibility and performance
- Possibly rebuild using React or Next.js

## Author

**Caden Bruce**  
Electrical Engineering and Computer Science  
University of California, Berkeley  

LinkedIn:  
https://www.linkedin.com/in/cadenbruce/