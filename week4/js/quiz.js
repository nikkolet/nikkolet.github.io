const quiz = [
    { riddle: "I am an odd number. Take away one letter and I become even. What number am I?", answer: "seven" },
    { riddle: "What goes up and never comes down?", answer: "age" },
    { riddle: "What word becomes shorter when you add two letters to it?", answer: "short" },
    { riddle: "What is able to travel around the globe, but stays in a corner the whole time?", answer: "stamp" },
    { riddle: "What gets wetter the more it dries?", answer: "towel" }
];

//view object

const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"),
    result: document.getElementById("result"),
    info: document.getElementById("info"),
    start: document.getElementById("start"),
    response: document.querySelector("#response"),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = "block";
    },
    hide(element) {
        element.style.display = "none";
    },
    resetForm() {
        this.response.answer.value = "";
        this.response.answer.focus();
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, "");
        this.render(this.info, "");
        this.resetForm();
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

const game = {
    start(quiz) {
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },
    ask(name) {
        if (this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `${this.question.riddle}`;
            view.render(view.question, question);
        } else {
            this.gameOver();
        }
    },
    check(event) {
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.answer;
        if (response === answer) {
            view.render(view.result, "Correct!", { "class": "correct" });
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer is ${answer}.`, { "class": "wrong" });
        }
        view.resetForm();
        this.ask();
    },
    gameOver() {
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`);
        view.teardown();
    }
}

view.start.addEventListener("click", () => game.start(quiz), false);
view.response.addEventListener("submit", (event) => game.check(event), false);
view.hide(view.response);