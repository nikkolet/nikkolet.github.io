let btn = document.querySelector('#btn');
let playAgain = document.querySelector("#playAgain");
const main = document.querySelector('.container');
const message = pageEles(main, 'div', 'Press Button to Start', 'message');
const output = pageEles(main, 'div', '', 'game');
output.style.display = 'none';
let url = '';
const game = { score: 0 };

if (btn.value == 'fotr') {
    url = 'json/fotrQues.json';
    document.body.style.backgroundImage = "url('./images/fotr_background.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    backgroundBlendMode = 'lighten';

}
if (btn.value == 'ttt') {
    url = 'json/tttQues.json';
    document.body.style.backgroundImage = "url('./images/ttt_background.jpeg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    backgroundBlendMode = 'lighten';
}
if (btn.value == 'rotk') {
    url = 'json/rotkQues.json';
    document.body.style.backgroundImage = "url('./images/lotr_rotk_2_background.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    backgroundBlendMode = 'lighten';
}
output.style.display = 'none';
btn.onclick = loadData;

playAgain.style.display = 'none';

//Make AJAX Request to JSON File and return Data
function loadData() {
    message.style.display = 'block';
    btn.style.display = 'none';
    playAgain.style.display = 'none';
    output.style.display = 'none';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const temp = {
                total: data.length,
                q: data,
                counter: 0,
                quote: data.quote
            }; //Total Number of Questions
            createQuestion(temp);
        })
}

//Create Question - How user progresses within the game
function createQuestion(data) {
    const el = pageEles(output, 'div', '', 'question');
    playAgain.style.display = 'none';
    output.style.display = 'none';
    if (data.q.length == 0) {
        message.innerHTML = `<h1>Game Over</h1><div>${game.score} correct out of ${data.total} questions.</div>`;
        playAgain.style.display = 'block';
    } else {
        const tBtn = pageEles(el, 'button', 'Next', 'next');
        tBtn.onclick = () => {
            el.remove();
            createQuestion(data);
        }
        const question = data.q.shift();
        data.counter++;
        message.textContent = `Question ${data.counter} of ${data.total}`;
        if (data.q.length == 0) {
            tBtn.textContent = 'End Game';
        }
        tBtn.style.display = 'none';
        outputQuestion(question, el, tBtn);
    }

}

//Outputs content of the question
function outputQuestion(question, parent, tBtn) {
    console.log(question);
    const que = pageEles(parent, 'div', `${question.question}?`, 'question');
    const quote = question.quote;
    output.style.display = 'block';
    playAgain.style.display = 'none';
    const arr = question.opt;
    arr.push(question.answer);
    arr.sort(() => {
        return Math.random() - 0.5;
    })
    const btns = pageEles(parent, 'div', '', 'opts');
    arr.forEach(e => {
        const optemp = pageEles(btns, 'button', e, 'btns');
        optemp.onclick = () => {
            if (question.answer == e) {
                message.textContent = 'Correct';
                game.score++;

            } else {
                message.textContent = 'Incorrect';
            }
            const temps = parent.querySelectorAll('.btns');
            temps.forEach(el => {
                el.disabled = true;
                const bgc = (question.answer == el.textContent) ? 'green' : 'red';
                el.style.backgroundColor = bgc;
            })
            tBtn.style.display = 'block';
            parent.append(tBtn);

        }
    })
    console.log(arr);
}

//Creates Elements for the Web Page
//Parameters: parent element, type, HTML, and class content
function pageEles(parent, t, html, c) {
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}