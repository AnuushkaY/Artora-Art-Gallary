# 🎨 Artora – Art Gallery Website

Welcome to **Artora**, a personal project built to showcase the beauty of art through a clean and responsive gallery website.  
This project demonstrates front-end development concepts using **HTML**, **CSS**, and **JavaScript**, while simulating a mini art e-commerce platform with pages for browsing, login/signup, and a cart system.

---

## 🌟 Overview

**Artora** is designed as an online **Art Gallery website** where users can:
- Explore different art categories.
- View featured artworks.
- Add items to a shopping cart (client-side simulation).
- Sign up and log in (static demo).
- Contact the site admin through a simple contact page.

This project focuses on **frontend web development concepts**, aiming to combine elegant design with interactive user experience — all built without any backend or frameworks.

---

## 🧱 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Provides the structure and semantic layout of the website. |
| **CSS3** | Used for styling, layout, responsiveness, and hover effects. |
| **JavaScript (ES6)** | Adds interactivity such as cart functionality, dynamic UI changes, and form validation. |
| **Local Storage (via JS)** | Used for saving user and cart data temporarily on the browser (simulated backend). |
| **Flexbox & Grid** | Used in layout structuring for responsive and adaptive page design. |
| **Google Fonts & Icons** | For better typography and visual appeal. |

---


---

## 🛠️ How I Built It (Step-by-Step Explanation)

### 1. **Planning & Design**
Before writing any code, I designed the layout on paper — focusing on:
- A **homepage** introducing the brand.
- A **gallery page** for displaying artworks.
- Separate **authentication pages** for login/signup.
- A **cart page** to simulate adding and removing art items.
- A **contact form** for user communication.

### 2. **HTML Development**
Each page was built using **semantic HTML tags** like:
- `<header>` and `<nav>` for top navigation.
- `<section>` and `<article>` for main content areas.
- `<footer>` for closing information.
- Forms created with `<form>`, `<input>`, `<label>`, and `<button>` tags.
  
I ensured the HTML is clean, modular, and easy to navigate between pages.

### 3. **CSS Styling**
I focused on making the website **visually appealing and responsive** using:
- **Flexbox** for aligning items (navigation bars, gallery grids, footer sections).
- **Grid layout** in the gallery section to display multiple images neatly.
- **Hover effects** for interactivity (on images, buttons, and navigation links).
- **Media queries** to ensure the website looks good on mobile and tablet screens.
- **Color themes and background images** to enhance the artistic feel.

The CSS file (`styles1.css`) is centralized — meaning all styling for the entire site is handled in one place.

### 4. **JavaScript Interactivity**
The **script.js** file adds functionality such as:
- Handling **add to cart** actions.
- Storing items and user data in **Local Storage** for persistence.
- Displaying cart items dynamically on `cart.html`.
- Simple **form validation** (e.g., checking empty fields in login/signup forms).
- Handling **page redirections** between login → gallery → cart pages.

I kept the code modular and commented to make it easier to understand and extend.

### 5. **Local Storage Concept**
Since this is a static project without a backend, I used **Local Storage** to simulate:
- User registration and login sessions.
- Cart data (adding/removing art items).
This helps replicate real e-commerce logic on the client-side.

### 6. **Testing & Debugging**
After building, I tested the site on multiple browsers (Chrome, Edge, Firefox) and adjusted styles for consistency.  
I also validated forms and navigation links to ensure smooth user flow.

---

## 🧠 Concepts Demonstrated

This project demonstrates the following **frontend concepts**:

1. **HTML Fundamentals** – semantic structure, navigation, forms, linking pages.  
2. **CSS Styling & Responsiveness** – layout with Flexbox and Grid, hover effects, spacing, typography.  
3. **JavaScript DOM Manipulation** – dynamically updating content and responding to user actions.  
4. **Local Storage Handling** – storing and retrieving user data without a backend.  
5. **Event Handling** – handling click, submit, and hover events in JS.  
6. **Form Validation** – preventing empty or invalid form submissions.  
7. **Code Organization** – separating structure (HTML), style (CSS), and behavior (JS).

---
