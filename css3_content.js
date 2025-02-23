// Content structure
const courseContent = {
  "Page-1": {
    title: "Page-1",
    content: `
              <main class="container">
        <h1>CSS Introduction</h1>
        <section>
            <h2>What is CSS?</h2>
            <p>CSS (Cascading Style Sheets) is a language designed to simplify the process of making web pages
                presentable.</p>
            <ul>
                <li>Separates content (HTML) from styling (CSS).</li>
                <li>Allows consistent styling across multiple pages.</li>
                <li>Uses selectors and declarations to style HTML elements.</li>
            </ul>
        </section>

        <section>
            <h2>CSS Syntax</h2>
            <pre class="code-example">
h1 {
    color: blue;
    font-size: 12px;
}
            </pre>
            <p><strong>Selector:</strong> h1</p>
            <p><strong>Declaration:</strong> { color: blue; font-size: 12px; }</p>
        </section>

        <section>
            <h2>CSS Features and Use Cases</h2>
            <h3>Changing Text Color</h3>
            <pre class="code-example">
p {
    color: green;
}
            </pre>
            <h3>Background Color</h3>
            <pre class="code-example">
div {
    background-color: chocolate;
    width: 100px;
    height: 100px;
}
            </pre>
            <h3>Hover Effects</h3>
            <pre class="code-example">
button:hover {
    background-color: blue;
}
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS</h2>
            <h3>What is CSS?</h3>
            <p>CSS (Cascading Style Sheets) is used to style HTML elements.</p>

            <h3>How do you add CSS to a web page?</h3>
            <p>Using Inline, Internal, or External styles.</p>

            <h3>What are CSS selectors?</h3>
            <p>CSS selectors target HTML elements for styling.</p>
        </section>
    </main>
          `,
    prev: null,
    next: "Page-2",
  },

  "Page-2": {
    title: "Page-2",
    content: `
              <main class="container">
        <h1>CSS Selectors</h1>
        <section>
            <h2>What are CSS Selectors?</h2>
            <p>CSS selectors are used to target HTML elements on your pages, allowing you to apply styles based on their ID, class, type attributes, and more.</p>
            <ul>
                <li>Basic Selectors</li>
                <li>Combinators</li>
                <li>Group Selectors</li>
                <li>Attribute Selectors</li>
                <li>Pseudo-Classes</li>
            </ul>
        </section>

        <section>
            <h2>Basic Selectors</h2>
            <h3>1. Universal Selector (*)</h3>
            <pre class="code-example">
* {
    color: red;
}
            </pre>
            <h3>2. Element Selector</h3>
            <pre class="code-example">
p {
    font-size: 16px;
}
            </pre>
            <h3>3. Class Selector (.)</h3>
            <pre class="code-example">
.button {
    background-color: blue;
    color: white;
}
            </pre>
            <h3>4. ID Selector (#)</h3>
            <pre class="code-example">
#header {
    background-color: gray;
}
            </pre>
        </section>

        <section>
            <h2>Combinator Selectors</h2>
            <h3>1. Descendant Selector</h3>
            <pre class="code-example">
div p {
    color: red;
}
            </pre>
            <h3>2. Child Selector (>)</h3>
            <pre class="code-example">
div > p {
    margin-left: 20px;
}
            </pre>
            <h3>3. Adjacent Sibling Selector (+)</h3>
            <pre class="code-example">
h1 + p {
    font-weight: bold;
}
            </pre>
            <h3>4. General Sibling Selector (~)</h3>
            <pre class="code-example">
h1 ~ p {
    font-style: italic;
}
            </pre>
        </section>

        <section>
            <h2>Attribute Selectors</h2>
            <h3>1. Presence Selector</h3>
            <pre class="code-example">
input[type] {
    border: 2px solid black;
}
            </pre>
            <h3>2. Attribute Value Selector</h3>
            <pre class="code-example">
input[type="text"] {
    background-color: yellow;
}
            </pre>
        </section>

        <section>
            <h2>Pseudo-Classes</h2>
            <h3>1. :hover</h3>
            <pre class="code-example">
a:hover {
    color: red;
}
            </pre>
            <h3>2. :focus</h3>
            <pre class="code-example">
input:focus {
    outline: 3px solid red;
}
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS Selectors</h2>
            <h3>What are CSS selectors?</h3>
            <p>CSS selectors are patterns used to target and style specific HTML elements.</p>
            
            <h3>What is the difference between an ID and a class selector?</h3>
            <p>The ID selector (#id) targets a single, unique element, while the class selector (.class) can target multiple elements.</p>
        </section>
    </main>
          `,
    prev: "Page-1",
    next: "Page-3",
  },

  "Page-3": {
    title: "Page-3",
    content: `
              <main class="container">
        <h1>CSS Selectors</h1>
        <section>
            <h2>What are CSS Selectors?</h2>
            <p>CSS selectors are used to target HTML elements on your pages, allowing you to apply styles based on their ID, class, type attributes, and more.</p>
            <ul>
                <li>Basic Selectors</li>
                <li>Combinators</li>
                <li>Group Selectors</li>
                <li>Attribute Selectors</li>
                <li>Pseudo-Classes</li>
            </ul>
        </section>

        <section>
            <h2>Basic Selectors</h2>
            <h3>1. Universal Selector (*)</h3>
            <pre class="code-example">
* {
    color: red;
}
            </pre>
            <h3>2. Element Selector</h3>
            <pre class="code-example">
p {
    font-size: 16px;
}
            </pre>
            <h3>3. Class Selector (.)</h3>
            <pre class="code-example">
.button {
    background-color: blue;
    color: white;
}
            </pre>
            <h3>4. ID Selector (#)</h3>
            <pre class="code-example">
#header {
    background-color: gray;
}
            </pre>
        </section>

        <section>
            <h2>Combinator Selectors</h2>
            <h3>1. Descendant Selector</h3>
            <pre class="code-example">
div p {
    color: red;
}
            </pre>
            <h3>2. Child Selector (>)</h3>
            <pre class="code-example">
div > p {
    margin-left: 20px;
}
            </pre>
            <h3>3. Adjacent Sibling Selector (+)</h3>
            <pre class="code-example">
h1 + p {
    font-weight: bold;
}
            </pre>
            <h3>4. General Sibling Selector (~)</h3>
            <pre class="code-example">
h1 ~ p {
    font-style: italic;
}
            </pre>
        </section>

        <section>
            <h2>Attribute Selectors</h2>
            <h3>1. Presence Selector</h3>
            <pre class="code-example">
input[type] {
    border: 2px solid black;
}
            </pre>
            <h3>2. Attribute Value Selector</h3>
            <pre class="code-example">
input[type="text"] {
    background-color: yellow;
}
            </pre>
        </section>

        <section>
            <h2>Pseudo-Classes</h2>
            <h3>1. :hover</h3>
            <pre class="code-example">
a:hover {
    color: red;
}
            </pre>
            <h3>2. :focus</h3>
            <pre class="code-example">
input:focus {
    outline: 3px solid red;
}
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS Selectors</h2>
            <h3>What are CSS selectors?</h3>
            <p>CSS selectors are patterns used to target and style specific HTML elements.</p>
            
            <h3>What is the difference between an ID and a class selector?</h3>
            <p>The ID selector (#id) targets a single, unique element, while the class selector (.class) can target multiple elements.</p>
        </section>
    </main>
          `,
    prev: "Page-2",
    next: "Page-4",
  },
  "Page-4": {
    title: "Page-4",
    content: `
              <main class="container">
        <h1>CSS Colors</h1>
        <section>
            <h2>What are CSS Selectors?</h2>
            <p>CSS selectors are used to target HTML elements on your pages, allowing you to apply styles based on their ID, class, type attributes, and more.</p>
            <ul>
                <li>Basic Selectors</li>
                <li>Combinators</li>
                <li>Group Selectors</li>
                <li>Attribute Selectors</li>
                <li>Pseudo-Classes</li>
            </ul>
        </section>

        <section>
            <h2>Basic Selectors</h2>
            <h3>1. Universal Selector (*)</h3>
            <pre class="code-example">
* {
    color: red;
}
            </pre>
            <h3>2. Element Selector</h3>
            <pre class="code-example">
p {
    font-size: 16px;
}
            </pre>
            <h3>3. Class Selector (.)</h3>
            <pre class="code-example">
.button {
    background-color: blue;
    color: white;
}
            </pre>
            <h3>4. ID Selector (#)</h3>
            <pre class="code-example">
#header {
    background-color: gray;
}
            </pre>
        </section>

        <section>
            <h2>CSS Colors</h2>
            <p>CSS colors are used to define the color properties of HTML elements, including text, background, borders, etc.</p>
            <h3>Color Formats in CSS</h3>
            <ul>
                <li>Color Names (e.g., red, blue, green)</li>
                <li>Hexadecimal Codes (e.g., #FF5733)</li>
                <li>RGB (e.g., rgb(255, 0, 0))</li>
                <li>RGBA (e.g., rgba(255, 0, 0, 0.5))</li>
                <li>HSL (e.g., hsl(120, 100%, 50%))</li>
                <li>HSLA (e.g., hsla(120, 100%, 50%, 0.5))</li>
            </ul>
            <h3>Example of Different Color Formats</h3>
            <pre class="code-example">
.hex-example {
    background-color: #FF5733;
}
.rgb-example {
    color: rgb(255, 0, 0);
}
.rgba-example {
    color: rgba(0, 255, 0, 0.5);
}
.hsl-example {
    color: hsl(120, 100%, 50%);
}
.hsla-example {
    color: hsla(120, 100%, 50%, 0.3);
}
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS Selectors & Colors</h2>
            <h3>What are CSS selectors?</h3>
            <p>CSS selectors are patterns used to target and style specific HTML elements.</p>
            
            <h3>What is the difference between an ID and a class selector?</h3>
            <p>The ID selector (#id) targets a single, unique element, while the class selector (.class) can target multiple elements.</p>
            
            <h3>What is a hexadecimal color code?</h3>
            <p>A hexadecimal color code is a 6-character code representing a color. It begins with #, followed by 3 pairs of hex digits (e.g., #ff0000 for red).</p>
            
            <h3>What is the RGB color model?</h3>
            <p>The RGB color model defines colors by mixing Red, Green, and Blue components. Each component’s value ranges from 0 to 255.</p>
        </section>
    </main>
          `,
    prev: "Page-3",
    next: "Page-5",
  },
  "Page-5": {
    title: "Page-5",
    content: `
              <main class="container">
        <h1>CSS Selectors & Colors</h1>
        <section>
            <h2>What are CSS Selectors?</h2>
            <p>CSS selectors are used to target HTML elements on your pages, allowing you to apply styles based on their ID, class, type attributes, and more.</p>
            <ul>
                <li>Basic Selectors</li>
                <li>Combinators</li>
                <li>Group Selectors</li>
                <li>Attribute Selectors</li>
                <li>Pseudo-Classes</li>
            </ul>
        </section>

        <section>
            <h2>Basic Selectors</h2>
            <h3>1. Universal Selector (*)</h3>
            <pre class="code-example">
* {
    color: red;
}
            </pre>
            <h3>2. Element Selector</h3>
            <pre class="code-example">
p {
    font-size: 16px;
}
            </pre>
            <h3>3. Class Selector (.)</h3>
            <pre class="code-example">
.button {
    background-color: blue;
    color: white;
}
            </pre>
            <h3>4. ID Selector (#)</h3>
            <pre class="code-example">
#header {
    background-color: gray;
}
            </pre>
        </section>

        <section>
            <h2>CSS Colors</h2>
            <p>CSS colors are used to define the color properties of HTML elements, including text, background, borders, etc.</p>
            <h3>Color Formats in CSS</h3>
            <ul>
                <li>Color Names (e.g., red, blue, green)</li>
                <li>Hexadecimal Codes (e.g., #FF5733)</li>
                <li>RGB (e.g., rgb(255, 0, 0))</li>
                <li>RGBA (e.g., rgba(255, 0, 0, 0.5))</li>
                <li>HSL (e.g., hsl(120, 100%, 50%))</li>
                <li>HSLA (e.g., hsla(120, 100%, 50%, 0.5))</li>
            </ul>
            <h3>Example of Different Color Formats</h3>
            <pre class="code-example">
.hex-example {
    background-color: #FF5733;
}
.rgb-example {
    color: rgb(255, 0, 0);
}
.rgba-example {
    color: rgba(0, 255, 0, 0.5);
}
.hsl-example {
    color: hsl(120, 100%, 50%);
}
.hsla-example {
    color: hsla(120, 100%, 50%, 0.3);
}
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS Selectors & Colors</h2>
            <h3>What are CSS selectors?</h3>
            <p>CSS selectors are patterns used to target and style specific HTML elements.</p>
            
            <h3>What is the difference between an ID and a class selector?</h3>
            <p>The ID selector (#id) targets a single, unique element, while the class selector (.class) can target multiple elements.</p>
            
            <h3>What is a hexadecimal color code?</h3>
            <p>A hexadecimal color code is a 6-character code representing a color. It begins with #, followed by 3 pairs of hex digits (e.g., #ff0000 for red).</p>
            
            <h3>What is the RGB color model?</h3>
            <p>The RGB color model defines colors by mixing Red, Green, and Blue components. Each component’s value ranges from 0 to 255.</p>
        </section>
    </main>
          `,
    prev: "Page-4",
    next: null,
  }
};

// Current page tracker
let currentPage = "Page-1";

// Function to load content
function loadContent(pageId) {
  const page = courseContent[pageId];
  if (!page) return;

  // Update content
  document.getElementById("main-content").innerHTML = page.content;
  document.title = `CODECRAFT - ${page.title}`;

  // Update navigation buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const finishBtn = document.getElementById("finishBtn");

  if (page.prev) {
    prevBtn.style.display = "block";
    prevBtn.onclick = () => navigateToPage(page.prev);
  } else {
    prevBtn.style.display = "none";
  }

  if (page.next) {
    nextBtn.style.display = "block";
    nextBtn.onclick = () => navigateToPage(page.next);
    finishBtn.style.display = "none"; // Hide Finish button on other pages
  } else {
    nextBtn.style.display = "none";
    finishBtn.style.display = "block"; // Show Finish button on last page
  }

  // Update URL without page reload
  window.history.pushState({ pageId }, page.title, `#${pageId}`);
  currentPage = pageId;

  // Reset scroll after content updates
  setTimeout(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 0);
}

// Navigation function
function navigateToPage(pageId) {
  loadContent(pageId);

  // Ensure content updates before resetting scroll
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100); // Adjust delay if needed
}

// Handle browser back/forward buttons
window.onpopstate = (event) => {
  if (event.state && event.state.pageId) {
    loadContent(event.state.pageId);
  }
};

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  // Check for hash in URL
  const pageId = window.location.hash.slice(1) || "Page-1";
  loadContent(pageId);
});

// Keep track of scroll position
const scrollPositions = {};

window.addEventListener("scroll", () => {
  scrollPositions[currentPage] = window.scrollY;
});

// Restore scroll position when navigating
function restoreScrollPosition(pageId) {
  if (scrollPositions[pageId]) {
    window.scrollTo(0, scrollPositions[pageId]);
  } else {
    window.scrollTo(0, 0);
  }
}

document.getElementById("finishBtn").addEventListener("click", () => {
  alert("🎉 Congratulations! You have completed the course.");
  window.location.href = "your-completion-page.html"; // Redirect if needed
});
