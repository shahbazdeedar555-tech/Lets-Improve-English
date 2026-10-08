
/* =========================================================
   📚 LET'S IMPROVE ENGLISH
   COMPLETE OFFLINE SCRIPT
   CATEGORY 1 + CATEGORY 2
========================================================= */


/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = {

    1: {
        title: "1. Simple Sentences — No Action",
        message:
            "Learn sentences that express state, condition, situation, existence, possession and other non-action meanings."
    },

    2: {
        title: "2. Tenses",
        message:
            "Learn Present, Past and Future through four sentence forms: Affirmative, Negative, Interrogative and Negative Interrogative."
    },

    3: {
        title: "3. Synonyms & Antonyms",
        message:
            "Improve your vocabulary with words of similar and opposite meanings."
    },

    4: {
        title: "4. Sentence Patterns",
        message:
            "Learn how English sentences are built through simple and practical patterns."
    },

    5: {
        title: "5. Daily-Use Sentences",
        message:
            "Learn useful English sentences for everyday communication."
    },

    6: {
        title: "6. Simple Modals",
        message:
            "Learn Can, Could, May, Must and Should through practical examples."
    },

    7: {
        title: "7. Pronunciation Practice",
        message:
            "Listen, speak and improve your English pronunciation."
    }

};


/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(categoryNumber) {

    const mainMenu = document.querySelector(".main-menu");
    const categoryScreen = document.getElementById("category-screen");
    const title = document.getElementById("category-title");
    const message = document.getElementById("category-message");

    if (!mainMenu || !categoryScreen) {
        return;
    }

    mainMenu.style.display = "none";
    categoryScreen.style.display = "block";

    if (categoryNumber === 1) {

        categoryScreen.innerHTML = buildCategory1();

        setupLessonButtons();
        setupPractice();

    }

    else if (categoryNumber === 2) {

        categoryScreen.innerHTML = buildCategory2();

        setupLessonButtons();

    }

    else {

        const category = categories[categoryNumber];

        title.textContent = category
            ? category.title
            : "Category";

        message.textContent = category
            ? category.message
            : "This category is coming soon.";

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   CATEGORY 1
   SIMPLE SENTENCES — NO ACTION
========================================================= */

function buildCategory1() {

    return `

        <div class="lesson">

            <button class="back-btn" onclick="goHome()">
                ← BACK
            </button>

            <h2>
                1. Simple Sentences — No Action
            </h2>

            <div class="lesson-intro">

                <p>
                    🌱 <strong>No Action — Just State, Condition or Situation</strong>
                </p>

                <p>
                    A simple sentence can tell us what someone or something
                    is, was, will be, has, or what exists.
                </p>

            </div>


            <!-- =========================================
                 PATTERN 1 — BE
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 1 — BE</h3>

                <div class="pattern">
                    Subject + is / am / are + Complement
                </div>

                <h3>Present</h3>

                ${example(
                    "I am happy.",
                    "مان خوش آهيان.",
                    "میں خوش ہوں."
                )}

                ${example(
                    "She is a teacher.",
                    "هوءَ استاد آهي.",
                    "وہ ایک استاد ہے."
                )}

                ${example(
                    "They are ready.",
                    "اهي تيار آهن.",
                    "وہ تیار ہیں."
                )}

                <h3>Past</h3>

                ${example(
                    "I was tired.",
                    "مان ٿڪل هئس.",
                    "میں تھکا ہوا تھا."
                )}

                ${example(
                    "He was at home.",
                    "هو گهر ۾ هو.",
                    "وہ گھر میں تھا."
                )}

                ${example(
                    "They were happy.",
                    "اهي خوش هئا.",
                    "وہ خوش تھے."
                )}

                <h3>Future</h3>

                ${example(
                    "I will be happy.",
                    "مان خوش ٿيندس.",
                    "میں خوش ہوں گا."
                )}

                ${example(
                    "She will be a teacher.",
                    "هوءَ استاد ٿيندي.",
                    "وہ استاد بنے گی."
                )}

                ${example(
                    "They will be ready.",
                    "اهي تيار هوندا.",
                    "وہ تیار ہوں گے."
                )}

            </div>


            <!-- =========================================
                 NEGATIVE
            ========================================== -->

            <div class="lesson-card">

                <h3>❌ Negative</h3>

                <div class="pattern">
                    Subject + BE + not + Complement
                </div>

                ${example(
                    "I am not tired.",
                    "مان ٿڪل ناهيان.",
                    "میں تھکا ہوا نہیں ہوں."
                )}

                ${example(
                    "He is not at home.",
                    "هو گهر ۾ ناهي.",
                    "وہ گھر میں نہیں ہے."
                )}

                ${example(
                    "They are not ready.",
                    "اهي تيار ناهن.",
                    "وہ تیار نہیں ہیں."
                )}

                ${example(
                    "She was not happy.",
                    "هوءَ خوش نه هئي.",
                    "وہ خوش نہیں تھی."
                )}

                ${example(
                    "They were not late.",
                    "اهي دير سان نه هئا.",
                    "وہ دیر سے نہیں تھے."
                )}

                ${example(
                    "I will not be late.",
                    "مان دير سان نه ايندس.",
                    "میں دیر سے نہیں آؤں گا."
                )}

            </div>


            <!-- =========================================
                 QUESTIONS
            ========================================== -->

            <div class="lesson-card">

                <h3>❓ Interrogative</h3>

                <div class="pattern">
                    BE + Subject + Complement?
                </div>

                ${example(
                    "Am I late?",
                    "ڇا مان دير سان آهيان؟",
                    "کیا میں دیر سے ہوں؟"
                )}

                ${example(
                    "Is she a teacher?",
                    "ڇا هوءَ استاد آهي؟",
                    "کیا وہ استاد ہے؟"
                )}

                ${example(
                    "Are they ready?",
                    "ڇا اهي تيار آهن؟",
                    "کیا وہ تیار ہیں؟"
                )}

                ${example(
                    "Was he at home?",
                    "ڇا هو گهر ۾ هو؟",
                    "کیا وہ گھر میں تھا؟"
                )}

                ${example(
                    "Were they happy?",
                    "ڇا اهي خوش هئا؟",
                    "کیا وہ خوش تھے؟"
                )}

                ${example(
                    "Will she be ready?",
                    "ڇا هوءَ تيار ٿيندي؟",
                    "کیا وہ تیار ہوگی؟"
                )}

            </div>


            <!-- =========================================
                 HAVE
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 2 — HAVE</h3>

                <div class="pattern">
                    Subject + have / has + Object
                </div>

                ${example(
                    "I have a book.",
                    "مون وٽ ڪتاب آهي.",
                    "میرے پاس ایک کتاب ہے."
                )}

                ${example(
                    "She has a pen.",
                    "هن وٽ قلم آهي.",
                    "اس کے پاس قلم ہے."
                )}

                ${example(
                    "They have a house.",
                    "انهن وٽ گهر آهي.",
                    "ان کے پاس گھر ہے."
                )}

                <h3>Past</h3>

                <div class="pattern">
                    Subject + had + Object
                </div>

                ${example(
                    "I had a book.",
                    "مون وٽ ڪتاب هو.",
                    "میرے پاس کتاب تھی."
                )}

                ${example(
                    "She had a car.",
                    "هن وٽ ڪار هئي.",
                    "اس کے پاس گاڑی تھی."
                )}

                <h3>Future</h3>

                <div class="pattern">
                    Subject + will have + Object
                </div>

                ${example(
                    "I will have a new book.",
                    "مون وٽ نئون ڪتاب هوندو.",
                    "میرے پاس نئی کتاب ہوگی."
                )}

            </div>


            <!-- =========================================
                 THERE
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 3 — THERE</h3>

                <div class="pattern">
                    There + BE + Noun
                </div>

                ${example(
                    "There is a book on the table.",
                    "ميز تي هڪ ڪتاب آهي.",
                    "میز پر ایک کتاب ہے."
                )}

                ${example(
                    "There are two books on the table.",
                    "ميز تي ٻه ڪتاب آهن.",
                    "میز پر دو کتابیں ہیں."
                )}

                ${example(
                    "There was a problem.",
                    "هڪ مسئلو هو.",
                    "ایک مسئلہ تھا."
                )}

                ${example(
                    "There will be a meeting.",
                    "هڪ گڏجاڻي ٿيندي.",
                    "ایک میٹنگ ہوگی."
                )}

            </div>


            <!-- =========================================
                 IT
            ========================================== -->

            <div class="lesson-card">

                <h3>🔹 Pattern 4 — IT</h3>

                <p>
                    <strong>IT</strong> can be used for time, weather,
                    distance, condition and situation.
                </p>

                ${example(
                    "It is hot.",
                    "گرمي آهي.",
                    "گرمی ہے."
                )}

                ${example(
                    "It is cold.",
                    "ٿڌ آهي.",
                    "سردی ہے."
                )}

                ${example(
                    "It is five o'clock.",
                    "پنج وڳا آهن.",
                    "پانچ بجے ہیں."
                )}

                ${example(
                    "It is far from here.",
                    "هيءَ جاءِ هتان کان پري آهي.",
                    "یہ جگہ یہاں سے دور ہے."
                )}

                ${example(
                    "It was difficult.",
                    "اهو ڏکيو هو.",
                    "یہ مشکل تھا."
                )}

            </div>


            <!-- =========================================
                 STATE / CONDITION
            ========================================== -->

            <div class="lesson-card">

                <h3>🌱 State / Condition</h3>

                <div class="pattern">
                    Subject + BE + Adjective
                </div>

                ${example(
                    "I am sick.",
                    "مان بيمار آهيان.",
                    "میں بیمار ہوں."
                )}

                ${example(
                    "He is busy.",
                    "هو مصروف آهي.",
                    "وہ مصروف ہے."
                )}

                ${example(
                    "She is tired.",
                    "هوءَ ٿڪل آهي.",
                    "وہ تھکی ہوئی ہے."
                )}

                ${example(
                    "They are hungry.",
                    "اهي بکيا آهن.",
                    "وہ بھوکے ہیں."
                )}

            </div>


            <!-- =========================================
                 STATE / SITUATION + ING
            ========================================== -->

            <div class="lesson-card">

                <h3>🌱 State / Situation with BE + -ing</h3>

                <div class="pattern">
                    Subject + BE + Verb-ing
                </div>

                ${example(
                    "I am feeling tired.",
                    "مان ٿڪ محسوس ڪري رهيو آهيان.",
                    "میں تھکن محسوس کر رہا ہوں."
                )}

                ${example(
                    "She is feeling better.",
                    "هوءَ بهتر محسوس ڪري رهي آهي.",
                    "وہ بہتر محسوس کر رہی ہے."
                )}

                ${example(
                    "They are waiting.",
                    "اهي انتظار ڪري رهيا آهن.",
                    "وہ انتظار کر رہے ہیں."
                )}

            </div>


            <!-- =========================================
                 IMPORTANT
            ========================================== -->

            <div class="important">

                <strong>⭐ Important:</strong>

                <br><br>

                Grammar is not only about rules.

                <br>

                Learn the appropriate arrangement of words
                to make meaningful sentences.

                <br><br>

                <strong>
                    Pattern first — rule later.
                </strong>

            </div>


            <!-- PRACTICE WILL BE INSERTED HERE -->

            <button class="lesson-back" onclick="goHome()">
                ← BACK TO CATEGORIES
            </button>

        </div>

    `;
}


/* =========================================================
   CATEGORY 2
   TENSES
========================================================= */

function buildCategory2() {

    return `

        <div class="lesson">

            <button class="back-btn" onclick="goHome()">
                ← BACK
            </button>


            <h2>
                2. Tenses
            </h2>


            <div class="lesson-intro">

                <p>
                    🌱 <strong>Present • Past • Future</strong>
                </p>

                <p>
                    Learn each tense through four useful sentence forms:
                </p>

                <p>
                    ✅ Affirmative
                    <br>
                    ❌ Negative
                    <br>
                    ❓ Interrogative
                    <br>
                    ❓❌ Negative Interrogative
                </p>

            </div>


            <!-- =================================================
                 PRESENT SIMPLE
            ================================================== -->

            <div class="lesson-card">

                <h3>🔵 Present Simple</h3>

                <p>
                    We use the Present Simple for habits,
                    routines, repeated actions and general facts.
                </p>


                <h3>✅ Affirmative</h3>

                <div class="pattern">
                    I / You / We / They + V1
                    <br>
                    He / She / It + V1 + s/es
                </div>

                ${example(
                    "I play cricket.",
                    "مان ڪرڪيٽ کيڏان ٿو.",
                    "میں کرکٹ کھیلتا ہوں."
                )}

                ${example(
                    "She plays cricket.",
                    "هوءَ ڪرڪيٽ کيڏي ٿي.",
                    "وہ کرکٹ کھیلتی ہے."
                )}

                ${example(
                    "They go to school.",
                    "اهي اسڪول وڃن ٿا.",
                    "وہ اسکول جاتے ہیں."
                )}

                ${example(
                    "He works hard.",
                    "هو محنت ڪري ٿو.",
                    "وہ محنت کرتا ہے."
                )}


                <h3>❌ Negative</h3>

                <div class="pattern">
                    I / You / We / They + do not + V1
                    <br>
                    He / She / It + does not + V1
                </div>

                ${example(
                    "I do not play cricket.",
                    "مان ڪرڪيٽ نٿو کيڏان.",
                    "میں کرکٹ نہیں کھیلتا."
                )}

                ${example(
                    "She does not play cricket.",
                    "هوءَ ڪرڪيٽ نٿي کيڏي.",
                    "وہ کرکٹ نہیں کھیلتی."
                )}

                ${example(
                    "They do not go to school.",
                    "اهي اسڪول نٿا وڃن.",
                    "وہ اسکول نہیں جاتے."
                )}

                ${example(
                    "He does not work hard.",
                    "هو محنت نٿو ڪري.",
                    "وہ محنت نہیں کرتا."
                )}


                <h3>❓ Interrogative</h3>

                <div class="pattern">
                    Do + I / you / we / they + V1?
                    <br>
                    Does + he / she / it + V1?
                </div>

                ${example(
                    "Do you play cricket?",
                    "ڇا تون ڪرڪيٽ کيڏين ٿو؟",
                    "کیا تم کرکٹ کھیلتے ہو؟"
                )}

                ${example(
                    "Does she play cricket?",
                    "ڇا هوءَ ڪرڪيٽ کيڏي ٿي؟",
                    "کیا وہ کرکٹ کھیلتی ہے؟"
                )}

                ${example(
                    "Do they go to school?",
                    "ڇا اهي اسڪول وڃن ٿا؟",
                    "کیا وہ اسکول جاتے ہیں؟"
                )}

                ${example(
                    "Does he work hard?",
                    "ڇا هو محنت ڪري ٿو؟",
                    "کیا وہ محنت کرتا ہے؟"
                )}


                <h3>❓❌ Negative Interrogative</h3>

                <div class="pattern">
                    Do + subject + not + V1?
                    <br>
                    Does + subject + not + V1?
                </div>

                ${example(
                    "Do you not play cricket?",
                    "ڇا تون ڪرڪيٽ نٿو کيڏين؟",
                    "کیا تم کرکٹ نہیں کھیلتے؟"
                )}

                ${example(
                    "Does she not play cricket?",
                    "ڇا هوءَ ڪرڪيٽ نٿي کيڏي؟",
                    "کیا وہ کرکٹ نہیں کھیلتی؟"
                )}

                ${example(
                    "Do they not go to school?",
                    "ڇا اهي اسڪول نٿا وڃن؟",
                    "کیا وہ اسکول نہیں جاتے؟"
                )}

                ${example(
                    "Does he not work hard?",
                    "ڇا هو محنت نٿو ڪري؟",
                    "کیا وہ محنت نہیں کرتا؟"
                )}

            </div>


            <!-- =================================================
                 PAST SIMPLE
            ================================================== -->

            <div class="lesson-card">

                <h3>🟠 Past Simple</h3>

                <p>
                    We use the Past Simple for completed actions
                    or situations in the past.
                </p>


                <h3>✅ Affirmative</h3>

                <div class="pattern">
                    Subject + V2
                </div>

                ${example(
                    "I played cricket.",
                    "مون ڪرڪيٽ کيڏي.",
                    "میں نے کرکٹ کھیلی."
                )}

                ${example(
                    "She played cricket.",
                    "هن ڪرڪيٽ کيڏي.",
                    "اس نے کرکٹ کھیلی."
                )}

                ${example(
                    "They went to school.",
                    "اهي اسڪول ويا.",
                    "وہ اسکول گئے."
                )}

                ${example(
                    "He worked hard.",
                    "هن محنت ڪئي.",
                    "اس نے محنت کی."
                )}


                <h3>❌ Negative</h3>

                <div class="pattern">
                    Subject + did not + V1
                </div>

                ${example(
                    "I did not play cricket.",
                    "مون ڪرڪيٽ نه کيڏي.",
                    "میں نے کرکٹ نہیں کھیلی."
                )}

                ${example(
                    "She did not play cricket.",
                    "هن ڪرڪيٽ نه کيڏي.",
                    "اس نے کرکٹ نہیں کھیلی."
                )}

                ${example(
                    "They did not go to school.",
                    "اهي اسڪول نه ويا.",
                    "وہ اسکول نہیں گئے."
                )}

                ${example(
                    "He did not work hard.",
                    "هن محنت نه ڪئي.",
                    "اس نے محنت نہیں کی."
                )}


                <h3>❓ Interrogative</h3>

                <div class="pattern">
                    Did + Subject + V1?
                </div>

                ${example(
                    "Did you play cricket?",
                    "ڇا تو ڪرڪيٽ کيڏي؟",
                    "کیا تم نے کرکٹ کھیلی؟"
                )}

                ${example(
                    "Did she play cricket?",
                    "ڇا هن ڪرڪيٽ کيڏي؟",
                    "کیا اس نے کرکٹ کھیلی؟"
                )}

                ${example(
                    "Did they go to school?",
                    "ڇا اهي اسڪول ويا؟",
                    "کیا وہ اسکول گئے؟"
                )}

                ${example(
                    "Did he work hard?",
                    "ڇا هن محنت ڪئي؟",
                    "کیا اس نے محنت کی؟"
                )}


                <h3>❓❌ Negative Interrogative</h3>

                <div class="pattern">
                    Did + Subject + not + V1?
                </div>

                ${example(
                    "Did you not play cricket?",
                    "ڇا تو ڪرڪيٽ نه کيڏي؟",
                    "کیا تم نے کرکٹ نہیں کھیلی؟"
                )}

                ${example(
                    "Did she not play cricket?",
                    "ڇا هن ڪرڪيٽ نه کيڏي؟",
                    "کیا اس نے کرکٹ نہیں کھیلی؟"
                )}

                ${example(
                    "Did they not go to school?",
                    "ڇا اهي اسڪول نه ويا؟",
                    "کیا وہ اسکول نہیں گئے؟"
                )}

                ${example(
                    "Did he not work hard?",
                    "ڇا هن محنت نه ڪئي؟",
                    "کیا اس نے محنت نہیں کی؟"
                )}

            </div>


            <!-- =================================================
                 FUTURE SIMPLE
            ================================================== -->

            <div class="lesson-card">

                <h3>🟢 Future Simple</h3>

                <p>
                    We use the Future Simple for actions,
                    events or situations that will happen later.
                </p>


                <h3>✅ Affirmative</h3>

                <div class="pattern">
                    Subject + will + V1
                </div>

                ${example(
                    "I will play cricket.",
                    "مان ڪرڪيٽ کيڏندس.",
                    "میں کرکٹ کھیلوں گا."
                )}

                ${example(
                    "She will play cricket.",
                    "هوءَ ڪرڪيٽ کيڏندي.",
                    "وہ کرکٹ کھیلے گی."
                )}

                ${example(
                    "They will go to school.",
                    "اهي اسڪول ويندا.",
                    "وہ اسکول جائیں گے."
                )}

                ${example(
                    "He will work hard.",
                    "هو محنت ڪندو.",
                    "وہ محنت کرے گا."
                )}


                <h3>❌ Negative</h3>

                <div class="pattern">
                    Subject + will not + V1
                </div>

                ${example(
                    "I will not play cricket.",
                    "مان ڪرڪيٽ نه کيڏندس.",
                    "میں کرکٹ نہیں کھیلوں گا."
                )}

                ${example(
                    "She will not play cricket.",
                    "هوءَ ڪرڪيٽ نه کيڏندي.",
                    "وہ کرکٹ نہیں کھیلے گی."
                )}

                ${example(
                    "They will not go to school.",
                    "اهي اسڪول نه ويندا.",
                    "وہ اسکول نہیں جائیں گے."
                )}

                ${example(
                    "He will not work hard.",
                    "هو محنت نه ڪندو.",
                    "وہ محنت نہیں کرے گا."
                )}


                <h3>❓ Interrogative</h3>

                <div class="pattern">
                    Will + Subject + V1?
                </div>

                ${example(
                    "Will you play cricket?",
                    "ڇا تون ڪرڪيٽ کيڏندين؟",
                    "کیا تم کرکٹ کھیلو گے؟"
                )}

                ${example(
                    "Will she play cricket?",
                    "ڇا هوءَ ڪرڪيٽ کيڏندي؟",
                    "کیا وہ کرکٹ کھیلے گی؟"
                )}

                ${example(
                    "Will they go to school?",
                    "ڇا اهي اسڪول ويندا؟",
                    "کیا وہ اسکول جائیں گے؟"
                )}

                ${example(
                    "Will he work hard?",
                    "ڇا هو محنت ڪندو؟",
                    "کیا وہ محنت کرے گا؟"
                )}


                <h3>❓❌ Negative Interrogative</h3>

                <div class="pattern">
                    Will + Subject + not + V1?
                </div>

                ${example(
                    "Will you not play cricket?",
                    "ڇا تون ڪرڪيٽ نه کيڏندين؟",
                    "کیا تم کرکٹ نہیں کھیلو گے؟"
                )}

                ${example(
                    "Will she not play cricket?",
                    "ڇا هوءَ ڪرڪيٽ نه کيڏندي؟",
                    "کیا وہ کرکٹ نہیں کھیلے گی؟"
                )}

                ${example(
                    "Will they not go to school?",
                    "ڇا اهي اسڪول نه ويندا؟",
                    "کیا وہ اسکول نہیں جائیں گے؟"
                )}

                ${example(
                    "Will he not work hard?",
                    "ڇا هو محنت نه ڪندو؟",
                    "کیا وہ محنت نہیں کرے گا؟"
                )}

            </div>


            <!-- =================================================
                 QUICK COMPARISON
            ================================================== -->

            <div class="lesson-card">

                <h3>⭐ Quick Pattern Comparison</h3>

                <div class="pattern">
                    PRESENT
                    <br>
                    I play.
                    <br>
                    I do not play.
                    <br>
                    Do I play?
                    <br>
                    Do I not play?
                </div>

                <div class="pattern">
                    PAST
                    <br>
                    I played.
                    <br>
                    I did not play.
                    <br>
                    Did I play?
                    <br>
                    Did I not play?
                </div>

                <div class="pattern">
                    FUTURE
                    <br>
                    I will play.
                    <br>
                    I will not play.
                    <br>
                    Will I play?
                    <br>
                    Will I not play?
                </div>

            </div>


            <!-- =================================================
                 IMPORTANT
            ================================================== -->

            <div class="important">

                <strong>⭐ Remember:</strong>

                <br><br>

                In Present Simple:

                <br>

                <strong>Does + V1</strong>

                <br><br>

                In Past Simple:

                <br>

                <strong>Did + V1</strong>

                <br><br>

                After <strong>do, does, did</strong>,
                use the base form <strong>V1</strong>.

                <br><br>

                <strong>
                    Learn the pattern first — understand the rule later.
                </strong>

            </div>


            <button class="lesson-back" onclick="goHome()">
                ← BACK TO CATEGORIES
            </button>

        </div>

    `;
}


/* =========================================================
   EXAMPLE BUILDER
========================================================= */

function example(english, sindhi, urdu) {

    return `

        <div class="example">

            <div class="english">
                ${english}
            </div>

            <div class="sindhi">
                سنڌي: ${sindhi}
            </div>

            <div class="urdu">
                اردو: ${urdu}
            </div>

            <button
                class="listen-btn"
                data-text="${escapeAttribute(english)}">

                🔊 Listen

            </button>

        </div>

    `;
}


/* =========================================================
   ESCAPE ATTRIBUTE TEXT
========================================================= */

function escapeAttribute(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}


/* =========================================================
   LISTEN BUTTONS
========================================================= */

function setupLessonButtons() {

    const buttons =
        document.querySelectorAll(".listen-btn");

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            const text =
                button.getAttribute("data-text");

            if (text) {

                speakEnglish(
                    text
                        .replace(/&quot;/g, '"')
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                );

            }

        });

    });

}


/* =========================================================
   SPEECH
========================================================= */

function speakEnglish(text) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Speech is not supported by this browser."
        );

        return;
    }

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.85;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}


/* =========================================================
   GO HOME
========================================================= */

function goHome() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    const categoryScreen =
        document.getElementById("category-screen");

    const mainMenu =
        document.querySelector(".main-menu");

    if (categoryScreen) {

        categoryScreen.style.display = "none";

        categoryScreen.innerHTML = `
            <button class="back-btn" onclick="goHome()">
                ← BACK
            </button>

            <h2 id="category-title"></h2>
            <p id="category-message"></p>
        `;

    }

    if (mainMenu) {
        mainMenu.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CATEGORY 1 PRACTICE
========================================================= */

const practiceQuestions = [

    {
        question: "مان خوش آهيان.",
        options: [
            "I am happy.",
            "I have happy.",
            "I do happy."
        ],
        answer: 0
    },

    {
        question: "هوءَ استاد آهي.",
        options: [
            "She has a teacher.",
            "She is a teacher.",
            "She does a teacher."
        ],
        answer: 1
    },

    {
        question: "اهي تيار ناهن.",
        options: [
            "They are not ready.",
            "They do not ready.",
            "They have not ready."
        ],
        answer: 0
    },

    {
        question: "ڇا هو گهر ۾ آهي؟",
        options: [
            "Does he home?",
            "Is he at home?",
            "Has he home?"
        ],
        answer: 1
    },

    {
        question: "مون وٽ ڪتاب آهي.",
        options: [
            "I am a book.",
            "I do a book.",
            "I have a book."
        ],
        answer: 2
    },

    {
        question: "هن وٽ قلم هو.",
        options: [
            "She had a pen.",
            "She was a pen.",
            "She did a pen."
        ],
        answer: 0
    },

    {
        question: "ميز تي هڪ ڪتاب آهي.",
        options: [
            "It is a book on the table.",
            "There is a book on the table.",
            "The book has the table."
        ],
        answer: 1
    },

    {
        question: "ڇا اهي خوش هئا؟",
        options: [
            "Were they happy?",
            "Did they happy?",
            "Had they happy?"
        ],
        answer: 0
    },

    {
        question: "مان ٿڪل ناهيان.",
        options: [
            "I do not tired.",
            "I am not tired.",
            "I have not tired."
        ],
        answer: 1
    },

    {
        question: "ڇا هوءَ استاد آهي؟",
        options: [
            "Does she a teacher?",
            "Has she a teacher?",
            "Is she a teacher?"
        ],
        answer: 2
    },

    {
        question: "هڪ مسئلو هو.",
        options: [
            "There was a problem.",
            "There did a problem.",
            "There had a problem."
        ],
        answer: 0
    },

    {
        question: "ڇا سڀاڻي گڏجاڻي ٿيندي؟",
        options: [
            "Will there be a meeting?",
            "Will there have a meeting?",
            "Does there be a meeting?"
        ],
        answer: 0
    }

];


let practiceIndex = 0;
let practiceScore = 0;
let practiceAnswered = false;


/* =========================================================
   SETUP PRACTICE
========================================================= */

function setupPractice() {

    const lesson =
        document.querySelector(".lesson");

    const backButton =
        document.querySelector(".lesson-back");

    if (!lesson || !backButton) {
        return;
    }

    let practiceArea =
        document.getElementById("practice-area");

    if (!practiceArea) {

        practiceArea =
            document.createElement("div");

        practiceArea.id = "practice-area";

        lesson.insertBefore(
            practiceArea,
            backButton
        );

    }

    practiceIndex = 0;
    practiceScore = 0;
    practiceAnswered = false;

    showPracticeQuestion();

}


/* =========================================================
   SHOW PRACTICE QUESTION
========================================================= */

function showPracticeQuestion() {

    const area =
        document.getElementById("practice-area");

    if (!area) {
        return;
    }

    if (practiceIndex >= practiceQuestions.length) {

        area.innerHTML = `

            <div class="practice-question">

                <h2>🎉 Practice Complete!</h2>

                <p>
                    Your Score:
                    <strong>
                        ${practiceScore}
                        /
                        ${practiceQuestions.length}
                    </strong>
                </p>

                <button
                    class="practice-restart"
                    onclick="restartPractice()">

                    🔄 Try Again

                </button>

            </div>

        `;

        return;
    }


    const question =
        practiceQuestions[practiceIndex];

    practiceAnswered = false;


    let optionsHTML = "";

    question.options.forEach(
        function(option, index) {

            optionsHTML += `

                <button
                    class="practice-option"
                    onclick="checkPracticeAnswer(${index})">

                    ${option}

                </button>

            `;

        }
    );


    area.innerHTML = `

        <div class="practice-question">

            <h2>🧠 Practice</h2>

            <div class="practice-score">
                Score:
                ${practiceScore}
                /
                ${practiceQuestions.length}
            </div>

            <p>
                Translate into English:
            </p>

            <p>
                ${question.question}
            </p>

            ${optionsHTML}

            <div
                id="practice-feedback"
                class="practice-feedback"
                style="display:none;">
            </div>

        </div>

    `;

}


/* =========================================================
   CHECK PRACTICE ANSWER
========================================================= */

function checkPracticeAnswer(selectedIndex) {

    if (practiceAnswered) {
        return;
    }

    const question =
        practiceQuestions[practiceIndex];

    const feedback =
        document.getElementById("practice-feedback");

    const options =
        document.querySelectorAll(".practice-option");


    if (selectedIndex === question.answer) {

        practiceAnswered = true;

        practiceScore++;

        if (feedback) {

            feedback.style.display = "block";

            feedback.innerHTML =
                "✅ Correct! Well done.";

        }

        options.forEach(function(option) {
            option.disabled = true;
        });


        setTimeout(function() {

            practiceIndex++;

            showPracticeQuestion();

        }, 900);

    }

    else {

        if (feedback) {

            feedback.style.display = "block";

            feedback.innerHTML =
                "❌ Try again. Look carefully at the pattern.";

        }

    }

}


/* =========================================================
   RESTART PRACTICE
========================================================= */

function restartPractice() {

    practiceIndex = 0;
    practiceScore = 0;
    practiceAnswered = false;

    showPracticeQuestion();

    const area =
        document.getElementById("practice-area");

    if (area) {

        area.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   APP START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "📚 LET'S IMPROVE ENGLISH loaded successfully."
        );

    }
);
