// Content structure
const courseContent = {
  "Page-1": {
    title: "Page-1",
    content: `
            <main>
        <section>
            <h1>HTML Introduction</h1>
            <p>HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web.</p>
            <ul>
                <li>HTML is a markup language, not a programming language, meaning it annotates text to define how it is structured and displayed by web browsers.</li>
                <li>It forms the building blocks of all websites and is complemented by CSS for style and JavaScript for interactivity.</li>
                <li>In a nutshell, HTML is all about organizing and displaying information on a webpage. We can think of it as the bones or structure of a webpage.</li>
            </ul>
        </section>

        <section>
            <h2>Basic HTML Code Example</h2>
            <div class="code-example">
                <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;Welcome to My Webpage&lt;/h1&gt;
    &lt;p&gt;This is my first paragraph of text!&lt;/p&gt;
&lt;/body&gt;

&lt;/html&gt;
                </code></pre>
            </div>
        </section>

        <section>
            <h2>Table of Content</h2>
            <ul>
                <li>Why Learn HTML?</li>
                <li>Features of HTML</li>
                <li>HTML Element and HTML Tag</li>
                <li>HTML Page Structure</li>
                <li>Web Browsers</li>
                <li>HTML History</li>
                <li>Advantages of HTML</li>
                <li>Disadvantages of HTML</li>
            </ul>
        </section>

        <section>
            <h2>Why Learn HTML?</h2>
            <p>Here are 5 common reasons to learn HTML:</p>
            <ul>
                <li><strong>Build Websites:</strong> HTML is the basic building block for creating any website. Learning HTML can help you pursue a career in web development.</li>
                <li><strong>Customize Content:</strong> Allows you to edit or tweak web pages, emails, or templates to fit your needs.</li>
                <li><strong>Understand how the web works:</strong> Helps you grasp how the internet works and how web pages are structured.</li>
                <li><strong>Employment Opportunities:</strong> According to Bureau of Labor Statistics projects that employment for web developers will grow 16% between 2022-2032, which is much faster than the average across all occupations.</li>
                <li><strong>Learn Easily:</strong> HTML is beginner-friendly, making it a great first step into the world of coding and technology</li>
            </ul>
        </section>

        <section>
            <h2>Features of HTML</h2>
            <ul>
                <li>It is easy to learn and easy to use.</li>
                <li>It is platform-independent.</li>
                <li>Images, videos, and audio can be added to a web page.</li>
                <li>Hypertext can be added to the text.</li>
                <li>It is a markup language.</li>
            </ul>
        </section>

        <section>
            <h2>HTML Page Structure</h2>
            <p>The basic structure of an HTML page contains these essential elements:</p>
            <ul>
                <li><code>&lt;!DOCTYPE html&gt;</code> – This is the document type declaration, not a tag. It declares that the document is an HTML5 document.</li>
                <li><code>&lt;html&gt;</code> – This is called the HTML root element. All other elements are contained within it.</li>
                <li><code>&lt;head&gt;</code> – Contains the "behind the scenes" elements for a webpage.</li>
                <li><code>&lt;title&gt;</code> – Defines the title displayed on the browser tab.</li>
                <li><code>&lt;body&gt;</code> – Contains all the visible content of a webpage.</li>
            </ul>
        </section>

        <section>
            <h2>Web Browsers</h2>
            <p>Unlike other programming languages, HTML does not show output on the compiler. Web browsers show the results of an HTML code.</p>
            <p>It reads HTML files and determines how to show content with the help of HTML tags. Any web browser (Google, Safari, Mozilla Firefox, etc) can be used to open a .HTML file and view the results.</p>
        </section>

        <section>
            <h2>Advantages of HTML</h2>
            <ul>
                <li>HTML is used to build websites.</li>
                <li>It is supported by all browsers.</li>
                <li>It can be integrated with other languages like CSS, JavaScript, etc.</li>
            </ul>
        </section>

        <section>
            <h2>Disadvantages of HTML</h2>
            <ul>
                <li>HTML can only create static web pages. For dynamic web pages and logic, we need JavaScript.</li>
                <li>A large amount of code has to be written to create a simple web page.</li>
            </ul>
        </section>

        <section>
            <h2>FAQ</h2>
            <div class="faq-section">
                <h3>What is HTML?</h3>
                <p>HTML is a global markup language for web. You can create any webpage using HTML and any browser can open that HTML file.</p>

                <h3>What are the basics of HTML?</h3>
                <p>HTML basics include understanding the syntax, elements/tags, attributes, structure and formatting of HTML file.</p>

                <h3>What are the 5 uses of HTML?</h3>
                <ul>
                    <li>Creating web page</li>
                    <li>Integrating CSS and JavaScript</li>
                    <li>Accessing web content</li>
                    <li>Semantic markup</li>
                    <li>Cross-platform compatibility</li>
                </ul>
            </div>
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
        <section>
            <h1>HTML Basics</h1>
            <h2>What is HTML?</h2>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating and structuring web pages. It defines the structure using elements and tags.</p>
        </section>

        <section>
            <h2>Basic HTML Document</h2>
            <pre class="code-example">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;HTML&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p&gt;GeeksforGeeks is an online study platform&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
        </section>

        <section>
            <h2>HTML Headings</h2>
            <p>HTML offers six heading tags, from &lt;h1&gt; to &lt;h6&gt;, each displaying text in different font sizes.</p>
            <pre class="code-example">
&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
&lt;h4&gt;Heading 4&lt;/h4&gt;
&lt;h5&gt;Heading 5&lt;/h5&gt;
&lt;h6&gt;Heading 6&lt;/h6&gt;
            </pre>
        </section>

        <section>
            <h2>HTML Paragraph and Break Elements</h2>
            <pre class="code-example">
&lt;p&gt;
    HTML stands for HyperText Markup Language.&lt;br&gt;
    It is used to design web pages using a markup language.&lt;br&gt;
&lt;/p&gt;
            </pre>
        </section>

        <section>
            <h2>HTML Horizontal Line</h2>
            <pre class="code-example">
&lt;hr&gt;
            </pre>
        </section>

        <section>
            <h2>HTML Images</h2>
            <pre class="code-example">
&lt;img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png"&gt;
            </pre>
        </section>

        <section>
            <h2>Viewing HTML Source Code</h2>
            <p>To view the source code of a webpage, press <b>CTRL + U</b> or right-click and select <i>View Page Source</i>.</p>
        </section>

        <section class="faq-section">
            <h2>HTML Basics - FAQs</h2>
            <h3>What is HTML?</h3>
            <p>HTML stands for HyperText Markup Language. It is the standard language used to create and design the structure of web pages.</p>
            
            <h3>What are HTML tags and elements?</h3>
            <p>HTML tags are the building blocks of HTML, used to create elements that structure and organize content on a web page.</p>
            
            <h3>What is the basic structure of an HTML document?</h3>
            <p>An HTML document typically includes a &lt;!DOCTYPE html&gt; declaration, followed by &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; tags to structure the content.</p>
            
            <h3>What are attributes in HTML?</h3>
            <p>Attributes provide additional information about HTML elements and are included within the opening tag.</p>
            
            <h3>How can I view the HTML source code of a webpage?</h3>
            <p>You can view the HTML source code by right-clicking on a webpage and selecting “View Page Source” or by pressing CTRL + U.</p>
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
        <h1>HTML Layout</h1>
        <section>
            <h2>What is HTML Layout?</h2>
            <p>HTML layouts are a technique used to divide a web page into multiple sections, making it easier to apply styles, organize content, and manage operations efficiently.</p>
        </section>

        <section>
            <h2>Basic Layout Syntax</h2>
            <pre class="code-example">
&lt;header&gt; Content... &lt;/header&gt;
&lt;nav&gt; Content... &lt;/nav&gt;
&lt;main&gt; Content... &lt;/main&gt;
&lt;footer&gt; Content... &lt;/footer&gt;
            </pre>
        </section>

        <section>
            <h2>Basic HTML Layout Example</h2>
            <pre class="code-example">
&lt;html&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;My Website&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;p&gt;Welcome to my website!&lt;/p&gt;
    &lt;/main&gt;
    &lt;footer&gt;
        &lt;p&gt; 2024 My Website&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
        </section>

        <section>
            <h2>Layout Components</h2>
            <ul>
                <li><strong>Header:</strong> The top section containing title or navigation links.</li>
                <li><strong>Navigation Bar:</strong> Provides links to main sections.</li>
                <li><strong>Index/Sidebar:</strong> Contains additional information like ads or links.</li>
                <li><strong>Content Section:</strong> Main area displaying the primary content.</li>
                <li><strong>Footer:</strong> Bottom section with legal or contact information.</li>
            </ul>
        </section>

        <section>
            <h2>Example: Layout with Additional Semantic Tags</h2>
            <pre class="code-example">
&lt;html&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;My Blog&lt;/h1&gt;
    &lt;/header&gt;
    &lt;nav&gt;
        &lt;a href="#"&gt;Home&lt;/a&gt; | &lt;a href="#"&gt;About&lt;/a&gt; | &lt;a href="#"&gt;Contact&lt;/a&gt;
    &lt;/nav&gt;
    &lt;section&gt;
        &lt;h2&gt;Latest Posts&lt;/h2&gt;
        &lt;article&gt;
            &lt;h3&gt;Post Title&lt;/h3&gt;
            &lt;p&gt;This is a brief introduction to the blog post.&lt;/p&gt;
        &lt;/article&gt;
    &lt;/section&gt;
    &lt;aside&gt;
        &lt;h2&gt;About Me&lt;/h2&gt;
        &lt;p&gt;Short bio or profile information.&lt;/p&gt;
    &lt;/aside&gt;
    &lt;footer&gt;
        &lt;p&gt;&copy; 2024 My Blog&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
        </section>

        <section>
            <h2>Best Practices for HTML Layout</h2>
            <ul>
                <li>Use semantic HTML5 elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, and &lt;footer&gt;.</li>
                <li>Ensure responsive design using CSS media queries.</li>
                <li>Utilize CSS Grid and Flexbox for better layout control.</li>
            </ul>
        </section>

        <section class="faq-section">
            <h2>HTML Layout - FAQs</h2>
            <h3>What is the purpose of the &lt;div&gt; element in HTML layout?</h3>
            <p>The &lt;div&gt; element is a block-level container used to group elements for styling and layout control.</p>
            
            <h3>How can I center content horizontally in an HTML layout?</h3>
            <p>Use CSS properties like <code>margin: auto;</code> for block elements or <code>text-align: center;</code> for inline elements.</p>
            
            <h3>How do you create a grid layout in HTML?</h3>
            <p>Use CSS Grid Layout with properties like <code>display: grid;</code> and <code>grid-template-columns</code>.</p>
            
            <h3>How do I create a fixed header or footer?</h3>
            <p>Apply <code>position: fixed;</code> along with <code>top: 0;</code> for headers or <code>bottom: 0;</code> for footers.</p>
            
            <h3>What is a responsive layout?</h3>
            <p>A layout that adjusts based on screen size and orientation using CSS media queries.</p>
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
        <h1>HTML Editors</h1>
        <section>
            <h2>What is an HTML Editor?</h2>
            <p>An HTML Editor is a software application designed to help users create and modify HTML code. It includes features like syntax highlighting, tag completion, and error detection.</p>
        </section>

        <section>
            <h2>Types of HTML Editors</h2>
            <ul>
                <li><strong>Text-Based Editors:</strong> Direct coding with syntax highlighting. Examples: Sublime Text, VS Code.</li>
                <li><strong>WYSIWYG Editors:</strong> Graphical interface for designing web pages visually. Examples: Adobe Dreamweaver.</li>
            </ul>
        </section>

        <section>
            <h2>Popular HTML Editors</h2>
            <ul>
                <li>Notepad</li>
                <li>GeeksforGeeks IDE</li>
                <li>Brackets</li>
                <li>Sublime Text</li>
                <li>Atom</li>
                <li>Visual Studio Code</li>
            </ul>
        </section>

        <section>
            <h2>Example: Writing HTML Code</h2>
            <pre class="code-example">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;HTML Text Editor&lt;/title&gt;
    &lt;style&gt;
        h1 { color: #009900; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;GeeksforGeeks&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
        </section>

        <section>
            <h2>Comparison of HTML Editors</h2>
            <table>
                <tr>
                    <th>Editor</th>
                    <th>Platform</th>
                    <th>Key Features</th>
                    <th>Ideal For</th>
                </tr>
                <tr>
                    <td>Notepad</td>
                    <td>Windows</td>
                    <td>Basic editing</td>
                    <td>Beginners</td>
                </tr>
                <tr>
                    <td>VS Code</td>
                    <td>Cross-Platform</td>
                    <td>Live Server, Extensions</td>
                    <td>Professionals</td>
                </tr>
                <tr>
                    <td>Atom</td>
                    <td>Cross-Platform</td>
                    <td>Open-source, GitHub Integration</td>
                    <td>Advanced Users</td>
                </tr>
            </table>
        </section>

        <section>
            <h2>How to Choose the Right HTML Editor?</h2>
            <ul>
                <li>Beginners: WYSIWYG editors for ease of use.</li>
                <li>Advanced Users: Text-based editors for full control.</li>
                <li>Project Needs: Choose based on integrations and features.</li>
            </ul>
        </section>

        <section class="faq-section">
            <h2>HTML Editors - FAQs</h2>
            <h3>What is an HTML editor?</h3>
            <p>It is a software used to create, edit, or manage HTML code.</p>
            
            <h3>What are the different types of HTML editors?</h3>
            <p>There are Text-based and WYSIWYG editors.</p>
            
            <h3>What are some popular HTML editors?</h3>
            <p>Popular editors include Sublime Text, VS Code, Atom, and Notepad.</p>
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
        <h1>HTML Comments</h1>

        <section>
            <h2>What are HTML Comments?</h2>
            <p>HTML comments are used to add notes or explanations in the HTML code that are not displayed by the
                browser.</p>
            <p>They help in documenting the code, making it easier to understand and maintain.</p>
        </section>

        <section>
            <h2>Basic Comment Syntax</h2>
            <pre class="code-example">
&lt;!-- This is a comment and will not be displayed on the webpage --&gt;
&lt;p&gt;This is visible text.&lt;/p&gt;
            </pre>
        </section>

        <section>
            <h2>Types of HTML Comments</h2>
            <table>
                <tr>
                    <th>Comment</th>
                    <th>Description</th>
                    <th>Syntax</th>
                </tr>
                <tr>
                    <td>Single-line</td>
                    <td>Comment inside the ( &lt;!-- comment --&gt; ) tag.</td>
                    <td>&lt;!-- Single-line comment --&gt;</td>
                </tr>
                <tr>
                    <td>Multi-line</td>
                    <td>Uses multiple lines in the comment block.</td>
                    <td>
                        &lt;!-- Multi <br>
                        Line <br>
                        Comment --&gt;
                    </td>
                </tr>
            </table>
        </section>

        <section>
            <h2>Example: Single-Line and Inline Comments</h2>
            <pre class="code-example">
&lt;html&gt;
&lt;body&gt;
    &lt;!-- This is heading Tag --&gt;
    &lt;h1&gt;GeeksforGeeks&lt;/h1&gt;
    &lt;!-- This is single-line comment --&gt;
    &lt;h2&gt;This is &lt;!--given for--&gt; single line comment&lt;/h2&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
        </section>

        <section>
            <h2>Example: Multi-Line Comments</h2>
            <pre class="code-example">
&lt;html&gt;
&lt;body&gt;
    &lt;!-- This is
         heading tag --&gt;
    &lt;h1&gt;GeeksforGeeks&lt;/h1&gt;
    &lt;!-- This is
    multi-line
         comment --&gt;
    &lt;h2&gt;This is multi-line comment&lt;/h2&gt;
    &lt;!-- &lt;button style="font-family: Sans-serif;"&gt;
           Click Me
         &lt;/button&gt; --&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
        </section>

        <section>
            <h2>Uses of HTML Comments</h2>
            <ul>
                <li><strong>Code Organization:</strong> Helps structure large projects.</li>
                <li><strong>Collaboration:</strong> Explains sections for team members.</li>
                <li><strong>Debugging:</strong> Temporarily disable code without deleting.</li>
                <li><strong>Documentation:</strong> Stores information about the code.</li>
            </ul>
        </section>

        <section class="faq-section">
            <h2>HTML Comments - FAQs</h2>
            <h3>How to write comments in HTML?</h3>
            <p>Use the syntax &lt;!-- comment --&gt; to add notes within the code that are not displayed in the browser.
            </p>

            <h3>What are conditional comments in HTML?</h3>
            <p>Conditional comments are used for applying HTML or CSS for Internet Explorer versions 10 and below.</p>

            <h3>What are the three types of comments in HTML?</h3>
            <p>Single-line comment, Inline comment, and Multi-line comment.</p>

            <h3>Can HTML comments be nested?</h3>
            <p>No, HTML comments cannot be nested as it may lead to errors.</p>

            <h3>How do you comment out a large block of HTML code?</h3>
            <p>Wrap the section with &lt;!-- and --&gt; to disable a large portion of code.</p>
        </section>
    </main>
        `,
    prev: "Page-4",
    next: "Page-6",
  },
  "Page-6": {
    title: "Page-6",
    content: `
            <main class="container">
        <h1>HTML Headings</h1>
        <section>
            <h2>What are HTML Headings?</h2>
            <p>HTML headings are used to define the titles and subtitles of sections on a webpage. They help organize the content and create a structure that is easy to navigate.</p>
            <p>Proper use of headings enhances readability by organizing content into clear sections. Search engines utilize headings to understand page structure, aiding in SEO.</p>
        </section>

        <section>
            <h2>Example: HTML Heading Tags</h2>
            <pre class="code-example">
&lt;h1&gt;This is the Main Heading&lt;/h1&gt;
&lt;h2&gt;This is a Subheading&lt;/h2&gt;
&lt;h3&gt;This is a Smaller Subheading&lt;/h3&gt;
&lt;h4&gt;This is a Sub-Subheading&lt;/h4&gt;
&lt;h5&gt;This is a Minor Subheading&lt;/h5&gt;
&lt;h6&gt;This is the Smallest Heading&lt;/h6&gt;
            </pre>
        </section>

        <section>
            <h2>Levels of HTML Heading Tags</h2>
            <ul>
                <li><strong>&lt;h1&gt; – Main Heading:</strong> The primary focus of the page, used only once per page for SEO benefits.</li>
                <li><strong>&lt;h2&gt; – Subheadings:</strong> Used to divide content into major sections.</li>
                <li><strong>&lt;h3&gt; to &lt;h6&gt; – Smaller Headings:</strong> Used for finer subdivisions, gradually decreasing in size and importance.</li>
            </ul>
        </section>

        <section>
            <h2>Customization in HTML Heading Tags</h2>
            <pre class="code-example">
&lt;h1&gt;H1 Heading&lt;/h1&gt;
&lt;!-- Customizing size using the style attribute --&gt;
&lt;h1 style="font-size: 50px"&gt;H1 with new size.&lt;/h1&gt;
            </pre>
        </section>

        <section>
            <h2>Best Practices for Using HTML Headings</h2>
            <ul>
                <li>Use only one &lt;h1&gt; per page to define the main topic.</li>
                <li>Maintain a logical structure (&lt;h1&gt; → &lt;h2&gt; → &lt;h3&gt;) to improve readability.</li>
                <li>Ensure headings are descriptive and relevant to the following content.</li>
                <li>Avoid using headings solely for styling purposes.</li>
            </ul>
        </section>

        <section class="faq-section">
            <h2>FAQs on HTML Headings</h2>
            <h3>What are HTML headings?</h3>
            <p>HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags, with &lt;h1&gt; being the highest (or most important) level and &lt;h6&gt; the lowest.</p>
            
            <h3>How many heading levels are there in HTML?</h3>
            <p>There are six levels of headings in HTML, from &lt;h1&gt; to &lt;h6&gt;.</p>
            
            <h3>What is the purpose of headings in HTML?</h3>
            <p>Headings define the structure and hierarchy of content, improving readability, SEO, and accessibility.</p>
            
            <h3>What is the difference between &lt;h1&gt; and &lt;h6&gt;?</h3>
            <p>&lt;h1&gt; is the most important heading, typically used for the main title, while &lt;h6&gt; is the least important and used for minor subsections.</p>
            
            <h3>Can you use multiple &lt;h1&gt; tags in a single HTML document?</h3>
            <p>Yes, but it is recommended to have only one &lt;h1&gt; per page for better SEO and content clarity.</p>
            
            <h3>Do headings have any default styling?</h3>
            <p>Yes, browsers apply default styles, such as larger font sizes and bold text, to indicate heading importance. These can be customized with CSS.</p>
        </section>
    </main>
        `,
    prev: "Page-5",
    next: "Page-7",
  },
  "Page-7": {
    title: "Page-7",
    content: `
            <main class="container">
        <h1>HTML Paragraphs</h1>
        <section>
            <h2>What is an HTML Paragraph?</h2>
            <p>A paragraph in HTML is a block of text enclosed within the &lt;p&gt; tag. It helps structure content into readable sections.</p>
        </section>

        <section>
            <h2>HTML Paragraph Syntax</h2>
            <pre class="code-example">
&lt;p&gt;This is a paragraph in HTML.&lt;/p&gt;
            </pre>
        </section>

        <section>
            <h2>How HTML Paragraphs are Rendered?</h2>
            <ul>
                <li>HTML automatically adds space before and after paragraphs.</li>
                <li>Multiple spaces within a paragraph are reduced to a single space.</li>
                <li>Each paragraph is displayed on a new line by default.</li>
            </ul>
        </section>

        <section>
            <h2>Example: Multiple Paragraphs</h2>
            <pre class="code-example">
&lt;p&gt;This is the first paragraph.&lt;/p&gt;
&lt;p&gt;This is the second paragraph.&lt;/p&gt;
            </pre>
        </section>

        <section>
            <h2>The &lt;br&gt; Tag</h2>
            <p>The &lt;br&gt; tag is used to insert line breaks within a paragraph.</p>
            <pre class="code-example">
&lt;p&gt;This is a sentence.&lt;br&gt;This is another sentence on a new line.&lt;/p&gt;
            </pre>
        </section>

        <section>
            <h2>The &lt;hr&gt; Tag</h2>
            <p>The &lt;hr&gt; tag creates a horizontal line to separate sections of content.</p>
            <pre class="code-example">
&lt;h1&gt;Heading&lt;/h1&gt;
&lt;hr&gt;
&lt;p&gt;This is a paragraph after the horizontal line.&lt;/p&gt;
            </pre>
        </section>

        <section>
            <h2>Aligning Paragraphs</h2>
            <p>Use CSS instead of the deprecated align attribute for better styling.</p>
            <pre class="code-example">
&lt;p style="text-align:center;"&gt;This paragraph is centered.&lt;/p&gt;
            </pre>
        </section>

        <section>
            <h2>The &lt;pre&gt; Tag</h2>
            <p>The &lt;pre&gt; tag preserves whitespace and line breaks.</p>
            <pre class="code-example">
&lt;pre&gt;
This text is formatted exactly as it appears.
    Indentation and spacing are preserved.
&lt;/pre&gt;
            </pre>
        </section>

        <section class="faq-section">
            <h2>FAQs on HTML Paragraphs</h2>
            <h3>What is an HTML paragraph?</h3>
            <p>An HTML paragraph is defined using the &lt;p&gt; tag and is used to structure text content into separate blocks.</p>
            
            <h3>How to create a new line within a paragraph?</h3>
            <p>Use the &lt;br&gt; tag to insert a line break within a paragraph.</p>
            
            <h3>Can paragraphs contain other HTML elements?</h3>
            <p>Yes, paragraphs can contain inline elements such as &lt;a&gt;, &lt;strong&gt;, and &lt;em&gt;.</p>
        </section>
    </main>
        `,
    prev: "Page-6",
    next: "Page-8",
  },
  "Page-8": {
    title: "Page-8",
    content: `
            <main class="container">
        <h1>HTML Style Tag</h1>
        <section>
            <h2>What is the HTML &lt;style&gt; Tag?</h2>
            <p>The HTML &lt;style&gt; tag defines CSS for document styling. It is placed inside the &lt;head&gt; section of the document.</p>
        </section>

        <section>
            <h2>Syntax</h2>
            <pre class="code-example">
&lt;style&gt;
    .divtag {
        color: blue;
    }
&lt;/style&gt;
            </pre>
        </section>

        <section>
            <h2>Attributes of the &lt;style&gt; Tag</h2>
            <table>
                <tr>
                    <th>Attribute</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><strong>media</strong></td>
                    <td>Specifies for what media/device the media resource is optimized.</td>
                </tr>
                <tr>
                    <td><strong>type</strong></td>
                    <td>Defines the media type of the &lt;style&gt; tag.</td>
                </tr>
            </table>
        </section>

        <section>
            <h2>Example: Styling Elements</h2>
            <pre class="code-example">
&lt;style&gt;
    p {
        color: red;
        font-size: 18px;
    }
    h2 {
        color: green;
    }
&lt;/style&gt;
            </pre>
        </section>

        <section>
            <h2>Example: Advanced Styling</h2>
            <pre class="code-example">
&lt;style&gt;
    body {
        background-color: #616a6b;
    }
    h1 {
        font-family: commanders;
        background-color: yellow;
    }
    h2 {
        font-family: algerian;
        background-color: cyan;
    }
    #first {
        font-family: Castellar;
        background-color: green;
        color: blue;
    }
    .second {
        text-align: right;
        background-color: white;
        font-size: 30px;
        color: red;
    }
&lt;/style&gt;
            </pre>
        </section>

        <section class="faq-section">
            <h2>HTML Style Tag - FAQs</h2>
            <h3>Can I use multiple &lt;style&gt; tags in a single HTML document?</h3>
            <p>Yes, but it's better to group all internal styles within a single &lt;style&gt; tag for better organization and performance.</p>
            
            <h3>How do I target specific elements using the &lt;style&gt; tag?</h3>
            <p>You can use selectors such as element selectors, class selectors, and ID selectors.</p>
            
            <h3>Is the &lt;style&gt; tag better than an external CSS file?</h3>
            <p>For small projects, the &lt;style&gt; tag works well, but for larger projects, external CSS files are preferred for better maintainability and performance.</p>
            
            <h3>Can the &lt;style&gt; tag be placed in the &lt;body&gt; section?</h3>
            <p>It is technically allowed but not recommended. The &lt;style&gt; tag should be placed in the &lt;head&gt; section.</p>
        </section>
    </main>
        `,
    prev: "Page-7",
    next: null,
  },
};

// Current page tracker
let currentPage = "Page-1";

// Function to load content
function loadContent(pageId) {
    const page = courseContent[pageId];
    if (!page) return;

    // Update content
    document.getElementById('main-content').innerHTML = page.content;
    document.title = `CODECRAFT - ${page.title}`;

    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    if (page.prev) {
        prevBtn.style.display = 'block';
        prevBtn.onclick = () => navigateToPage(page.prev);
    } else {
        prevBtn.style.display = 'none';
    }

    if (page.next) {
        nextBtn.style.display = 'block';
        nextBtn.onclick = () => navigateToPage(page.next);
        finishBtn.style.display = 'none';  // Hide Finish button on other pages
    } else {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'block';  // Show Finish button on last page
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

document.getElementById('finishBtn').addEventListener('click', () => {
    alert('🎉 Congratulations! You have completed the course.');
    window.location.href = 'your-completion-page.html';  // Redirect if needed
});
