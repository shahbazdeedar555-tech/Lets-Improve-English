
// =====================================================
// 📚 LET'S IMPROVE ENGLISH
// CATEGORY SYSTEM + CATEGORY 1
// SIMPLE SENTENCES — NO ACTION
// =====================================================


// =====================================================
// MAIN CATEGORIES
// =====================================================

const categories = {

    1: {
        title: "1. Simple Sentences — No Action"
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


// =====================================================
// OPEN CATEGORY
// =====================================================

function openCategory(categoryNumber) {

    const category = categories[categoryNumber];

    if (!category) {
        return;
    }

    const mainMenu = document.querySelector(".main-menu");

    mainMenu.style.display = "none";

    const categoryScreen =
        document.getElementById("category-screen");

    categoryScreen.style.display = "block";

    const title =
        document.getElementById("category-title");

    const message =
        document.getElementById("category-message");


    // ==========================================
    // CATEGORY 1
    // ==========================================

    if (categoryNumber === 1) {

        title.textContent =
            "1. Simple Sentences — No Action";

        message.innerHTML = buildCategory1();

        setupLessonButtons();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }


    // ==========================================
    // OTHER CATEGORIES
    // ==========================================

    title.textContent = category.title;

    message.textContent = category.message;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// CATEGORY 1 CONTENT
// =====================================================

function buildCategory1() {

    return `

        <div class="lesson">

            <div class="lesson-intro">

                <h3>🌱 No Action — Just State, Condition or Situation</h3>

                <p>
                    A simple sentence can tell us what someone or
                    something <strong>is</strong>, <strong>was</strong>,
                    <strong>will be</strong>, <strong>has</strong>,
                    or what <strong>exists</strong>.
                </p>

            </div>


            <!-- ======================================
                 BE PATTERN
            ======================================= -->

            <div class="lesson-card">

                <h3>🔹 Pattern 1 — BE</h3>

                <div class="pattern">
                    Subject + is / am / are + Complement
                </div>

                <div class="example">

                    <p><strong>I am happy.</strong></p>

                    <p>مان خوش آهيان.</p>

                    <p>میں خوش ہوں.</p>

                    <button class="listen-btn"
                            data-text="I am happy.">
                        🔊 Listen
                    </button>

                </div>


                <div class="example">

                    <p><strong>She is a teacher.</strong></p>

                    <p>هوءَ استاد آهي.</p>

                    <p>وہ استاد ہے.</p>

                    <button class="listen-btn"
                            data-text="She is a teacher.">
                        🔊 Listen
                    </button>

                </div>


                <div class="example">

                    <p><strong>They are ready.</strong></p>

                    <p>اهي تيار آهن.</p>

                    <p>وہ تیار ہیں.</p>

                    <button class="listen-btn"
                            data-text="They are ready.">
                        🔊 Listen
                    </button>

                </div>

            </div>


            <!-- ======================================
                 PRESENT BE
            ======================================= -->

            <div class="lesson-card">

                <h3>🟢 Present</h3>

                <div class="pattern">
                    is / am / are
                </div>

                <p><strong>I am tired.</strong></p>
                <p>مان ٿڪل آهيان.</p>
                <p>میں تھکا ہوا ہوں.</p>

                <button class="listen-btn"
                        data-text="I am tired.">
                    🔊 Listen
                </button>


                <p><strong>He is at home.</strong></p>
                <p>هو گهر ۾ آهي.</p>
                <p>وہ گھر میں ہے.</p>

                <button class="listen-btn"
                        data-text="He is at home.">
                    🔊 Listen
                </button>


                <p><strong>They are happy.</strong></p>
                <p>اهي خوش آهن.</p>
                <p>وہ خوش ہیں.</p>

                <button class="listen-btn"
                        data-text="They are happy.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 PAST BE
            ======================================= -->

            <div class="lesson-card">

                <h3>🟠 Past</h3>

                <div class="pattern">
                    was / were
                </div>

                <p><strong>I was tired.</strong></p>
                <p>مان ٿڪل هئس.</p>
                <p>میں تھکا ہوا تھا.</p>

                <button class="listen-btn"
                        data-text="I was tired.">
                    🔊 Listen
                </button>


                <p><strong>She was at home.</strong></p>
                <p>هوءَ گهر ۾ هئي.</p>
                <p>وہ گھر میں تھی.</p>

                <button class="listen-btn"
                        data-text="She was at home.">
                    🔊 Listen
                </button>


                <p><strong>They were ready.</strong></p>
                <p>اهي تيار هئا.</p>
                <p>وہ تیار تھے.</p>

                <button class="listen-btn"
                        data-text="They were ready.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 FUTURE BE
            ======================================= -->

            <div class="lesson-card">

                <h3>🔵 Future</h3>

                <div class="pattern">
                    will be
                </div>

                <p><strong>I will be ready.</strong></p>
                <p>مان تيار ٿيندس.</p>
                <p>میں تیار ہوں گا.</p>

                <button class="listen-btn"
                        data-text="I will be ready.">
                    🔊 Listen
                </button>


                <p><strong>She will be at home.</strong></p>
                <p>هوءَ گهر ۾ هوندي.</p>
                <p>وہ گھر میں ہوگی.</p>

                <button class="listen-btn"
                        data-text="She will be at home.">
                    🔊 Listen
                </button>


                <p><strong>They will be happy.</strong></p>
                <p>اهي خوش ٿيندا.</p>
                <p>وہ خوش ہوں گے.</p>

                <button class="listen-btn"
                        data-text="They will be happy.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 NEGATIVE
            ======================================= -->

            <div class="lesson-card">

                <h3>❌ Negative</h3>

                <p><strong>I am not tired.</strong></p>
                <p>مان ٿڪل ناهيان.</p>
                <p>میں تھکا ہوا نہیں ہوں.</p>

                <button class="listen-btn"
                        data-text="I am not tired.">
                    🔊 Listen
                </button>


                <p><strong>He is not at home.</strong></p>
                <p>هو گهر ۾ ناهي.</p>
                <p>وہ گھر میں نہیں ہے.</p>

                <button class="listen-btn"
                        data-text="He is not at home.">
                    🔊 Listen
                </button>


                <p><strong>They were not ready.</strong></p>
                <p>اهي تيار نه هئا.</p>
                <p>وہ تیار نہیں تھے.</p>

                <button class="listen-btn"
                        data-text="They were not ready.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 QUESTIONS
            ======================================= -->

            <div class="lesson-card">

                <h3>❓ Questions</h3>

                <p><strong>Are you ready?</strong></p>
                <p>ڇا تون تيار آهين؟</p>
                <p>کیا تم تیار ہو؟</p>

                <button class="listen-btn"
                        data-text="Are you ready?">
                    🔊 Listen
                </button>


                <p><strong>Is she at home?</strong></p>
                <p>ڇا هوءَ گهر ۾ آهي؟</p>
                <p>کیا وہ گھر میں ہے؟</p>

                <button class="listen-btn"
                        data-text="Is she at home?">
                    🔊 Listen
                </button>


                <p><strong>Were they happy?</strong></p>
                <p>ڇا اهي خوش هئا؟</p>
                <p>کیا وہ خوش تھے؟</p>

                <button class="listen-btn"
                        data-text="Were they happy?">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 HAVE
            ======================================= -->

            <div class="lesson-card">

                <h3>🔹 Pattern 2 — HAVE</h3>

                <div class="pattern">
                    have / has → had → will have
                </div>

                <p><strong>I have money.</strong></p>
                <p>مون وٽ پئسا آهن.</p>
                <p>میرے پاس پیسے ہیں.</p>

                <button class="listen-btn"
                        data-text="I have money.">
                    🔊 Listen
                </button>


                <p><strong>She has a beautiful doll.</strong></p>
                <p>هن وٽ سهڻي گڏي آهي.</p>
                <p>اس کے پاس ایک خوبصورت گڑیا ہے.</p>

                <button class="listen-btn"
                        data-text="She has a beautiful doll.">
                    🔊 Listen
                </button>


                <p><strong>They had bags.</strong></p>
                <p>انهن وٽ ٿيلها هئا.</p>
                <p>ان کے پاس بیگ تھے.</p>

                <button class="listen-btn"
                        data-text="They had bags.">
                    🔊 Listen
                </button>


                <p><strong>I will have money.</strong></p>
                <p>مون وٽ پئسا هوندا.</p>
                <p>میرے پاس پیسے ہوں گے.</p>

                <button class="listen-btn"
                        data-text="I will have money.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 THERE
            ======================================= -->

            <div class="lesson-card">

                <h3>🔹 Pattern 3 — THERE</h3>

                <div class="pattern">
                    There is / There are<br>
                    There was / There were<br>
                    There will be
                </div>

                <p><strong>There is a book on the table.</strong></p>
                <p>ميز تي هڪ ڪتاب آهي.</p>
                <p>میز پر ایک کتاب ہے.</p>

                <button class="listen-btn"
                        data-text="There is a book on the table.">
                    🔊 Listen
                </button>


                <p><strong>There are two students.</strong></p>
                <p>ٻه شاگرد آهن.</p>
                <p>دو طالب علم ہیں.</p>

                <button class="listen-btn"
                        data-text="There are two students.">
                    🔊 Listen
                </button>


                <p><strong>There was a problem.</strong></p>
                <p>هڪ مسئلو هو.</p>
                <p>ایک مسئلہ تھا.</p>

                <button class="listen-btn"
                        data-text="There was a problem.">
                    🔊 Listen
                </button>


                <p><strong>There will be a meeting.</strong></p>
                <p>هڪ گڏجاڻي ٿيندي.</p>
                <p>ایک میٹنگ ہوگی.</p>

                <button class="listen-btn"
                        data-text="There will be a meeting.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 IT
            ======================================= -->

            <div class="lesson-card">

                <h3>🔹 Pattern 4 — IT</h3>

                <div class="pattern">
                    IT = Time • Weather • Distance • Condition • Situation
                </div>

                <p><strong>It's five o'clock.</strong></p>
                <p>پنج وڳيا آهن.</p>
                <p>پانچ بجے ہیں.</p>

                <button class="listen-btn"
                        data-text="It's five o'clock.">
                    🔊 Listen
                </button>


                <p><strong>It's hot today.</strong></p>
                <p>اڄ گرمي آهي.</p>
                <p>آج گرمی ہے.</p>

                <button class="listen-btn"
                        data-text="It's hot today.">
                    🔊 Listen
                </button>


                <p><strong>It's five kilometers from here.</strong></p>
                <p>هتان کان پنج ڪلوميٽر آهي.</p>
                <p>یہاں سے پانچ کلومیٹر ہے.</p>

                <button class="listen-btn"
                        data-text="It's five kilometers from here.">
                    🔊 Listen
                </button>


                <p><strong>It takes five minutes to make tea.</strong></p>
                <p>چانهه ٺاهڻ ۾ پنج منٽ لڳن ٿا.</p>
                <p>چائے بنانے میں پانچ منٹ لگتے ہیں.</p>

                <button class="listen-btn"
                        data-text="It takes five minutes to make tea.">
                    🔊 Listen
                </button>


                <p><strong>It takes me five minutes to cook rice.</strong></p>
                <p>مون کي چانور پچائڻ ۾ پنج منٽ لڳن ٿا.</p>
                <p>مجھے چاول پکانے میں پانچ منٹ لگتے ہیں.</p>

                <button class="listen-btn"
                        data-text="It takes me five minutes to cook rice.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 STATE / CONDITION
            ======================================= -->

            <div class="lesson-card">

                <h3>🔹 State / Condition</h3>

                <p><strong>The shop is open.</strong></p>
                <p>دڪان کليل آهي.</p>
                <p>دکان کھلی ہے.</p>

                <button class="listen-btn"
                        data-text="The shop is open.">
                    🔊 Listen
                </button>


                <p><strong>My mom is awake.</strong></p>
                <p>منهنجي ماءُ جاڳي رهي آهي.</p>
                <p>میری ماں جاگ رہی ہے.</p>

                <button class="listen-btn"
                        data-text="My mom is awake.">
                    🔊 Listen
                </button>


                <p><strong>The baby is asleep.</strong></p>
                <p>ٻار ستل آهي.</p>
                <p>بچہ سویا ہوا ہے.</p>

                <button class="listen-btn"
                        data-text="The baby is asleep.">
                    🔊 Listen
                </button>


                <p><strong>I am exhausted.</strong></p>
                <p>مان تمام گهڻو ٿڪل آهيان.</p>
                <p>میں بہت تھکا ہوا ہوں.</p>

                <button class="listen-btn"
                        data-text="I am exhausted.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 STATE WITH -ING
            ======================================= -->

            <div class="lesson-card">

                <h3>🔹 State / Situation with BE + -ing</h3>

                <p><strong>The cat is sitting.</strong></p>
                <p>ٻلي ويٺي آهي.</p>
                <p>بلی بیٹھی ہے.</p>

                <button class="listen-btn"
                        data-text="The cat is sitting.">
                    🔊 Listen
                </button>


                <p><strong>The girl is sitting.</strong></p>
                <p>ڇوڪري ويٺي آهي.</p>
                <p>لڑکی بیٹھی ہے.</p>

                <button class="listen-btn"
                        data-text="The girl is sitting.">
                    🔊 Listen
                </button>


                <p><strong>The dog is standing.</strong></p>
                <p>ڪتو بيٺو آهي.</p>
                <p>کتا کھڑا ہے.</p>

                <button class="listen-btn"
                        data-text="The dog is standing.">
                    🔊 Listen
                </button>


                <p><strong>The clothes are hanging.</strong></p>
                <p>ڪپڙا ٽنگيل آهن.</p>
                <p>کپڑے لٹکے ہوئے ہیں.</p>

                <button class="listen-btn"
                        data-text="The clothes are hanging.">
                    🔊 Listen
                </button>


                <p><strong>The flowers are blooming.</strong></p>
                <p>گل ٽڙي رهيا آهن.</p>
                <p>پھول کھل رہے ہیں.</p>

                <button class="listen-btn"
                        data-text="The flowers are blooming.">
                    🔊 Listen
                </button>

            </div>


            <!-- ======================================
                 IMPORTANT IDEA
            ======================================= -->

            <div class="lesson-card important">

                <h3>💡 Remember</h3>

                <p>
                    <strong>BE</strong> can describe a state,
                    condition, situation or location.
                </p>

                <p>
                    <strong>HAVE</strong> can show possession.
                </p>

                <p>
                    <strong>THERE</strong> introduces something
                    that exists.
                </p>

                <p>
                    <strong>IT</strong> can represent time,
                    weather, distance, condition or a situation.
                </p>

            </div>


            <!-- ======================================
                 BACK
            ======================================= -->

            <button class="lesson-back"
                    onclick="goHome()">

                ← BACK TO CATEGORIES

            </button>

        </div>

    `;
}


// =====================================================
// LISTEN BUTTONS
// =====================================================

function setupLessonButtons() {

    const buttons =
        document.querySelectorAll(".listen-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const text =
                button.getAttribute("data-text");

            if (!text) {
                return;
            }

            speakEnglish(text);

        });

    });
}


// =====================================================
// TEXT TO SPEECH
// =====================================================

function speakEnglish(text) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Sorry. Your browser does not support English speech."
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


// =====================================================
// GO HOME
// =====================================================

function goHome() {

    window.speechSynthesis.cancel();

    const categoryScreen =
        document.getElementById("category-screen");

    categoryScreen.style.display = "none";

    const mainMenu =
        document.querySelector(".main-menu");

    mainMenu.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// PAGE LOADED
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "LET'S IMPROVE ENGLISH loaded successfully."
        );

    }
);
