
// ======================================================
// 📚 LET'S IMPROVE ENGLISH
// CATEGORY 4 — SENTENCE PATTERNS
// ======================================================

const sentencePatterns = [

    // ==================================================
    // 1. BE — PRESENT
    // ==================================================

    {
        title: "Pattern 1 — BE",
        pattern: "Subject + is / am / are + Complement",
        explanation: "Used to say what someone or something is, or to describe a state or condition.",
        examples: [
            "I am a teacher.",
            "He is happy.",
            "She is tired.",
            "They are ready.",
            "We are students."
        ]
    },


    // ==================================================
    // 2. BE — PAST
    // ==================================================

    {
        title: "Pattern 2 — BE (Past)",
        pattern: "Subject + was / were + Complement",
        explanation: "Used to talk about a past state, condition, identity or situation.",
        examples: [
            "I was tired.",
            "He was a teacher.",
            "She was happy.",
            "They were ready.",
            "We were students."
        ]
    },


    // ==================================================
    // 3. BE — FUTURE
    // ==================================================

    {
        title: "Pattern 3 — BE (Future)",
        pattern: "Subject + will be + Complement",
        explanation: "Used to talk about a future state, condition, identity or situation.",
        examples: [
            "I will be ready.",
            "He will be a teacher.",
            "She will be happy.",
            "They will be successful.",
            "We will be there."
        ]
    },


    // ==================================================
    // 4. HAVE
    // ==================================================

    {
        title: "Pattern 4 — HAVE",
        pattern: "Subject + have / has + Object",
        explanation: "Used to show possession, relationship or something that someone has.",
        examples: [
            "I have a book.",
            "You have a pen.",
            "He has a car.",
            "She has a brother.",
            "They have a house."
        ]
    },


    // ==================================================
    // 5. HAD
    // ==================================================

    {
        title: "Pattern 5 — HAD",
        pattern: "Subject + had + Object",
        explanation: "Used to talk about possession or something someone had in the past.",
        examples: [
            "I had a book.",
            "He had a car.",
            "She had a problem.",
            "They had a house.",
            "We had enough time."
        ]
    },


    // ==================================================
    // 6. WILL HAVE
    // ==================================================

    {
        title: "Pattern 6 — WILL HAVE",
        pattern: "Subject + will have + Object",
        explanation: "Used to talk about possession or something someone will have in the future.",
        examples: [
            "I will have a new book.",
            "He will have a car.",
            "She will have a new job.",
            "They will have a house.",
            "We will have enough time."
        ]
    },


    // ==================================================
    // 7. THERE IS / THERE ARE
    // ==================================================

    {
        title: "Pattern 7 — THERE + BE",
        pattern: "There + is / are + Noun",
        explanation: "Used to say that someone or something exists or is present.",
        examples: [
            "There is a book on the table.",
            "There is a teacher in the room.",
            "There are two students here.",
            "There are many trees outside.",
            "There is a problem."
        ]
    },


    // ==================================================
    // 8. THERE WAS / THERE WERE
    // ==================================================

    {
        title: "Pattern 8 — THERE + BE (Past)",
        pattern: "There + was / were + Noun",
        explanation: "Used to say that someone or something existed or was present in the past.",
        examples: [
            "There was a book on the table.",
            "There was a problem.",
            "There were two students here.",
            "There were many people outside.",
            "There was a meeting yesterday."
        ]
    },


    // ==================================================
    // 9. THERE WILL BE
    // ==================================================

    {
        title: "Pattern 9 — THERE + BE (Future)",
        pattern: "There + will be + Noun",
        explanation: "Used to say that someone or something will exist or be present in the future.",
        examples: [
            "There will be a meeting tomorrow.",
            "There will be a new school.",
            "There will be many students.",
            "There will be a problem.",
            "There will be enough time."
        ]
    },


    // ==================================================
    // 10. IT IS
    // ==================================================

    {
        title: "Pattern 10 — IT + BE",
        pattern: "It + is / was / will be + Complement",
        explanation: "Used to talk about a situation, condition, time, weather or general fact.",
        examples: [
            "It is hot.",
            "It is cold.",
            "It was difficult.",
            "It is easy.",
            "It will be better."
        ]
    },


    // ==================================================
    // 11. SUBJECT + VERB
    // ==================================================

    {
        title: "Pattern 11 — Subject + Verb",
        pattern: "Subject + Verb",
        explanation: "A basic action sentence can contain a subject and an action verb.",
        examples: [
            "Birds fly.",
            "Children play.",
            "He runs.",
            "She sings.",
            "They work."
        ]
    },


    // ==================================================
    // 12. SUBJECT + VERB + OBJECT
    // ==================================================

    {
        title: "Pattern 12 — Subject + Verb + Object",
        pattern: "Subject + Verb + Object",
        explanation: "The subject performs an action on an object.",
        examples: [
            "I read a book.",
            "He opened the door.",
            "She wrote a letter.",
            "They play cricket.",
            "We learn English."
        ]
    },


    // ==================================================
    // 13. SUBJECT + VERB + COMPLEMENT
    // ==================================================

    {
        title: "Pattern 13 — Subject + Verb + Complement",
        pattern: "Subject + Linking Verb + Complement",
        explanation: "The complement gives information about the subject.",
        examples: [
            "He became a teacher.",
            "She looks happy.",
            "The food smells good.",
            "He feels tired.",
            "The sky became dark."
        ]
    },


    // ==================================================
    // 14. SUBJECT + VERB + INDIRECT OBJECT + DIRECT OBJECT
    // ==================================================

    {
        title: "Pattern 14 — Two Objects",
        pattern: "Subject + Verb + Indirect Object + Direct Object",
        explanation: "Some verbs can take a person and a thing as two objects.",
        examples: [
            "I gave him a book.",
            "She sent me a letter.",
            "He bought her a gift.",
            "They showed us the way.",
            "We taught them English."
        ]
    },


    // ==================================================
    // 15. CAN
    // ==================================================

    {
        title: "Pattern 15 — CAN",
        pattern: "Subject + can + Base Verb",
        explanation: "Used to express ability, possibility or permission.",
        examples: [
            "I can swim.",
            "He can drive.",
            "She can speak English.",
            "They can help us.",
            "We can do it."
        ]
    },


    // ==================================================
    // 16. COULD
    // ==================================================

    {
        title: "Pattern 16 — COULD",
        pattern: "Subject + could + Base Verb",
        explanation: "Used for past ability, polite requests and possibility.",
        examples: [
            "I could swim when I was young.",
            "He could help us.",
            "She could speak English.",
            "Could you help me?",
            "Could I come in?"
        ]
    },


    // ==================================================
    // 17. MAY
    // ==================================================

    {
        title: "Pattern 17 — MAY",
        pattern: "Subject + may + Base Verb",
        explanation: "Used to express possibility or permission.",
        examples: [
            "I may go.",
            "He may come.",
            "She may be busy.",
            "They may help us.",
            "May I come in?"
        ]
    },


    // ==================================================
    // 18. MUST
    // ==================================================

    {
        title: "Pattern 18 — MUST",
        pattern: "Subject + must + Base Verb",
        explanation: "Used to express strong necessity or obligation.",
        examples: [
            "You must study.",
            "We must work.",
            "He must go.",
            "She must be careful.",
            "They must obey the rules."
        ]
    },


    // ==================================================
    // 19. SHOULD
    // ==================================================

    {
        title: "Pattern 19 — SHOULD",
        pattern: "Subject + should + Base Verb",
        explanation: "Used to give advice or say what is right or advisable.",
        examples: [
            "You should study.",
            "He should work hard.",
            "She should rest.",
            "They should help others.",
            "We should respect our teachers."
        ]
    },


    // ==================================================
    // 20. WANT
    // ==================================================

    {
        title: "Pattern 20 — WANT",
        pattern: "Subject + want / wants + Object",
        explanation: "Used to express a desire for someone or something.",
        examples: [
            "I want water.",
            "He wants a book.",
            "She wants a pen.",
            "They want help.",
            "We want peace."
        ]
    },


    // ==================================================
    // 21. WANT TO
    // ==================================================

    {
        title: "Pattern 21 — WANT TO",
        pattern: "Subject + want / wants + to + Verb",
        explanation: "Used to express a desire to do something.",
        examples: [
            "I want to learn.",
            "He wants to go.",
            "She wants to study.",
            "They want to play.",
            "We want to improve."
        ]
    },


    // ==================================================
    // 22. LIKE TO
    // ==================================================

    {
        title: "Pattern 22 — LIKE TO",
        pattern: "Subject + like / likes + to + Verb",
        explanation: "Used to talk about things someone enjoys doing.",
        examples: [
            "I like to read.",
            "He likes to swim.",
            "She likes to sing.",
            "They like to play.",
            "We like to learn."
        ]
    },


    // ==================================================
    // 23. NEED TO
    // ==================================================

    {
        title: "Pattern 23 — NEED TO",
        pattern: "Subject + need / needs + to + Verb",
        explanation: "Used to express necessity.",
        examples: [
            "I need to study.",
            "He needs to work.",
            "She needs to rest.",
            "They need to learn.",
            "We need to hurry."
        ]
    },


    // ==================================================
    // 24. USED TO
    // ==================================================

    {
        title: "Pattern 24 — USED TO",
        pattern: "Subject + used to + Base Verb",
        explanation: "Used to talk about a past habit or situation that is no longer true.",
        examples: [
            "I used to play cricket.",
            "He used to live here.",
            "She used to teach English.",
            "They used to work together.",
            "We used to visit them."
        ]
    },


    // ==================================================
    // 25. WANT SOMEONE TO
    // ==================================================

    {
        title: "Pattern 25 — WANT SOMEONE TO",
        pattern: "Subject + want + Object + to + Verb",
        explanation: "Used when one person wants another person to do something.",
        examples: [
            "I want you to learn.",
            "He wants me to come.",
            "She wants him to help.",
            "They want us to stay.",
            "We want them to work."
        ]
    },


    // ==================================================
    // 26. ASK SOMEONE TO
    // ==================================================

    {
        title: "Pattern 26 — ASK SOMEONE TO",
        pattern: "Subject + ask + Object + to + Verb",
        explanation: "Used when someone asks another person to do something.",
        examples: [
            "I asked him to come.",
            "She asked me to wait.",
            "He asked us to help.",
            "They asked her to stay.",
            "We asked them to sit."
        ]
    },


    // ==================================================
    // 27. TELL SOMEONE TO
    // ==================================================

    {
        title: "Pattern 27 — TELL SOMEONE TO",
        pattern: "Subject + tell + Object + to + Verb",
        explanation: "Used when someone tells another person to do something.",
        examples: [
            "I told him to wait.",
            "She told me to sit.",
            "He told us to work.",
            "They told her to come.",
            "We told them to stop."
        ]
    },


    // ==================================================
    // 28. LET SOMEONE
    // ==================================================

    {
        title: "Pattern 28 — LET",
        pattern: "Subject + let + Object + Base Verb",
        explanation: "Used to allow someone to do something.",
        examples: [
            "Let me go.",
            "Let him speak.",
            "Let her try.",
            "Let them play.",
            "Let us help."
        ]
    },


    // ==================================================
    // 29. MAKE SOMEONE
    // ==================================================

    {
        title: "Pattern 29 — MAKE",
        pattern: "Subject + make + Object + Base Verb",
        explanation: "Used when someone causes another person to do something.",
        examples: [
            "The teacher made him study.",
            "The story made me laugh.",
            "They made us wait.",
            "He made her cry.",
            "The teacher made them work."
        ]
    },


    // ==================================================
    // 30. THERE + BE + PLACE
    // ==================================================

    {
        title: "Pattern 30 — THERE + BE + PLACE",
        pattern: "There + is / are + Noun + Place",
        explanation: "Used to say that someone or something exists in a particular place.",
        examples: [
            "There is a book on the table.",
            "There is a school near my house.",
            "There are children in the room.",
            "There are trees in the garden.",
            "There is a shop beside the school."
        ]
    }

];


// ======================================================
// END OF SENTENCE PATTERNS DATA
// ======================================================
