
// ======================================================
// 📚 LET'S IMPROVE ENGLISH
// COMPLETE OFFLINE SCRIPT
// ======================================================


// ======================================================
// GLOBAL ELEMENTS
// ======================================================

const menuScreen = document.getElementById("menu-screen");
const categoryScreen = document.getElementById("category-screen");


// ======================================================
// OPEN CATEGORY
// ======================================================

function openCategory(categoryNumber) {

    menuScreen.style.display = "none";
    categoryScreen.style.display = "block";

    if (categoryNumber === 1) {
        categoryScreen.innerHTML = buildCategory1();
    }

    else if (categoryNumber === 2) {
        categoryScreen.innerHTML = buildCategory2();
    }

    else if (categoryNumber === 3) {
        categoryScreen.innerHTML = `
            <div class="lesson">
                <h2>📘 Synonyms & Antonyms</h2>
                <p class="lesson-intro">
                    This lesson will be added soon.
                </p>
                <button class="lesson-back" onclick="backToCategories()">
                    ← BACK TO CATEGORIES
                </button>
            </div>
        `;
    }

    else if (categoryNumber === 4) {
        categoryScreen.innerHTML = `
            <div class="lesson">
                <h2>📘 Sentence Patterns</h2>
                <p class="lesson-intro">
                    This lesson will be added soon.
                </p>
                <button class="lesson-back" onclick="backToCategories()">
                    ← BACK TO CATEGORIES
                </button>
            </div>
        `;
    }

    else if (categoryNumber === 5) {
        categoryScreen.innerHTML = `
            <div class="lesson">
                <h2>📘 Daily-Use Sentences</h2>
                <p class="lesson-intro">
                    This lesson will be added soon.
                </p>
                <button class="lesson-back" onclick="backToCategories()">
                    ← BACK TO CATEGORIES
                </button>
            </div>
        `;
    }

    else if (categoryNumber === 6) {
        categoryScreen.innerHTML = `
            <div class="lesson">
                <h2>📘 Simple Modals</h2>
                <p class="lesson-intro">
                    This lesson will be added soon.
                </p>
                <button class="lesson-back" onclick="backToCategories()">
                    ← BACK TO CATEGORIES
                </button>
            </div>
        `;
    }

    else if (categoryNumber === 7) {
        categoryScreen.innerHTML = `
            <div class="lesson">
                <h2>📘 Pronunciation Practice</h2>
                <p class="lesson-intro">
                    This lesson will be added soon.
                </p>
                <button class="lesson-back" onclick="backToCategories()">
                    ← BACK TO CATEGORIES
                </button>
            </div>
        `;
    }

    setupLessonButtons();
}


// ======================================================
// BACK TO CATEGORIES
// ======================================================

function backToCategories() {

    categoryScreen.style.display = "none";
    menuScreen.style.display = "block";

    window.scrollTo(0, 0);
}


// ======================================================
// LISTEN
// ======================================================

function speakText(text) {

    if (!("speechSynthesis" in window)) {
        alert("Speech is not supported on this device.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.85;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


// ======================================================
// LESSON BUTTONS
// ======================================================

function setupLessonButtons() {

    const buttons = document.querySelectorAll(".listen-btn");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const text = this.dataset.text;

            if (text) {
                speakText(text);
            }

        });

    });

}


// ======================================================
// EXAMPLE BOX
// ======================================================

function exampleBox(english, sindhi, urdu) {

    return `
        <div class="example">

            <div class="english">
                🇬🇧 ${english}
            </div>

            <div class="sindhi">
                سنڌي: ${sindhi}
            </div>

            <div class="urdu">
                اردو: ${urdu}
            </div>

            <button
                class="listen-btn"
                data-text="${english}">
                🔊 Listen
            </button>

        </div>
    `;
}


// ======================================================
// PRACTICE DATA — CATEGORY 1
// SIMPLE SENTENCES / NO ACTION
// ======================================================

const simplePractice = [

    {
        sindhi: "مان خوش آهيان.",
        correct: "I am happy.",
        options: [
            "I am happy.",
            "I happy am.",
            "I happy."
        ]
    },

    {
        sindhi: "هو استاد آهي.",
        correct: "He is a teacher.",
        options: [
            "He teacher is.",
            "He is a teacher.",
            "He a teacher."
        ]
    },

    {
        sindhi: "هوءَ بيمار آهي.",
        correct: "She is sick.",
        options: [
            "She sick is.",
            "She is sick.",
            "She sick."
        ]
    },

    {
        sindhi: "اهي تيار آهن.",
        correct: "They are ready.",
        options: [
            "They ready are.",
            "They are ready.",
            "They ready."
        ]
    },

    {
        sindhi: "مان ٿڪل آهيان.",
        correct: "I am tired.",
        options: [
            "I tired am.",
            "I am tired.",
            "I tired."
        ]
    },

    {
        sindhi: "هو بکيو آهي.",
        correct: "He is hungry.",
        options: [
            "He hungry is.",
            "He is hungry.",
            "He hungry."
        ]
    },

    {
        sindhi: "مان خوش هئس.",
        correct: "I was happy.",
        options: [
            "I was happy.",
            "I happy was.",
            "I was happy am."
        ]
    },

    {
        sindhi: "هوءَ استاد هئي.",
        correct: "She was a teacher.",
        options: [
            "She teacher was.",
            "She was a teacher.",
            "She a teacher."
        ]
    },

    {
        sindhi: "مان خوش هوندس.",
        correct: "I will be happy.",
        options: [
            "I happy will be.",
            "I will be happy.",
            "I will happy."
        ]
    },

    {
        sindhi: "مان خوش نه آهيان.",
        correct: "I am not happy.",
        options: [
            "I not am happy.",
            "I am not happy.",
            "I am happy not."
        ]
    },

    {
        sindhi: "ڇا تون خوش آهين؟",
        correct: "Are you happy?",
        options: [
            "You are happy?",
            "Are you happy?",
            "Happy are you?"
        ]
    },

    {
        sindhi: "مون وٽ ڪتاب آهي.",
        correct: "I have a book.",
        options: [
            "I have a book.",
            "I a book have.",
            "I book have."
        ]
    },

    {
        sindhi: "هن وٽ ڪار آهي.",
        correct: "She has a car.",
        options: [
            "She a car has.",
            "She has a car.",
            "She car has."
        ]
    },

    {
        sindhi: "ميز تي هڪ ڪتاب آهي.",
        correct: "There is a book on the table.",
        options: [
            "There a book is on the table.",
            "There is a book on the table.",
            "There book is a on the table."
        ]
    },

    {
        sindhi: "ٿڌ آهي.",
        correct: "It is cold.",
        options: [
            "It cold is.",
            "It is cold.",
            "It cold."
        ]
    }

];


// ======================================================
// PRACTICE DATA — CATEGORY 2
// TENSES
// ======================================================

const tensePractice = [

    {
        sindhi: "مان ڪرڪيٽ کيڏان ٿو.",
        correct: "I play cricket.",
        options: [
            "I play cricket.",
            "I cricket play.",
            "I playing cricket."
        ]
    },

    {
        sindhi: "مان ڪرڪيٽ نه کيڏان ٿو.",
        correct: "I do not play cricket.",
        options: [
            "I do not play cricket.",
            "I not play cricket.",
            "I do not playing cricket."
        ]
    },

    {
        sindhi: "ڇا مان ڪرڪيٽ کيڏان ٿو؟",
        correct: "Do I play cricket?",
        options: [
            "Do I play cricket?",
            "I do play cricket?",
            "Play I do cricket?"
        ]
    },

    {
        sindhi: "مون ڪرڪيٽ کيڏي.",
        correct: "I played cricket.",
        options: [
            "I play cricket.",
            "I played cricket.",
            "I playing cricket."
        ]
    },

    {
        sindhi: "مون ڪرڪيٽ نه کيڏي.",
        correct: "I did not play cricket.",
        options: [
            "I did not play cricket.",
            "I did not played cricket.",
            "I not played cricket."
        ]
    },

    {
        sindhi: "ڇا مون ڪرڪيٽ کيڏي؟",
        correct: "Did I play cricket?",
        options: [
            "Did I play cricket?",
            "Did I played cricket?",
            "I did play cricket?"
        ]
    },

    {
        sindhi: "مان ڪرڪيٽ کيڏندس.",
        correct: "I will play cricket.",
        options: [
            "I will play cricket.",
            "I will played cricket.",
            "I play will cricket."
        ]
    },

    {
        sindhi: "مان ڪرڪيٽ نه کيڏندس.",
        correct: "I will not play cricket.",
        options: [
            "I will not play cricket.",
            "I not will play cricket.",
            "I will not played cricket."
        ]
    },

    {
        sindhi: "ڇا مان ڪرڪيٽ کيڏندس؟",
        correct: "Will I play cricket?",
        options: [
            "Will I play cricket?",
            "Will I played cricket?",
            "I will play cricket?"
        ]
    },

    {
        sindhi: "مان ڪرڪيٽ کيڏي رهيو آهيان.",
        correct: "I am playing cricket.",
        options: [
            "I am playing cricket.",
            "I playing am cricket.",
            "I am play cricket."
        ]
    },

    {
        sindhi: "مان ڪرڪيٽ نه کيڏي رهيو آهيان.",
        correct: "I am not playing cricket.",
        options: [
            "I am not playing cricket.",
            "I not am playing cricket.",
            "I am not play cricket."
        ]
    },

    {
        sindhi: "ڇا مان ڪرڪيٽ کيڏي رهيو آهيان؟",
        correct: "Am I playing cricket?",
        options: [
            "Am I playing cricket?",
            "Am I play cricket?",
            "I am playing cricket?"
        ]
    },

    {
        sindhi: "مان ڪرڪيٽ کيڏي رهيو هئس.",
        correct: "I was playing cricket.",
        options: [
            "I was playing cricket.",
            "I playing was cricket.",
            "I was play cricket."
        ]
    },

    {
        sindhi: "مان ڪرڪيٽ کيڏي رهيو هوندس.",
        correct: "I will be playing cricket.",
        options: [
            "I will be playing cricket.",
            "I will playing be cricket.",
            "I will be play cricket."
        ]
    },

    {
        sindhi: "مان هن وقت ڪرڪيٽ کيڏي رهيو آهيان.",
        correct: "I am playing cricket now.",
        options: [
            "I am playing cricket now.",
            "I playing cricket am now.",
            "I am play cricket now."
        ]
    }

];


// ======================================================
// BUILD PRACTICE AREA
// ======================================================

function buildPracticeArea(title, questions, prefix) {

    let html = `

        <div class="lesson-card">

            <div id="${prefix}-practice-area">

                <h3>🧠 ${title}</h3>

                <p>
                    هيٺ ڏنل سنڌي جملي لاءِ صحيح انگريزي جملو چونڊيو:
                </p>
    `;

    questions.forEach((question, index) => {

        html += `

            <div class="practice-question">

                <p>
                    ${index + 1}. ${question.sindhi}
                </p>

                <button
                    class="practice-option"
                    onclick="practiceAnswer(this, true, '${prefix}-${index}')">
                    ${question.options[0]}
                </button>

                <button
                    class="practice-option"
                    onclick="practiceAnswer(this, false, '${prefix}-${index}')">
                    ${question.options[1]}
                </button>

                <button
                    class="practice-option"
                    onclick="practiceAnswer(this, false, '${prefix}-${index}')">
                    ${question.options[2]}
                </button>

                <div
                    id="${prefix}-feedback-${index}"
                    class="practice-feedback">
                </div>

            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    return html;
}


// ======================================================
// CATEGORY 1
// SIMPLE SENTENCES — NO ACTION
// ======================================================

function buildCategory1() {

    return `

        <div class="lesson">

            <h2>
                1. Simple Sentences — No Action
            </h2>

            <p class="lesson-intro">
                🌱 No Action — Just State, Condition or Situation
            </p>

            <p>
                A simple sentence can tell us what someone or
                something is, was, will be, has, or what exists.
            </p>


            <!-- =========================================
                 PATTERN 1 — BE
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 1 — BE</h3>

                <div class="pattern">
                    Subject + is / am / are + Complement
                </div>

                <h4>Present</h4>

                ${exampleBox(
                    "I am happy.",
                    "مان خوش آهيان.",
                    "میں خوش ہوں۔"
                )}

                ${exampleBox(
                    "She is a teacher.",
                    "هوءَ استاد آهي.",
                    "وہ استاد ہے۔"
                )}

                ${exampleBox(
                    "They are ready.",
                    "اهي تيار آهن.",
                    "وہ تیار ہیں۔"
                )}


                <h4>Past</h4>

                ${exampleBox(
                    "I was happy.",
                    "مان خوش هئس.",
                    "میں خوش تھا۔"
                )}

                ${exampleBox(
                    "She was a teacher.",
                    "هوءَ استاد هئي.",
                    "وہ استاد تھی۔"
                )}


                <h4>Future</h4>

                ${exampleBox(
                    "I will be happy.",
                    "مان خوش هوندس.",
                    "میں خوش ہوں گا۔"
                )}

                ${exampleBox(
                    "She will be a teacher.",
                    "هوءَ استاد ٿيندي.",
                    "وہ استاد بنے گی۔"
                )}


                <h4>Negative</h4>

                ${exampleBox(
                    "I am not happy.",
                    "مان خوش نه آهيان.",
                    "میں خوش نہیں ہوں۔"
                )}


                <h4>Interrogative</h4>

                ${exampleBox(
                    "Are you happy?",
                    "ڇا تون خوش آهين؟",
                    "کیا تم خوش ہو؟"
                )}

            </div>


            <!-- =========================================
                 PATTERN 2 — HAVE
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 2 — HAVE</h3>

                <div class="pattern">
                    Subject + have / has + Object
                </div>

                ${exampleBox(
                    "I have a book.",
                    "مون وٽ ڪتاب آهي.",
                    "میرے پاس ایک کتاب ہے۔"
                )}

                ${exampleBox(
                    "She has a car.",
                    "هن وٽ ڪار آهي.",
                    "اس کے پاس گاڑی ہے۔"
                )}

                ${exampleBox(
                    "They have a house.",
                    "انهن وٽ گهر آهي.",
                    "ان کے پاس گھر ہے۔"
                )}

            </div>


            <!-- =========================================
                 PATTERN 3 — THERE
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 3 — THERE</h3>

                <div class="pattern">
                    There + is / are + something
                </div>

                ${exampleBox(
                    "There is a book on the table.",
                    "ميز تي هڪ ڪتاب آهي.",
                    "میز پر ایک کتاب ہے۔"
                )}

                ${exampleBox(
                    "There are two boys outside.",
                    "ٻاهر ٻه ڇوڪرا آهن.",
                    "باہر دو لڑکے ہیں۔"
                )}

            </div>


            <!-- =========================================
                 PATTERN 4 — IT
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 4 — IT</h3>

                <div class="pattern">
                    It + is / was + Complement
                </div>

                ${exampleBox(
                    "It is cold.",
                    "ٿڌ آهي.",
                    "سردی ہے۔"
                )}

                ${exampleBox(
                    "It is hot.",
                    "گرمي آهي.",
                    "گرمی ہے۔"
                )}

                ${exampleBox(
                    "It was easy.",
                    "اهو آسان هو.",
                    "یہ آسان تھا۔"
                )}

            </div>


            <!-- =========================================
                 STATE / CONDITION
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 State / Condition</h3>

                ${exampleBox(
                    "I am tired.",
                    "مان ٿڪل آهيان.",
                    "میں تھکا ہوا ہوں۔"
                )}

                ${exampleBox(
                    "She is sick.",
                    "هوءَ بيمار آهي.",
                    "وہ بیمار ہے۔"
                )}

                ${exampleBox(
                    "He is hungry.",
                    "هو بکيو آهي.",
                    "وہ بھوکا ہے۔"
                )}

            </div>


            <!-- =========================================
                 STATE / SITUATION
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 State / Situation with BE + -ing</h3>

                <div class="pattern">
                    Subject + am / is / are + V-ing
                </div>

                ${exampleBox(
                    "I am feeling tired.",
                    "مان ٿڪ محسوس ڪري رهيو آهيان.",
                    "میں تھکا ہوا محسوس کر رہا ہوں۔"
                )}

                ${exampleBox(
                    "She is feeling sick.",
                    "هوءَ بيمار محسوس ڪري رهي آهي.",
                    "وہ بیمار محسوس کر رہی ہے۔"
                )}

            </div>


            <!-- =========================================
                 IMPORTANT
            ========================================== -->

            <div class="important">

                <h3>⭐ Important</h3>

                <p>
                    Not every sentence describes an action.
                </p>

                <p>
                    Some sentences simply tell us a
                    state, condition, situation, identity,
                    possession or existence.
                </p>

            </div>


            <!-- =========================================
                 15 SINDHI PRACTICE SENTENCES
            ========================================== -->

            ${buildPracticeArea(
                "مشق — صحيح انگريزي جملو سڃاڻو",
                simplePractice,
                "simple"
            )}


            <button
                class="lesson-back"
                onclick="backToCategories()">
                ← BACK TO CATEGORIES
            </button>

        </div>
    `;
}


// ======================================================
// CATEGORY 2
// TENSES
// SIMPLE + CONTINUOUS
// ======================================================

function buildCategory2() {

    return `

        <div class="lesson">

            <h2>
                2. Tenses — Present • Past • Future
            </h2>

            <p class="lesson-intro">
                🌱 Learn the sentence patterns first.
            </p>


            <!-- =================================================
                 PART 1 — SIMPLE TENSES
            ================================================== -->

            <h2>
                📘 PART 1 — SIMPLE TENSES
            </h2>


            <!-- =========================================
                 PRESENT SIMPLE
            ========================================== -->

            <div class="lesson-card">

                <h3>🔵 Present Simple</h3>

                <div class="pattern">
                    Subject + V1 / V1+s/es
                </div>


                <h4>1️⃣ Affirmative</h4>

                ${exampleBox(
                    "I play cricket.",
                    "مان ڪرڪيٽ کيڏان ٿو.",
                    "میں کرکٹ کھیلتا ہوں۔"
                )}


                <h4>2️⃣ Negative</h4>

                ${exampleBox(
                    "I do not play cricket.",
                    "مان ڪرڪيٽ نٿو کيڏان.",
                    "میں کرکٹ نہیں کھیلتا۔"
                )}


                <h4>3️⃣ Interrogative</h4>

                ${exampleBox(
                    "Do I play cricket?",
                    "ڇا مان ڪرڪيٽ کيڏان ٿو؟",
                    "کیا میں کرکٹ کھیلتا ہوں؟"
                )}


                <h4>4️⃣ Negative Interrogative</h4>

                ${exampleBox(
                    "Do I not play cricket?",
                    "ڇا مان ڪرڪيٽ نٿو کيڏان؟",
                    "کیا میں کرکٹ نہیں کھیلتا؟"
                )}

            </div>


            <!-- =========================================
                 PAST SIMPLE
            ========================================== -->

            <div class="lesson-card">

                <h3>🟠 Past Simple</h3>

                <div class="pattern">
                    Subject + V2
                </div>


                <h4>1️⃣ Affirmative</h4>

                ${exampleBox(
                    "I played cricket.",
                    "مون ڪرڪيٽ کيڏي.",
                    "میں نے کرکٹ کھیلی۔"
                )}


                <h4>2️⃣ Negative</h4>

                ${exampleBox(
                    "I did not play cricket.",
                    "مون ڪرڪيٽ نه کيڏي.",
                    "میں نے کرکٹ نہیں کھیلی۔"
                )}


                <h4>3️⃣ Interrogative</h4>

                ${exampleBox(
                    "Did I play cricket?",
                    "ڇا مون ڪرڪيٽ کيڏي؟",
                    "کیا میں نے کرکٹ کھیلی؟"
                )}


                <h4>4️⃣ Negative Interrogative</h4>

                ${exampleBox(
                    "Did I not play cricket?",
                    "ڇا مون ڪرڪيٽ نه کيڏي؟",
                    "کیا میں نے کرکٹ نہیں کھیلی؟"
                )}

            </div>


            <!-- =========================================
                 FUTURE SIMPLE
            ========================================== -->

            <div class="lesson-card">

                <h3>🟢 Future Simple</h3>

                <div class="pattern">
                    Subject + will + V1
                </div>


                <h4>1️⃣ Affirmative</h4>

                ${exampleBox(
                    "I will play cricket.",
                    "مان ڪرڪيٽ کيڏندس.",
                    "میں کرکٹ کھیلوں گا۔"
                )}


                <h4>2️⃣ Negative</h4>

                ${exampleBox(
                    "I will not play cricket.",
                    "مان ڪرڪيٽ نه کيڏندس.",
                    "میں کرکٹ نہیں کھیلوں گا۔"
                )}


                <h4>3️⃣ Interrogative</h4>

                ${exampleBox(
                    "Will I play cricket?",
                    "ڇا مان ڪرڪيٽ کيڏندس؟",
                    "کیا میں کرکٹ کھیلوں گا؟"
                )}


                <h4>4️⃣ Negative Interrogative</h4>

                ${exampleBox(
                    "Will I not play cricket?",
                    "ڇا مان ڪرڪيٽ نه کيڏندس؟",
                    "کیا میں کرکٹ نہیں کھیلوں گا؟"
                )}

            </div>


            <!-- =================================================
                 PART 2 — CONTINUOUS TENSES
            ================================================== -->

            <h2>
                📗 PART 2 — CONTINUOUS TENSES
            </h2>


            <p class="lesson-intro">
                Continuous means an action is in progress.
            </p>


            <!-- =========================================
                 PRESENT CONTINUOUS
            ========================================== -->

            <div class="lesson-card">

                <h3>🔵 Present Continuous</h3>

                <div class="pattern">
                    Subject + am / is / are + V-ing
                </div>


                <h4>1️⃣ Affirmative</h4>

                ${exampleBox(
                    "I am playing cricket.",
                    "مان ڪرڪيٽ کيڏي رهيو آهيان.",
                    "میں کرکٹ کھیل رہا ہوں۔"
                )}


                <h4>2️⃣ Negative</h4>

                ${exampleBox(
                    "I am not playing cricket.",
                    "مان ڪرڪيٽ نه کيڏي رهيو آهيان.",
                    "میں کرکٹ نہیں کھیل رہا ہوں۔"
                )}


                <h4>3️⃣ Interrogative</h4>

                ${exampleBox(
                    "Am I playing cricket?",
                    "ڇا مان ڪرڪيٽ کيڏي رهيو آهيان؟",
                    "کیا میں کرکٹ کھیل رہا ہوں؟"
                )}


                <h4>4️⃣ Negative Interrogative</h4>

                ${exampleBox(
                    "Am I not playing cricket?",
                    "ڇا مان ڪرڪيٽ نه کيڏي رهيو آهيان؟",
                    "کیا میں کرکٹ نہیں کھیل رہا ہوں؟"
                )}

            </div>


            <!-- =========================================
                 PAST CONTINUOUS
            ========================================== -->

            <div class="lesson-card">

                <h3>🟠 Past Continuous</h3>

                <div class="pattern">
                    Subject + was / were + V-ing
                </div>


                <h4>1️⃣ Affirmative</h4>

                ${exampleBox(
                    "I was playing cricket.",
                    "مان ڪرڪيٽ کيڏي رهيو هئس.",
                    "میں کرکٹ کھیل رہا تھا۔"
                )}


                <h4>2️⃣ Negative</h4>

                ${exampleBox(
                    "I was not playing cricket.",
                    "مان ڪرڪيٽ نه کيڏي رهيو هئس.",
                    "میں کرکٹ نہیں کھیل رہا تھا۔"
                )}


                <h4>3️⃣ Interrogative</h4>

                ${exampleBox(
                    "Was I playing cricket?",
                    "ڇا مان ڪرڪيٽ کيڏي رهيو هئس؟",
                    "کیا میں کرکٹ کھیل رہا تھا؟"
                )}


                <h4>4️⃣ Negative Interrogative</h4>

                ${exampleBox(
                    "Was I not playing cricket?",
                    "ڇا مان ڪرڪيٽ نه کيڏي رهيو هئس؟",
                    "کیا میں کرکٹ نہیں کھیل رہا تھا؟"
                )}

            </div>


            <!-- =========================================
                 FUTURE CONTINUOUS
            ========================================== -->

            <div class="lesson-card">

                <h3>🟢 Future Continuous</h3>

                <div class="pattern">
                    Subject + will be + V-ing
                </div>


                <h4>1️⃣ Affirmative</h4>

                ${exampleBox(
                    "I will be playing cricket.",
                    "مان ڪرڪيٽ کيڏي رهيو هوندس.",
                    "میں کرکٹ کھیل رہا ہوں گا۔"
                )}


                <h4>2️⃣ Negative</h4>

                ${exampleBox(
                    "I will not be playing cricket.",
                    "مان ڪرڪيٽ نه کيڏي رهيو هوندس.",
                    "میں کرکٹ نہیں کھیل رہا ہوں گا۔"
                )}


                <h4>3️⃣ Interrogative</h4>

                ${exampleBox(
                    "Will I be playing cricket?",
                    "ڇا مان ڪرڪيٽ کيڏي رهيو هوندس؟",
                    "کیا میں کرکٹ کھیل رہا ہوں گا؟"
                )}


                <h4>4️⃣ Negative Interrogative</h4>

                ${exampleBox(
                    "Will I not be playing cricket?",
                    "ڇا مان ڪرڪيٽ نه کيڏي رهيو هوندس؟",
                    "کیا میں کرکٹ نہیں کھیل رہا ہوں گا؟"
                )}

            </div>


            <!-- =================================================
                 SIMPLE VS CONTINUOUS
            ================================================== -->

            <div class="lesson-card">

                <h3>⭐ Simple vs Continuous</h3>

                ${exampleBox(
                    "I play cricket.",
                    "مان ڪرڪيٽ کيڏان ٿو.",
                    "میں کرکٹ کھیلتا ہوں۔"
                )}

                <p>
                    👉 This tells us about a usual or general action.
                </p>


                ${exampleBox(
                    "I am playing cricket.",
                    "مان هن وقت ڪرڪيٽ کيڏي رهيو آهيان.",
                    "میں اس وقت کرکٹ کھیل رہا ہوں۔"
                )}

                <p>
                    👉 This tells us that the action is in progress.
                </p>

            </div>


            <!-- =================================================
                 FOUR FORMS
            ================================================== -->

            <div class="important">

                <h3>⭐ Remember the Four Forms</h3>

                <p>
                    1️⃣ Affirmative
                </p>

                <p>
                    2️⃣ Negative
                </p>

                <p>
                    3️⃣ Interrogative
                </p>

                <p>
                    4️⃣ Negative Interrogative
                </p>

            </div>


            <!-- =========================================
                 15 SINDHI TENSE PRACTICE SENTENCES
            ========================================== -->

            ${buildPracticeArea(
                "مشق — صحيح انگريزي جملو سڃاڻو",
                tensePractice,
                "tense"
            )}


            <button
                class="lesson-back"
                onclick="backToCategories()">
                ← BACK TO CATEGORIES
            </button>

        </div>
    `;
}


// ======================================================
// PRACTICE ANSWER
// ======================================================

function practiceAnswer(button, correct, questionId) {

    const questionBox = button.closest(".practice-question");

    const feedback =
        document.getElementById(
            questionId.replace(
                "simple-",
                "simple-feedback-"
            ).replace(
                "tense-",
                "tense-feedback-"
            )
        );

    const options =
        questionBox.querySelectorAll(".practice-option");


    options.forEach(option => {
        option.disabled = true;
    });


    if (correct) {

        feedback.innerHTML =
            "✅ صحيح! تمام سٺو.";

    } else {

        feedback.innerHTML =
            "❌ غلط. ٻيهر نمونو ڏسو ۽ ڪوشش ڪريو.";
    }

}


// ======================================================
// START
// ======================================================

window.addEventListener("load", function () {

    if (categoryScreen) {
        categoryScreen.style.display = "none";
    }

    if (menuScreen) {
        menuScreen.style.display = "block";
    }

});
