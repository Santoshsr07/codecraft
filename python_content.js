// Content structure
const courseContent = {
  "Page-1": {
    title: "Page-1",
    content: `
              <main class="container">
        <h1>Python Introduction</h1>
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

        <section>
            <h2>Getting Started with Python Programming</h2>
            <p>To get started with Python, let's first finish the installation steps. Here's a basic guide to set up Python on your system.</p>
            <h3>Install Python</h3>
            <p>To install Python on your computer, follow these steps:</p>
            <ul>
                <li>Download Python from the official website: <a href="https://www.python.org/">Python.org</a></li>
                <li>Choose the latest Python version suitable for your OS (Windows, macOS, Linux).</li>
                <li>Install Python by running the downloaded file and following the instructions.</li>
                <li>Verify the installation by running <code>python --version</code> in the terminal.</li>
            </ul>
            <h3>Create and Run your First Python Program</h3>
            <p>Once Python is installed, create a simple Python program:</p>
            <pre class="code-example">
print("Hello World")
            </pre>
            <p>Steps to run the program:</p>
            <ul>
                <li>Open a text editor and copy the above code.</li>
                <li>Save the file with a <code>.py</code> extension (e.g., <code>Hello.py</code>).</li>
                <li>Open the terminal and navigate to the file location.</li>
                <li>Run the script using the command: <code>python Hello.py</code></li>
            </ul>
            <p>You shouldsee the output:</p>
            <pre class="output-example">
Hello World
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS Selectors, Colors & Python</h2>
            <h3>What are CSS selectors?</h3>
            <p>CSS selectors are patterns used to target and style specific HTML elements.</p>
            
            <h3>What is the difference between an ID and a class selector?</h3>
            <p>The ID selector (#id) targets a single, unique element, while the class selector (.class) can target multiple elements.</p>
            
            <h3>What is a hexadecimal color code?</h3>
            <p>A hexadecimal color code is a 6-character code representing a color. It begins with #, followed by 3 pairs of hex digits (e.g., #ff0000 for red).</p>
            
            <h3>What is the RGB color model?</h3>
            <p>The RGB color model defines colors by mixing Red, Green, and Blue components. Each component’s value ranges from 0 to 255.</p>

            <h3>How do I run a Python script?</h3>
            <p>Save your script as a <code>.py</code> file, open a terminal, navigate to the script location, and run <code>python script.py</code>.</p>
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
        <h1>Python Syntax</h1>
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

        <section>
            <h2>Getting Started with Python Programming</h2>
            <p>To get started with Python, let's first finish the installation steps. Here's a basic guide to set up Python on your system.</p>
            <h3>Install Python</h3>
            <p>To install Python on your computer, follow these steps:</p>
            <ul>
                <li>Download Python from the official website: <a href="https://www.python.org/">Python.org</a></li>
                <li>Choose the latest Python version suitable for your OS (Windows, macOS, Linux).</li>
                <li>Install Python by running the downloaded file and following the instructions.</li>
                <li>Verify the installation by running <code>python --version</code> in the terminal.</li>
            </ul>
            <h3>Create and Run your First Python Program</h3>
            <p>Once Python is installed, create a simple Python program:</p>
            <pre class="code-example">
print("Hello World")
            </pre>
            <p>Steps to run the program:</p>
            <ul>
                <li>Open a text editor and copy the above code.</li>
                <li>Save the file with a <code>.py</code> extension (e.g., <code>Hello.py</code>).</li>
                <li>Open the terminal and navigate to the file location.</li>
                <li>Run the script using the command: <code>python Hello.py</code></li>
            </ul>
            <p>You should see the output:</p>
            <pre class="output-example">
Hello World
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS Selectors, Colors & Python</h2>
            <h3>What are CSS selectors?</h3>
            <p>CSS selectors are patterns used to target and style specific HTML elements.</p>
            
            <h3>What is the difference between an ID and a class selector?</h3>
            <p>The ID selector (#id) targets a single, unique element, while the class selector (.class) can target multiple elements.</p>
            
            <h3>What is a hexadecimal color code?</h3>
            <p>A hexadecimal color code is a 6-character code representing a color. It begins with #, followed by 3 pairs of hex digits (e.g., #ff0000 for red).</p>
            
            <h3>What is the RGB color model?</h3>
            <p>The RGB color model defines colors by mixing Red, Green, and Blue components. Each component’s value ranges from 0 to 255.</p>

            <h3>How do I run a Python script?</h3>
            <p>Save your script as a <code>.py</code> file, open a terminal, navigate to the script location, and run <code>python script.py</code>.</p>
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
        <h1>Python Comments</h1>
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

        <section>
            <h2>Getting Started with Python Programming</h2>
            <p>To get started with Python, let's first finish the installation steps. Here's a basic guide to set up Python on your system.</p>
            <h3>Install Python</h3>
            <p>To install Python on your computer, follow these steps:</p>
            <ul>
                <li>Download Python from the official website: <a href="https://www.python.org/">Python.org</a></li>
                <li>Choose the latest Python version suitable for your OS (Windows, macOS, Linux).</li>
                <li>Install Python by running the downloaded file and following the instructions.</li>
                <li>Verify the installation by running <code>python --version</code> in the terminal.</li>
            </ul>
            <h3>Create and Run your First Python Program</h3>
            <p>Once Python is installed, create a simple Python program:</p>
            <pre class="code-example">
print("Hello World")
            </pre>
            <p>Steps to run the program:</p>
            <ul>
                <li>Open a text editor and copy the above code.</li>
                <li>Save the file with a <code>.py</code> extension (e.g., <code>Hello.py</code>).</li>
                <li>Open the terminal and navigate to the file location.</li>
                <li>Run the script using the command: <code>python Hello.py</code></li>
            </ul>
            <p>You should see the output:</p>
            <pre class="output-example">
Hello World
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on CSS Selectors, Colors & Python</h2>
            <h3>What are CSS selectors?</h3>
            <p>CSS selectors are patterns used to target and style specific HTML elements.</p>
            
            <h3>What is the difference between an ID and a class selector?</h3>
            <p>The ID selector (#id) targets a single, unique element, while the class selector (.class) can target multiple elements.</p>
            
            <h3>What is a hexadecimal color code?</h3>
            <p>A hexadecimal color code is a 6-character code representing a color. It begins with #, followed by 3 pairs of hex digits (e.g., #ff0000 for red).</p>
            
            <h3>What is the RGB color model?</h3>
            <p>The RGB color model defines colors by mixing Red, Green, and Blue components. Each component’s value ranges from 0 to 255.</p>

            <h3>How do I run a Python script?</h3>
            <p>Save your script as a <code>.py</code> file, open a terminal, navigate to the script location, and run <code>python script.py</code>.</p>
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
        <h1>Python Variables</h1>
        <section>
            <h2>Python Variables</h2>
            <p>In Python, variables are used to store data that can be referenced and manipulated during program execution.</p>
            <h3>Example:</h3>
            <pre class="code-example">
x = 5
name = "Samantha"  

print(x)
print(name)
            </pre>
            <p><strong>Output:</strong></p>
            <pre class="output-example">
5
Samantha
            </pre>
            <h3>Rules for Naming Variables</h3>
            <ul>
                <li>Variable names can only contain letters, digits, and underscores (_).</li>
                <li>A variable name cannot start with a digit.</li>
                <li>Variable names are case-sensitive (myVar and myvar are different).</li>
                <li>Avoid using Python keywords (e.g., if, else, for) as variable names.</li>
            </ul>
            <h3>Assigning Values to Variables</h3>
            <pre class="code-example">
x = 5
y = 3.14
z = "Hi"
            </pre>
            <h3>Type Casting a Variable</h3>
            <pre class="code-example">
s = "10"
n = int(s)
f = float(5)
s2 = str(25)
            </pre>
            <h3>Getting the Type of a Variable</h3>
            <pre class="code-example">
n = 42
f = 3.14
s = "Hello, World!"
li = [1, 2, 3]
d = {'key': 'value'}
bool_val = True

print(type(n))   
print(type(f)) 
print(type(s))   
print(type(li))     
print(type(d))     
print(type(bool_val))
            </pre>
            <h3>Scope of a Variable</h3>
            <h4>Local Variables:</h4>
            <pre class="code-example">
def f():
    a = "I am local"
    print(a)

f()
            </pre>
            <h4>Global Variables:</h4>
            <pre class="code-example">
a = "I am global"

def f():
    global a
    a = "Modified globally"
    print(a)

f()
print(a)
            </pre>
            <h3>Deleting a Variable</h3>
            <pre class="code-example">
x = 10
print(x) 

del x
#print(x)  # Raises NameError
            </pre>
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
        <h1>Python Keywords</h1>
        <section>
            <h2>Python Variables</h2>
            <p>In Python, variables are used to store data that can be referenced and manipulated during program execution.</p>
            <h3>Example:</h3>
            <pre class="code-example">
x = 5
name = "Samantha"  

print(x)
print(name)
            </pre>
            <p><strong>Output:</strong></p>
            <pre class="output-example">
5
Samantha
            </pre>
            <h3>Rules for Naming Variables</h3>
            <ul>
                <li>Variable names can only contain letters, digits, and underscores (_).</li>
                <li>A variable name cannot start with a digit.</li>
                <li>Variable names are case-sensitive (myVar and myvar are different).</li>
                <li>Avoid using Python keywords (e.g., if, else, for) as variable names.</li>
            </ul>
            <h3>Assigning Values to Variables</h3>
            <pre class="code-example">
x = 5
y = 3.14
z = "Hi"
            </pre>
            <h3>Type Casting a Variable</h3>
            <pre class="code-example">
s = "10"
n = int(s)
f = float(5)
s2 = str(25)
            </pre>
            <h3>Getting the Type of a Variable</h3>
            <pre class="code-example">
n = 42
f = 3.14
s = "Hello, World!"
li = [1, 2, 3]
d = {'key': 'value'}
bool_val = True

print(type(n))   
print(type(f)) 
print(type(s))   
print(type(li))     
print(type(d))     
print(type(bool_val))
            </pre>
            <h3>Scope of a Variable</h3>
            <h4>Local Variables:</h4>
            <pre class="code-example">
def f():
    a = "I am local"
    print(a)

f()
            </pre>
            <h4>Global Variables:</h4>
            <pre class="code-example">
a = "I am global"

def f():
    global a
    a = "Modified globally"
    print(a)

f()
print(a)
            </pre>
            <h3>Deleting a Variable</h3>
            <pre class="code-example">
x = 10
print(x) 

del x
#print(x)  # Raises NameError
            </pre>
        </section>

        <section>
            <h2>Python Keywords</h2>
            <p>Keywords in Python are reserved words that have special meanings and serve specific purposes in the language syntax.</p>
            <h3>List of Keywords</h3>
            <pre class="code-example">
True, False, None, and, or, not, is, if, else, elif, for, while, break, continue, pass, try, except, finally, raise, assert,
def, return, lambda, yield, class, import, from, in, as, del, global, with, nonlocal, async, await
            </pre>
            <h3>Getting List of All Python Keywords</h3>
            <pre class="code-example">
import keyword

print("The list of keywords is : ")
print(keyword.kwlist)
            </pre>
            <h3>Example Usage</h3>
            <pre class="code-example">
# Using True and False
print(False == 0)  # True
print(True == 1)   # True

# Using logical operators
print(True and False)  # False
print(True or False)   # True
print(not True)        # False
            </pre>
            <h3>Control Flow Keywords</h3>
            <pre class="code-example">
x = 0
if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")
            </pre>
            <h3>Exception Handling Keywords</h3>
            <pre class="code-example">
try:
    a = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Execution finished")
            </pre>
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
