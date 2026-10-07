/* ==========================================
   📚 LET'S IMPROVE ENGLISH
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   CATEGORY INFORMATION
========================================== */

const categories = {

    1: {
        title: "1. Simple Sentences",
        message:
            "Simple sentences with no action — Present, Past and Future."
    },

    2: {
        title: "2. Tenses",
        message:
            "Learn Present, Past and Future tenses through practical sentences."
    },

    3: {
        title: "3. Synonyms & Antonyms",
        message:
            "Improve your vocabulary with synonyms and antonyms."
    },

    4: {
        title: "4. Sentence Patterns",
        message:
            "Learn useful sentence structures and how English sentences are built."
    },

    5: {
        title: "5. Daily-Use Sentences",
        message:
            "Learn English sentences used in everyday life."
    },

    6: {
        title: "6. Simple Modals",
        message:
            "Learn can, could, may, might, must, should, will and other useful modals."
    },

    7: {
        title: "7. Pronunciation Practice",
        message:
            "Listen, speak and improve your English pronunciation."
    }

};


/* ==========================================
   OPEN CATEGORY
========================================== */

function openCategory(categoryNumber) {

    const category = categories[categoryNumber];

    if (!category) {
        return;
    }


    /* Hide main menu */

    const mainMenu = document.querySelector(".main-menu");

    mainMenu.style.display = "none";


    /* Show category screen */

    const categoryScreen =
        document.getElementById("category-screen");

    categoryScreen.style.display = "block";


    /* Add category information */

    document.getElementById("category-title").textContent =
        category.title;

    document.getElementById("category-message").textContent =
        category.message;


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   GO BACK TO HOME
========================================== */

function goHome() {

    const categoryScreen =
        document.getElementById("category-screen");

    categoryScreen.style.display = "none";


    const mainMenu =
        document.querySelector(".main-menu");

    mainMenu.style.display = "block";


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   APP START
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("LET'S IMPROVE ENGLISH loaded successfully.");

});
