// Content structure
const courseContent = {
  "Page-1": {
    title: "Page-1",
    content: `
              <main class="container">
        <h1>History of C++</h1>
        <section>
            <h2>Introduction to C++</h2>
            <p>C++ is an object-oriented programming language that combines features of both low-level and high-level languages. It was developed by Bjarne Stroustrup at Bell Labs in the late 1970s.</p>
        </section>

        <section>
            <h2>Evolution of C++</h2>
            <ul>
                <li>1979: Bjarne Stroustrup started working on "C with Classes"</li>
                <li>1983: Renamed to C++, inspired by the "++" increment operator</li>
                <li>1985: First edition of "The C++ Programming Language" was published</li>
                <li>1998: C++98 became the first standard version</li>
                <li>2003: C++03 was released with minor bug fixes and improvements</li>
                <li>2011: C++11 introduced major features such as auto keyword, lambda expressions, and smart pointers</li>
                <li>2014: C++14 provided minor updates and bug fixes</li>
                <li>2017: C++17 introduced structured bindings and constexpr if</li>
                <li>2020: C++20 extended support for concepts, ranges, and coroutines</li>
                <li>Future: C++23 will introduce further improvements</li>
            </ul>
        </section>

        <section>
            <h2>Major Features of C++</h2>
            <ul>
                <li>Object-Oriented Programming</li>
                <li>Standard Template Library (STL)</li>
                <li>Operator Overloading</li>
                <li>Multiple Inheritance</li>
                <li>Encapsulation and Polymorphism</li>
            </ul>
        </section>

        <section class="faq-section">
            <h2>History of C++ - FAQs</h2>
            <h3>Who developed C++?</h3>
            <p>C++ was developed by Bjarne Stroustrup at Bell Labs.</p>
            
            <h3>When was C++ first introduced?</h3>
            <p>C++ was initially introduced as "C with Classes" in 1979 and renamed to C++ in 1983.</p>
            
            <h3>What are the major versions of C++?</h3>
            <p>Some major versions include C++98, C++03, C++11, C++14, C++17, C++20, and the upcoming C++23.</p>
            
            <h3>Why is C++ still popular?</h3>
            <p>C++ remains popular due to its high performance, flexibility, and widespread use in competitive programming and system-level applications.</p>
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
        <h1>Setting up C++ Development Environment</h1>
        <section>
            <h2>Using Online IDE</h2>
            <p>IDE stands for Integrated Development Environment. Online IDEs provide a platform to compile and run programs without setting up a local environment.</p>
            <p>One such IDE is <a href="https://ide.geeksforgeeks.org">GeeksforGeeks Online IDE</a>.</p>
            <pre class="code-example">
#include &lt;iostream&gt;
using namespace std;
 
int main()
{
    cout << "Learning C++ at GeeksforGeeks";
    return 0;
}
            </pre>
        </section>

        <section>
            <h2>Setting up a Local Environment</h2>
            <h3>1. Installing C++ Compiler</h3>
            <p>To install the GNU GCC compiler on Linux, use the following commands:</p>
            <pre class="code-example">
sudo apt-get update
sudo apt-get install gcc g++
            </pre>
            <p>To verify the installation, run:</p>
            <pre class="code-example">
g++ --version
            </pre>
        </section>

        <section>
            <h3>2. Text Editors and IDEs</h3>
            <h4>Installing Code::Blocks</h4>
            <ul>
                <li>Download Code::Blocks from the official website.</li>
                <li>Install and create a new project.</li>
                <li>Write and save the C++ program with a <code>.cpp</code> extension.</li>
            </ul>

            <h4>Installing VS Code on Windows</h4>
            <ul>
                <li>Download and install Visual Studio Code.</li>
                <li>Install the necessary extensions (C/C++, Code Runner).</li>
                <li>Set up MinGW and add its path to environment variables.</li>
            </ul>
        </section>

        <section>
            <h3>Installing VS Code on Mac OS</h3>
            <ul>
                <li>Install Visual Studio Code.</li>
                <li>Install Homebrew using the command:
                    <pre class="code-example">
arch -x86_64 ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install)" < /dev/null 2> /dev/null
                    </pre>
                </li>
                <li>Install MinGW with:
                    <pre class="code-example">
arch -x86_64 brew install MinGW-w64
                    </pre>
                </li>
            </ul>
        </section>

        <section class="faq-section">
            <h2>FAQs on Setting up C++ Environment</h2>
            <h3>Can I use C++ without installing an IDE?</h3>
            <p>Yes, you can use an online IDE like GeeksforGeeks IDE to write and run C++ programs.</p>
            
            <h3>What is the best IDE for C++ beginners?</h3>
            <p>Popular IDEs for beginners include Code::Blocks, Visual Studio Code, and Xcode (for Mac users).</p>
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
        <h1>C++ Basic Syntax</h1>
        <section>
            <h2>Introduction</h2>
            <p>Syntax refers to the rules for writing statements in a programming language. C++ follows specific syntax rules that define how programs should be written and executed.</p>
        </section>

        <section>
            <h2>Basic Syntax of a C++ Program</h2>
            <pre class="code-example">
// C++ program to demonstrate the basic syntax
#include &lt;iostream&gt;
using namespace std;

int main() {
    int num1 = 24;
    int num2 = 34;
    int result = num1 + num2;
    cout << result << endl;
    return 0;
}
            </pre>
            <p><strong>Output:</strong> 58</p>
        </section>

        <section>
            <h2>Key Components of C++ Syntax</h2>
            <ul>
                <li><strong>Header File:</strong> The <code>#include &lt;iostream&gt;</code> imports input-output functions.</li>
                <li><strong>Namespace:</strong> <code>using namespace std;</code> defines the standard scope.</li>
                <li><strong>Main Function:</strong> <code>int main()</code> is the entry point of the program.</li>
                <li><strong>Blocks:</strong> Code enclosed within curly braces <code>{ }</code>.</li>
                <li><strong>Semicolons:</strong> Used to terminate each statement.</li>
                <li><strong>Identifiers:</strong> Names used for variables, functions, etc.</li>
                <li><strong>Keywords:</strong> Reserved words like <code>int</code>, <code>return</code>.</li>
            </ul>
        </section>

        <section>
            <h2>Object-Oriented Programming in C++</h2>
            <pre class="code-example">
#include &lt;iostream&gt;
using namespace std;

class Calculate {
public:
    int num1 = 50;
    int num2 = 30;
    void addition() {
        int result = num1 + num2;
        cout << result << endl;
    }
};

int main() {
    Calculate add;
    add.addition();
    return 0;
}
            </pre>
            <p><strong>Output:</strong> 80</p>
        </section>

        <section class="faq-section">
            <h2>FAQs on C++ Basic Syntax</h2>
            <h3>What is the role of the main function in C++?</h3>
            <p>The <code>main()</code> function is the entry point of every C++ program.</p>
            
            <h3>What is the purpose of namespaces in C++?</h3>
            <p>Namespaces help avoid name conflicts and allow better organization of code.</p>
            
            <h3>Why is <code>#include &lt;iostream&gt;</code> necessary?</h3>
            <p>It includes the standard input/output functions like <code>cin</code> and <code>cout</code>.</p>
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
        <h1>C++ Data Types</h1>
        <section>
            <h2>Introduction</h2>
            <p>Data types specify the type of data a variable can store. The C++ compiler allocates memory for variables based on their data type.</p>
        </section>

        <section>
            <h2>Basic Syntax Example</h2>
            <pre class="code-example">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int var = 10;
    cout << var;
    return 0;
}
            </pre>
            <p><strong>Output:</strong> 10</p>
        </section>

        <section>
            <h2>Types of Data Types in C++</h2>
            <table>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td>Basic Data Types</td>
                    <td>Built-in types for storing simple values</td>
                    <td>int, float, double, char, bool, void</td>
                </tr>
                <tr>
                    <td>Derived Data Types</td>
                    <td>Derived from basic types</td>
                    <td>array, pointer, reference, function</td>
                </tr>
                <tr>
                    <td>User Defined Data Types</td>
                    <td>Custom types created by the programmer</td>
                    <td>class, struct, union, typedef, using</td>
                </tr>
            </table>
        </section>

        <section>
            <h2>Primitive Data Types Examples</h2>
            <h3>Character Data Type</h3>
            <pre class="code-example">
char c = 'A';
cout << c;
            </pre>
            <p><strong>Output:</strong> A</p>

            <h3>Integer Data Type</h3>
            <pre class="code-example">
int x = 25;
cout << x << endl;
            </pre>
            <p><strong>Output:</strong> 25</p>
        </section>

        <section>
            <h2>Size of Data Types</h2>
            <pre class="code-example">
cout << "Size of int: " << sizeof(int) << " bytes" << endl;
cout << "Size of char: " << sizeof(char) << " byte" << endl;
cout << "Size of float: " << sizeof(float) << " bytes" << endl;
cout << "Size of double: " << sizeof(double) << " bytes";
            </pre>
            <p><strong>Output:</strong></p>
            <ul>
                <li>Size of int: 4 bytes</li>
                <li>Size of char: 1 byte</li>
                <li>Size of float: 4 bytes</li>
                <li>Size of double: 8 bytes</li>
            </ul>
        </section>

        <section class="faq-section">
            <h2>FAQs on C++ Data Types</h2>
            <h3>Is the size of data types different on different machines?</h3>
            <p>Yes, the size can vary based on system architecture (32-bit vs. 64-bit), but remains the same on systems with identical architecture.</p>
            
            <h3>Can we convert one data type to another?</h3>
            <p>Yes, C++ allows type casting to convert values from one data type to another.</p>
            
            <h3>Why do we need int if we can use float?</h3>
            <p>int is more efficient for whole numbers as it avoids rounding errors and supports faster operations.</p>
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
        <h1>Operators in C++</h1>
        <section>
            <h2>Introduction</h2>
            <p>In C++, an operator is a symbol that operates on a value to perform specific mathematical or logical
                computations. Operators are classified into different categories based on the type of operation they
                perform.</p>
        </section>

        <section>
            <h2>Basic Syntax Example</h2>
            <pre class="code-example">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 10 + 20;
    cout << a;
    return 0;
}
            </pre>
            <p><strong>Output:</strong> 30</p>
        </section>

        <section>
            <h2>Types of Operators in C++</h2>
            <ul>
                <li>Arithmetic Operators</li>
                <li>Relational Operators</li>
                <li>Logical Operators</li>
                <li>Bitwise Operators</li>
                <li>Assignment Operators</li>
                <li>Ternary or Conditional Operators</li>
            </ul>
        </section>

        <section>
            <h2>Arithmetic Operators</h2>
            <p>Arithmetic operators perform mathematical operations like addition, subtraction, etc.</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Addition</td>
                    <td>+</td>
                    <td>Adds two operands</td>
                </tr>
                <tr>
                    <td>Subtraction</td>
                    <td>-</td>
                    <td>Subtracts second operand from the first</td>
                </tr>
                <tr>
                    <td>Multiplication</td>
                    <td>*</td>
                    <td>Multiplies two operands</td>
                </tr>
                <tr>
                    <td>Division</td>
                    <td>/</td>
                    <td>Divides first operand by second</td>
                </tr>
                <tr>
                    <td>Modulo</td>
                    <td>%</td>
                    <td>Returns remainder of division</td>
                </tr>
            </table>
        </section>

        <section>
            <h2>Example of Arithmetic Operators</h2>
            <pre class="code-example">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 8, b = 3;
    cout << "a + b = " << (a + b) << endl;
    cout << "a - b = " << (a - b) << endl;
    cout << "a * b = " << (a * b) << endl;
    cout << "a / b = " << (a / b) << endl;
    cout << "a % b = " << (a % b) << endl;
    return 0;
}
            </pre>
        </section>

        <section>
            <h2>Relational Operators</h2>
            <p>Used to compare values of two operands.</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Equal To</td>
                    <td>==</td>
                    <td>Checks if both operands are equal</td>
                </tr>
                <tr>
                    <td>Greater Than</td>
                    <td>></td>
                    <td>Checks if first operand is greater</td>
                </tr>
                <tr>
                    <td>Less Than</td>
                    <td>
                        << /td>
                    <td>Checks if first operand is lesser</td>
                </tr>
                <tr>
                    <td>Not Equal</td>
                    <td>!=</td>
                    <td>Checks if both operands are not equal</td>
                </tr>
            </table>
        </section>

        <section class="faq-section">
            <h2>FAQs on C++ Operators</h2>
            <h3>What are operators in C++?</h3>
            <p>Operators are symbols that perform specific computations on values.</p>

            <h3>What are the different types of operators in C++?</h3>
            <p>Arithmetic, Relational, Logical, Bitwise, Assignment, and Ternary operators.</p>

            <h3>What is the difference between == and = in C++?</h3>
            <p><code>==</code> is used for comparison, while <code>=</code> is used for assignment.</p>
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
