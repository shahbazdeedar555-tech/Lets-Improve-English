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
        categoryScreen.innerHTML = buildCategory3();
    }

    else if (categoryNumber === 4) {
        categoryScreen.innerHTML = buildCategory4();
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
// 30 QUESTIONS
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
    },

    {
        sindhi: "مان تيار آهيان.",
        correct: "I am ready.",
        options: [
            "I ready am.",
            "I am ready.",
            "I am read."
        ]
    },

    {
        sindhi: "هو منهنجو دوست آهي.",
        correct: "He is my friend.",
        options: [
            "He my friend is.",
            "He is my friend.",
            "He is my friends."
        ]
    },

    {
        sindhi: "هوءَ تمام مهربان آهي.",
        correct: "She is very kind.",
        options: [
            "She very kind is.",
            "She is very kind.",
            "She is very kindly."
        ]
    },

    {
        sindhi: "اسان خوش آهيون.",
        correct: "We are happy.",
        options: [
            "We are happy.",
            "We happy are.",
            "We is happy."
        ]
    },

    {
        sindhi: "اهي گهر ۾ آهن.",
        correct: "They are at home.",
        options: [
            "They at home are.",
            "They is at home.",
            "They are at home."
        ]
    },

    {
        sindhi: "مان اسڪول ۾ هئس.",
        correct: "I was at school.",
        options: [
            "I was at school.",
            "I at school was.",
            "I were at school."
        ]
    },

    {
        sindhi: "هوءَ ڪالهه بيمار هئي.",
        correct: "She was sick yesterday.",
        options: [
            "She sick was yesterday.",
            "She was sick yesterday.",
            "She were sick yesterday."
        ]
    },

    {
        sindhi: "اسان سڀاڻي تيار هونداسين.",
        correct: "We will be ready tomorrow.",
        options: [
            "We will ready be tomorrow.",
            "We will be ready tomorrow.",
            "We are be ready tomorrow."
        ]
    },

    {
        sindhi: "هن وٽ هڪ قلم آهي.",
        correct: "He has a pen.",
        options: [
            "He a pen has.",
            "He have a pen.",
            "He has a pen."
        ]
    },

    {
        sindhi: "اسان وٽ ڪافي وقت آهي.",
        correct: "We have enough time.",
        options: [
            "We enough time have.",
            "We have enough time.",
            "We has enough time."
        ]
    },

    {
        sindhi: "ڪمري ۾ ٽي ڪرسيون آهن.",
        correct: "There are three chairs in the room.",
        options: [
            "There are three chairs in the room.",
            "There is three chairs in the room.",
            "There three chairs are in the room."
        ]
    },

    {
        sindhi: "ميز تي هڪ موبائل فون آهي.",
        correct: "There is a mobile phone on the table.",
        options: [
            "There are a mobile phone on the table.",
            "There is a mobile phone on the table.",
            "There a mobile phone is on the table."
        ]
    },

    {
        sindhi: "اڄ موسم سٺي آهي.",
        correct: "The weather is fine today.",
        options: [
            "The weather fine is today.",
            "The weather are fine today.",
            "The weather is fine today."
        ]
    },

    {
        sindhi: "ڇا هو گهر ۾ آهي؟",
        correct: "Is he at home?",
        options: [
            "He is at home?",
            "Is he at home?",
            "Is at home he?"
        ]
    },

    {
        sindhi: "ڇا توهان وٽ ڪتاب آهي؟",
        correct: "Do you have a book?",
        options: [
            "Do you have a book?",
            "Do you has a book?",
            "You do have a book?"
        ]
    }

];


// ======================================================
// PRACTICE DATA — CATEGORY 2
// TENSES
// 30 QUESTIONS
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
    },

    {
        sindhi: "مان روزانو اسڪول وڃان ٿو.",
        correct: "I go to school every day.",
        options: [
            "I go to school every day.",
            "I goes to school every day.",
            "I going to school every day."
        ]
    },

    {
        sindhi: "هو انگريزي پڙهي ٿو.",
        correct: "He studies English.",
        options: [
            "He study English.",
            "He studies English.",
            "He studying English."
        ]
    },

    {
        sindhi: "ڇا هوءَ هر صبح چانهه پيئي ٿي؟",
        correct: "Does she drink tea every morning?",
        options: [
            "Does she drink tea every morning?",
            "Does she drinks tea every morning?",
            "She does drink tea every morning?"
        ]
    },

    {
        sindhi: "اسان آچر تي ڪم نه ڪندا آهيون.",
        correct: "We do not work on Sunday.",
        options: [
            "We does not work on Sunday.",
            "We do not work on Sunday.",
            "We not do work on Sunday."
        ]
    },

    {
        sindhi: "هن ڪالهه هڪ خط لکيو.",
        correct: "He wrote a letter yesterday.",
        options: [
            "He write a letter yesterday.",
            "He wrote a letter yesterday.",
            "He writing a letter yesterday."
        ]
    },

    {
        sindhi: "هوءَ گذريل رات ٽي وي ڏٺي.",
        correct: "She watched TV last night.",
        options: [
            "She watched TV last night.",
            "She watch TV last night.",
            "She watching TV last night."
        ]
    },

    {
        sindhi: "ڇا انهن راند کٽي؟",
        correct: "Did they win the game?",
        options: [
            "Did they won the game?",
            "Did they win the game?",
            "They did won the game?"
        ]
    },

    {
        sindhi: "مان سڀاڻي پنهنجي دوست سان ملندس.",
        correct: "I will meet my friend tomorrow.",
        options: [
            "I will meet my friend tomorrow.",
            "I will met my friend tomorrow.",
            "I meet will my friend tomorrow."
        ]
    },

    {
        sindhi: "هو ايندڙ هفتي سفر ڪندو.",
        correct: "He will travel next week.",
        options: [
            "He will travel next week.",
            "He will traveled next week.",
            "He travel will next week."
        ]
    },

    {
        sindhi: "ڇا تون مون کي فون ڪندين؟",
        correct: "Will you call me?",
        options: [
            "You will call me?",
            "Will you call me?",
            "Will you called me?"
        ]
    },

    {
        sindhi: "هوءَ هن وقت ڪتاب پڙهي رهي آهي.",
        correct: "She is reading a book now.",
        options: [
            "She reading a book now.",
            "She is reading a book now.",
            "She is read a book now."
        ]
    },

    {
        sindhi: "اسان هن وقت ڪم نه ڪري رهيا آهيون.",
        correct: "We are not working now.",
        options: [
            "We are not working now.",
            "We not are working now.",
            "We are not work now."
        ]
    },

    {
        sindhi: "ڇا اهي باغ ۾ کيڏي رهيا آهن؟",
        correct: "Are they playing in the garden?",
        options: [
            "Are they playing in the garden?",
            "Are they play in the garden?",
            "They are playing in the garden?"
        ]
    },

    {
        sindhi: "مان ڪالهه شام پڙهي رهيو هئس.",
        correct: "I was studying yesterday evening.",
        options: [
            "I was studying yesterday evening.",
            "I were studying yesterday evening.",
            "I was study yesterday evening."
        ]
    },

    {
        sindhi: "اهي سڀاڻي هن وقت سفر ڪري رهيا هوندا.",
        correct: "They will be traveling at this time tomorrow.",
        options: [
            "They will traveling at this time tomorrow.",
            "They will be traveling at this time tomorrow.",
            "They are be traveling at this time tomorrow."
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
                    onclick="practiceAnswer(this, '${question.options[0] === question.correct}', '${prefix}-${index}')">
                    ${question.options[0]}
                </button>

                <button
                    class="practice-option"
                    onclick="practiceAnswer(this, '${question.options[1] === question.correct}', '${prefix}-${index}')">
                    ${question.options[1]}
                </button>

                <button
                    class="practice-option"
                    onclick="practiceAnswer(this, '${question.options[2] === question.correct}', '${prefix}-${index}')">
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


            <div class="important">

                <h3>⭐ اهم</h3>

                <p>
                    هر جملو ڪنهن عمل (Action) کي ظاهر نٿو ڪري.
                </p>

                <p>
                    ڪجهه جملا صرف اسان کي
                    حالت، ڪيفيت، صورتحال، سڃاڻپ،
                    ملڪيت يا موجودگي بابت ٻڌائن ٿا.
                </p>

            </div>


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


            <h2>
                📘 PART 1 — SIMPLE TENSES
            </h2>


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


            <h2>
                📗 PART 2 — CONTINUOUS TENSES
            </h2>

            <p class="lesson-intro">
                Continuous means an action is in progress.
            </p>


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
                    "کیا میں کرکٹ نہیں کھیل رہا ہوں گا۔"
                )}

            </div>


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


            <div class="important">

                <h3>⭐ Remember the Four Forms</h3>

                <p>1️⃣ Affirmative</p>
                <p>2️⃣ Negative</p>
                <p>3️⃣ Interrogative</p>
                <p>4️⃣ Negative Interrogative</p>

            </div>


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
// CATEGORY 3
// SYNONYMS & ANTONYMS
// 30 USEFUL VOCABULARY WORDS
// ======================================================

function buildCategory3() {

    const words = [

        {
            word: "Happy",
            synonym: "Glad",
            antonym: "Sad",
            sindhi: "خوش",
            urdu: "خوش"
        },

        {
            word: "Big",
            synonym: "Large",
            antonym: "Small",
            sindhi: "وڏو",
            urdu: "بڑا"
        },

        {
            word: "Easy",
            synonym: "Simple",
            antonym: "Difficult",
            sindhi: "آسان",
            urdu: "آسان"
        },

        {
            word: "Fast",
            synonym: "Quick",
            antonym: "Slow",
            sindhi: "تيز",
            urdu: "تیز"
        },

        {
            word: "Good",
            synonym: "Nice",
            antonym: "Bad",
            sindhi: "سٺو",
            urdu: "اچھا"
        },

        {
            word: "Beautiful",
            synonym: "Pretty",
            antonym: "Ugly",
            sindhi: "سهڻو",
            urdu: "خوبصورت"
        },

        {
            word: "Brave",
            synonym: "Courageous",
            antonym: "Cowardly",
            sindhi: "بهادر",
            urdu: "بہادر"
        },

        {
            word: "Strong",
            synonym: "Powerful",
            antonym: "Weak",
            sindhi: "طاقتور",
            urdu: "طاقتور"
        },

        {
            word: "Rich",
            synonym: "Wealthy",
            antonym: "Poor",
            sindhi: "امير",
            urdu: "امیر"
        },

        {
            word: "Smart",
            synonym: "Clever",
            antonym: "Foolish",
            sindhi: "هوشيار",
            urdu: "ہوشیار"
        },

        {
            word: "Angry",
            synonym: "Furious",
            antonym: "Calm",
            sindhi: "ڪاوڙيل",
            urdu: "غصے میں"
        },

        {
            word: "Quiet",
            synonym: "Silent",
            antonym: "Noisy",
            sindhi: "ماٺيڻو",
            urdu: "خاموش"
        },

        {
            word: "Old",
            synonym: "Aged",
            antonym: "Young",
            sindhi: "پراڻو / پوڙهو",
            urdu: "پرانا / بوڑھا"
        },

        {
            word: "Hot",
            synonym: "Warm",
            antonym: "Cold",
            sindhi: "گرم",
            urdu: "گرم"
        },

        {
            word: "Clean",
            synonym: "Tidy",
            antonym: "Dirty",
            sindhi: "صاف",
            urdu: "صاف"
        },

        {
            word: "Begin",
            synonym: "Start",
            antonym: "End",
            sindhi: "شروع ڪرڻ",
            urdu: "شروع کرنا"
        },

        {
            word: "Buy",
            synonym: "Purchase",
            antonym: "Sell",
            sindhi: "خريد ڪرڻ",
            urdu: "خریدنا"
        },

        {
            word: "Help",
            synonym: "Assist",
            antonym: "Hinder",
            sindhi: "مدد ڪرڻ",
            urdu: "مدد کرنا"
        },

        {
            word: "Love",
            synonym: "Adore",
            antonym: "Hate",
            sindhi: "پيار ڪرڻ",
            urdu: "محبت کرنا"
        },

        {
            word: "Open",
            synonym: "Uncover",
            antonym: "Close",
            sindhi: "کولڻ",
            urdu: "کھولنا"
        },

        {
            word: "Remember",
            synonym: "Recall",
            antonym: "Forget",
            sindhi: "ياد رکڻ",
            urdu: "یاد رکھنا"
        },

        {
            word: "Win",
            synonym: "Succeed",
            antonym: "Lose",
            sindhi: "کٽڻ",
            urdu: "جیتنا"
        },

        {
            word: "Accept",
            synonym: "Approve",
            antonym: "Reject",
            sindhi: "قبول ڪرڻ",
            urdu: "قبول کرنا"
        },

        {
            word: "True",
            synonym: "Correct",
            antonym: "False",
            sindhi: "سچو",
            urdu: "سچا"
        },

        {
            word: "Near",
            synonym: "Close",
            antonym: "Far",
            sindhi: "ويجهو",
            urdu: "قریب"
        },

        {
            word: "Always",
            synonym: "Constantly",
            antonym: "Never",
            sindhi: "هميشه",
            urdu: "ہمیشہ"
        },

        {
            word: "Laugh",
            synonym: "Giggle",
            antonym: "Cry",
            sindhi: "کلڻ",
            urdu: "ہنسنا"
        },

        {
            word: "Arrive",
            synonym: "Reach",
            antonym: "Leave",
            sindhi: "پهچڻ",
            urdu: "پہنچنا"
        },

        {
            word: "Full",
            synonym: "Filled",
            antonym: "Empty",
            sindhi: "ڀريل",
            urdu: "بھرا ہوا"
        },

        {
            word: "Safe",
            synonym: "Secure",
            antonym: "Dangerous",
            sindhi: "محفوظ",
            urdu: "محفوظ"
        }

    ];


    let html = `

        <div class="lesson">

            <h2>
                3. Synonyms & Antonyms
            </h2>

            <p class="lesson-intro">
                🌱 Improve Your Vocabulary
            </p>

            <div class="important">

                <h3>
                    ⭐ What is a Synonym?
                </h3>

                <p>
                    A synonym is a word with the same or
                    nearly the same meaning as another word.
                </p>

                <p>
                    Example:
                    <strong>Happy → Glad</strong>
                </p>

            </div>

            <div class="important">

                <h3>
                    ⭐ What is an Antonym?
                </h3>

                <p>
                    An antonym is a word with the opposite
                    meaning of another word.
                </p>

                <p>
                    Example:
                    <strong>Happy → Sad</strong>
                </p>

            </div>

            <h2>
                📚 30 Useful Words
            </h2>

    `;


    words.forEach((item, index) => {

        html += `

            <div class="lesson-card">

                <h3>
                    ${index + 1}.
                    <span style="
                        font-size: 30px;
                        font-weight: 900;
                    ">
                        ${item.word}
                    </span>
                </h3>

                <div style="
                    font-size: 22px;
                    font-weight: 800;
                    margin: 12px 0;
                ">
                    🟢 Synonym:
                    <strong>
                        ${item.synonym}
                    </strong>
                </div>

                <div style="
                    font-size: 22px;
                    font-weight: 800;
                    margin: 12px 0;
                ">
                    🔴 Antonym:
                    <strong>
                        ${item.antonym}
                    </strong>
                </div>

                <div style="
                    font-size: 21px;
                    font-weight: 700;
                    margin: 12px 0;
                ">
                    سنڌي:
                    ${item.sindhi}
                </div>

                <div style="
                    font-size: 21px;
                    font-weight: 700;
                    margin: 12px 0;
                ">
                    اردو:
                    ${item.urdu}
                </div>

                <button
                    class="listen-btn"
                    data-text="${item.word}">
                    🔊 Listen
                </button>

            </div>

        `;

    });


    html += `

        <div class="important">

            <h2>
                🧠 Vocabulary Practice
            </h2>

            <p>
                Choose the correct synonym or antonym.
            </p>

        </div>

    `;


    words.forEach((item, index) => {

        const isSynonym = index % 2 === 0;

        const correctAnswer =
            isSynonym
                ? item.synonym
                : item.antonym;

        let options;

        if (isSynonym) {

            options = [
                item.synonym,
                item.antonym,
                item.word
            ];

        } else {

            options = [
                item.antonym,
                item.synonym,
                item.word
            ];

        }

        options.sort(() => Math.random() - 0.5);


        html += `

            <div class="practice-question">

                <p>
                    <strong>
                        ${index + 1}.
                    </strong>

                    Choose the
                    <strong>
                        ${isSynonym ? "synonym" : "antonym"}
                    </strong>
                    of:

                    <strong style="
                        font-size: 25px;
                    ">
                        ${item.word}
                    </strong>
                </p>

                <button
                    class="practice-option"
                    onclick="vocabularyAnswer(
                        this,
                        '${options[0]}',
                        '${correctAnswer}'
                    )">
                    ${options[0]}
                </button>

                <button
                    class="practice-option"
                    onclick="vocabularyAnswer(
                        this,
                        '${options[1]}',
                        '${correctAnswer}'
                    )">
                    ${options[1]}
                </button>

                <button
                    class="practice-option"
                    onclick="vocabularyAnswer(
                        this,
                        '${options[2]}',
                        '${correctAnswer}'
                    )">
                    ${options[2]}
                </button>

                <div class="practice-feedback">
                </div>

            </div>

        `;

    });


    html += `

            <div class="important">

                <h3>
                    ⭐ Remember
                </h3>

                <p>
                    <strong>
                        Synonym
                    </strong>
                    = Similar meaning
                </p>

                <p>
                    <strong>
                        Antonym
                    </strong>
                    = Opposite meaning
                </p>

                <p>
                    Learn words together:
                </p>

                <p>
                    <strong>
                        Word + Synonym + Antonym
                    </strong>
                </p>

            </div>


            <button
                class="lesson-back"
                onclick="backToCategories()">

                ← BACK TO CATEGORIES

            </button>

        </div>

    `;


    return html;
}


// ======================================================
// CATEGORY 4
// SENTENCE PATTERNS
// ======================================================

function buildCategory4() {

    let html = `

        <div class="lesson">

            <h2>
                4. Sentence Patterns
            </h2>

            <p class="lesson-intro">
                🌱 Learn the pattern first — then learn the sentence.
            </p>

            <div class="important">

                <h3>
                    📘 What is a Sentence Pattern?
                </h3>

                <p>
                    A sentence pattern shows the appropriate
                    arrangement or order of words to make a
                    meaningful sentence.
                </p>

                <p>
                    Learn the pattern first. Then use it in
                    real-life English.
                </p>

            </div>

    `;


    // ==================================================
    // PATTERN CARDS
    // ==================================================

    sentencePatterns.forEach((item, index) => {

        html += `

            <div class="lesson-card">

                <h3>
                    🔹 ${item.title}
                </h3>

                <div class="pattern">
                    ${item.pattern}
                </div>

                <p>
                    ${item.explanation}
                </p>

        `;


        // ==================================================
        // EXAMPLES
        // ==================================================

        item.examples.forEach(example => {

            html += `

                <div class="example">

                    <div class="english">
                        🇬🇧 ${example}
                    </div>

                    <button
                        class="listen-btn"
                        data-text="${example}">
                        🔊 Listen
                    </button>

                </div>

            `;

        });


        html += `

            </div>

        `;

    });


    html += `

            <div class="important">

                <h3>
                    ⭐ Remember
                </h3>

                <p>
                    Pattern → Meaning → Example → Practice
                </p>

                <p>
                    Learn the arrangement of words first.
                    Then create your own sentences.
                </p>

            </div>


            <button
                class="lesson-back"
                onclick="backToCategories()">

                ← BACK TO CATEGORIES

            </button>

        </div>

    `;


    return html;
}


// ======================================================
// CATEGORY 3 — PRACTICE ANSWER
// ======================================================

function vocabularyAnswer(button, selected, correct) {

    const question =
        button.closest(".practice-question");

    const feedback =
        question.querySelector(".practice-feedback");

    const options =
        question.querySelectorAll(".practice-option");


    options.forEach(option => {

        option.disabled = true;

    });


    if (selected === correct) {

        feedback.innerHTML =
            "✅ Correct! Well done!";

        button.innerHTML =
            "✅ " + selected;

    }

    else {

        feedback.innerHTML =
            "❌ Wrong. Correct answer: " + correct;

        button.innerHTML =
            "❌ " + selected;


        options.forEach(option => {

            if (
                option.textContent.trim() === correct
            ) {

                option.innerHTML =
                    "✅ " + correct;

            }

        });

    }

}


// ======================================================
// PRACTICE ANSWER
// ======================================================

function practiceAnswer(button, correct, questionId) {

    const questionBox =
        button.closest(".practice-question");

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


    if (correct === true || correct === "true") {

        feedback.innerHTML =
            "✅ صحيح! تمام سٺو.";

    }

    else {

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
