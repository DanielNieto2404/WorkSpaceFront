# HTML5 and CSS3 Bootcamp

## About
- Author: Gilberto López Ambrosino.
- LinkedIn: https://www.linkedin.com/in/gilbertoamb/

## Official Documentation
- Guides https://developer.mozilla.org/en-US/docs/Learn
- HTML Element reference https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- CSS reference https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

## Learning and hands-on (HTML)
see in https://developer.mozilla.org/en-US/docs/Learn:
* Getting started with the web overview
    - Installing basic software:
        + [ ] Installing a text editor or IDE (Integrated development environment)
        + [ ] Try to have at least two installed browsers
        + [ ] Setup git
        + [ ] Clone this repository: `git clone https://github.com/hittten/bootcamp-html-css.git`
        + [ ] Setup local web Server Familiarize starting and stop 
            * with python `python -m SimpleHTTPServer`
            * with docker `docker run -v $(pwd):/usr/share/nginx/html -p 80:80 nginx`
    - What will your website look like?
        + [ ] Download a firefox icon image
        + Learn about fonts
    - Dealing with files
        + [ ] Create folders structure into practice folder
        + [ ] Create index file with the firefox icon
    - HTML basics
        + [ ] Update index file with Headings, Paragraphs, Lists and Links
* Introduction to HTML overview
    - Getting started with HTML
    - What's in the head? Metadata in HTML
        + [ ] Copy all files from resolved/ to practice/ (replace all files)
        + [ ] Change meta charset to `ISO-8859-1` and see what happen
        + [ ] Change header and page titles to `Meta examples`
        + [ ] Add Metadata: author, description, keywords and open graph properties: image, description and title 
        + [ ] Add favicon icon 
        + [ ] Add css file and script file. 
        + [ ] Add primary language
    - HTML text fundamentals
        + [ ] Add Headings and Paragraphs
        + [ ] Add Unordered list for "Ingredients"
        + [ ] Add Ordered list for "Instructions"
    - Creating hyperlinks
        + [ ] Add an unordered list in the indicated place on one page, containing the names of the pages to link to. A navigation menu is usually just a list of links, so this is semantically ok.
        + [ ] Turn each page name into a link to that page.
        + [ ] Copy the navigation menu across to each page.
        + [ ] On each page, remove just the link to that same page — it is confusing and pointless for a page to include a link to itself, and the lack of a link acts a good visual reminder of what page you are currently on.
        + [ ] Add a link with "mailto" at the end of the homepage document.
    - Advanced text formatting
    - Document and website structure
    - Debugging HTML
    - Assessment: Marking up a letter
    - Assessment: Structuring a page of content
* Multimedia and embedding overview
    - Images in HTML
        + [ ] Use dinosaur image `https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg`
        + [ ] Create new html document with img tag
        + [ ] Add width "1000" and height "300" attributes, see what happens
        + [ ] Remove src link and see what happens
        + [ ] Create a figure with caption
    - Video and audio content
        + [ ] Create new html document, put video tag with two sources for compatibility
        + [ ] Add `poster` boolean attribute and see the preview image
        + [ ] Add `autoplay` boolean attribute and see how the video is played automatically, but when is finish it stop.
        + [ ] Add `loop` boolean attribute and see how the video played repeatedly
        + [ ] Add `controls` boolean attribute and see how the video played repeatedly
        + [ ] Add auto tag for `viper.mp3` and `viper.ogg`
    - From object to iframe — other embedding technologies
        + [ ] Create new html index document
        + [ ] Embed a Youtube video
        + [ ] Embed a Google Map
        + [ ] Embed a Web site
        + [ ] Embed a the Flash file `whoosh.swf`
        + [ ] Embed a the PDF file `mypdf.pdf`
        + [ ] Embed a the image file `dinosaur.jpg`
    - Adding vector graphics to the Web
    - Responsive images
    - Assessment: Mozilla splash page
* HTML tables overview
    - HTML table basics
    - HTML Table advanced features and accessibility
    - Assessment: Structuring planet data
* HTML forms overview
    - Your first HTML form
    - How to structure an HTML form
    - The native form widgets
    - Sending form data

## Learning and hands-on (CSS)
* CSS first steps overview
    - CSS basics
        + [ ] Create new index.html file with and follow de practice.
    - What is CSS?
    - Getting started with CSS
    - How CSS is structured
    - How CSS works

* CSS building blocks overview
    - Cascade and inheritance
        + [ ] Active learning: playing with the cascade
    - CSS selectors
        + [ ] Try it out in "Attribute selector"
    - The box model
        + [ ] Playing with box models
    - Backgrounds and borders
        + [ ] Playing with backgrounds and borders
    - Handling different text directions
    - Overflowing content
    - Values and units
    - Sizing items in CSS
    - Images, media, and form elements
    - Styling tables
    - Debugging CSS
    - Organizing your CSS

* Styling text overview
    - Fundamental text and font styling
    - Styling lists
    - Styling links
    - Web fonts
    - Assessment: Typesetting a community school homepage

* CSS layout overview
    - Introduction
    - Normal Flow
    - Flexbox
    - Grids
    - Floats
    - Positioning
    - Multiple-column Layout
    - Responsive design
    - Beginner's guide to media queries
    - Legacy Layout Methods
    - Supporting Older Browsers
    - Fundamental Layout Comprehension
