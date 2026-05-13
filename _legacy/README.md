Author: Alejandro Scaffa

Date: 2025-09-16

Title: Homework 2 - CSS
Subtitle: Static multi-page site with a responsive pages built with vanilla CSS and a little JavaScript.

# hw02-CSS

## Requirements
* Your website may build on hw01 (your bio), or you can try something new.
* It should use vanilla HTML, CSS and JavaScript -- no libraries or modules.
* 5 requirements...
  * At least 2 pages navigating to each other.
  * Add creative styling -- make this your own website!
  * The pages should be responsive using media queries.
  * Use at least one advanced CSS technique... 
    * For example: [parallax scrolling](https://www.w3schools.com/howto/howto_css_parallax.asp)
  * Add vanilla JavaScript functionality using the technique mentioned in class.
* Standard LLM policy.
* Documentation 
  * As for your projects, replace this README.md with documentation that describes
  your demo and provides acknowledgement of the resources that you used to create it.
#

# HW Answers:
## Short Description of index.html (Homepage):
* This is a personal webpage that is a portfolio for my academic and professional background. It contains the parallax effect theme for my name and tagline, followed by sections about me, cv highlights, publications, and a contact me section. The top of the page includes a navigation bar using the pill style button design that links to the different sections of the page showing my CV, my publications portfolio, my computer science project portfolio, and a contact me section that is separate from the one at the bottom of the homepage for consistency across all pages. Lastly there's a footer at the bottom of the page with my name and the year since this website either uses my writing or creative commmon license images.
* This is the section with the heaviest comments about the CSS usage and design choices. This level of commenting to teach is not carried out in the other html files to avoid cluttering the code.
## Short Description of publications.html:
* This page follows the design of the homepage without the hero parallax effect and a smaller parallax break between each card that summarizes a paper that has been published, since there are many cards, this design choice allows for a more compact webpage.
## Short Description of CV.html:
* This is literally just a link to a CV.pdf file, showing the skill of embedding a pdf into an html file.
## Short Description of contact.html:
* Same as the homepage contact section. When clicking contact.html in the index.html navigation bar, it takes you to the bottom of that page, but when clicked in other pages that don't have the contact at the bottom, it takes you to the top of the contact.html page.
## Short Description of project.html (JavaScript IS IN THIS PAGE):
* This is my e-portfolio page of final projects that I've done for my computer science classes so far. In order to show the use of vanilla JavaScript, I added a riddle with a button that when clicked shows the answer to the riddle, and when clicked again hides the answer. This demonstrates the use of event listeners and manipulating the DOM using JavaScript as required by the assignment - but in the live version of the website this will be removed.


## Description of styles.css:
This time I made a separate css file that can be used by all the html files because we were required to do a multi-page website and wanted to reduce the amount of code being repeated. The css file is broken down into 
* *Global styles* - styles that apply to the whole website including the body, html, and the body:before to create a background behind the cards in the parallax sections.
* *Navigation bar styles* - styles that apply to the navigation bar at the top of each page, including the pill button design instead of a traditional nav bar.
* *Section styles* - These are the cards that sit on top of the parallax sections and the background image. These styles include the section title, body, text, and image styles including a setup for the card that contains the image and text side by side, with or without a caption on the image, or no image at all for sections that are just text. It's versatile and can be used for any section on any page.
* *Parallax styles* - These styles create the parallax effect for the hero section on the homepage (my big name on the front and the tagline). It also includes a parallax spacer of two different that can be used between sections to give a breather between cards.
* *Footer styles* - These styles create the footer at the bottom of each page that contains my name and the year and copyright.
* *Media queries* - These styles change the layout of the sections when the screen size is smaller than 768px. This includes a smaller parallax, a smaller section title, and a change to the pills so that they are slideable on smaller screens. 


## Citations
* [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
* [Intro to the DOM JS Basics](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#adding_a_child_element)
* [Intro to Parallax from W3Schools](https://www.w3schools.com/howto/howto_css_parallax.asp)
* [Making pill like buttons from Tachyons](https://tachyons.io/components/buttons/pill/index.html)
* [How to embed a PDF](https://stackoverflow.com/questions/291813/recommended-way-to-embed-pdf-in-html)
* [Flexbox guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
* [Unsplash Background Image by Sunder Muthukumaran](https://unsplash.com/photos/a-large-pile-of-blue-plastic-shards-7kEoHl67qxw)


## LLM policy
* Questions asked:
  * "Is there a way to have a navigation bar that looks more sleek and modern?"
  * “What is the best design choice without getting rid of the pills that you suggest?”
  * "My footer doesn't stay at the bottom of the page, but at the bottom of the content, how do I fix this? What is that technique called?"
  * "When making a css file, is it best to reuse as much code as possible or is it better to write new code for each section for easy changes in the future?"
  * "Why does my parallax scrolling not work on my phone but does on a computer screen when I resize the window to emulate the phone's size?"
  * "Explain the concept of "scroll" vs "fixed" in the context of parallax scrolling?"
  * "I'm having a hard time understanding flexbox, can you give me a simple explanation of how it works and a simple example?"
  * "I'm having a hard time understanding why we use javascript when css can do so much, can you give me a simple explanation of when to use javascript vs css?"
  * How do I add space between sections in html using css?
  * How do I make the copyright with the symbol and year in the footer?
