// Content structure
const courseContent = {
  "Page-1": {
    title: "Page-1",
    content: `
            <section>
                <h1>Page 1</h1>
            </section>
        `,
    prev: null,
    next: "Page-2",
  },

  "Page-2": {
    title: "Page-2",
    content: `
            <section>
                <h1>Page 2</h1>
            </section>

        `,
    prev: "Page-1",
    next: "Page-3",
  },

  "Page-3": {
    title: "Page-3",
    content: `
            <section>
                <h1>Page 3</h1>
            </section>
        `,
    prev: "Page-2",
    next: "Page-4",
  },
  "Page-4": {
    title: "Page-4",
    content: `
            <section>
                <h1>Page 4</h1>
            </section>
        `,
    prev: "Page-3",
    next: "Page-5",
  },
  "Page-5": {
    title: "Page-5",
    content: `
            <section>
                <h1>Page 5</h1>
            </section>
        `,
    prev: "Page-4",
    next: "Page-6",
  },
  "Page-6": {
    title: "Page-6",
    content: `
            <section>
                <h1>Page 6</h1>
            </section>
        `,
    prev: "Page-5",
    next: "Page-7",
  },
  "Page-7": {
    title: "Page-7",
    content: `
            <section>
                <h1>Page 7</h1>
            </section>
        `,
    prev: "Page-6",
    next: "Page-8",
  },
  "Page-8": {
    title: "Page-8",
    content: `
            <section>
                <h1>Page 8</h1>
            </section>
        `,
    prev: "Page-7",
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
