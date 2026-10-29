# Assignment #6 — jQuery (Selectors, Effects, Animations)

**Name:** Tolegen Adilzhan  
**Group:** SE-2538

## Part 1. Getting Started with jQuery

### Task 0. Setup
- jQuery is included via CDN (`jquery-3.7.1.min.js`).
- `$(document).ready()` is used, and `"jQuery is ready!"` is printed in the console.



### Task 1. Selectors & CSS
- The page displays my name, headline, and a short introduction.
- Tag selector (`$("h2")`), ID selector (`$("#greeting")`), and class selector (`$(".headline")`) are used.
- `.text()` dynamically updates the greeting.
- `.css()` applies styles to headings and the headline.
- Light and Dark theme buttons switch between themes.



## Part 2. jQuery Effects

### Task 2. Visibility Methods
- "About Me" section includes a biography, status message, and fun facts.
- Three buttons — Hide, Show, and Toggle — control the visibility of the fun facts list.



### Task 3. Fade Methods
- Two images are displayed in a gallery.
- Fade In, Fade Out, and Fade Toggle buttons use `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`.



### Task 4. Slide Methods
- Three clickable headings: "My Favorite Music," "My Favorite Movie," "My Favorite Subject."
- Each heading has a collapsible panel using `.slideToggle()`.



## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements
- An initial list of 4 skills is displayed.
- Text input and three buttons: "Add Skill," "Prepend Skill," and "Remove Last Skill."
- Uses `.append()`, `.prepend()`, `.remove()`.
- Empty input is prevented with an alert.


### Task 6. Modifying Attributes
- A social media link is shown.
- Two buttons switch the link between GitHub and LinkedIn using `.attr()`.



### Task 7. Form Interaction
- A form with Name and Email inputs.
- Live preview is displayed below the form using `.val()` and `.text()`.



## Part 4. Animations

### Task 8. Basic Animation
- Four skill bars with different target widths (90%, 70%, 60%, 50%).
- "Animate My Skills" button uses `.animate()` to fill the bars.
- Clicking again animates them back to zero.



## Summary

I built a single-page personal portfolio website using HTML, CSS, and jQuery. The project covers jQuery selectors, DOM manipulation methods, effects (show/hide, fade, slide), and animations. All the interactive features are implemented purely with jQuery as required. The page also has a light/dark theme toggle. I learned how `.animate()` works and how to chain jQuery methods together.
