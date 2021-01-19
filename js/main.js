'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p')

    const quizSet = shuffle([
        {q: 'FINAL FANTASY Xの主人公の名前は？', c: ['ティーダ', 'クラウド', 'ヴァン']},
        {q: 'FINAL FANTASY VIIでセフィロスが使っている武器の名前は？', c: ['正宗', '村正', 'バスターソード']},
        {q: '次のうちFINAL FANTASYシリーズの登場人物ではないのは誰？', c: ['ビアンカ', 'リュック', 'ホープ']},
        {q: 'FINAL FANTASY XIIが最初に発売されたのはどのハード？', c: ['PlayStation 2', 'PlayStation 3', 'PlayStation']},
        {q: 'FINAL FANTASY VIのラスボスは誰？', c: ['ケフカ', 'シーモア', 'エクスデス']},
        {q: 'FINAL FANTASY Vでバッツが相棒にしていたのは？', c: ['チョコボ', 'カーバンクル', 'モーグリ']},
        {q: 'FINAL FANTASY XIIIのライトニングの本名は？', c: ['エクレール・ファロン', 'セラ・ファロン', 'エミリア・ファロン']},
        {q: 'FINAL FANTASY IXでジタンが所属していた盗賊団の名前は？', c: ['タンタラス', 'アバランチ', 'ダルマスカ']},
    ]);
    let currentNum = 0
    let isAnswered
    let score = 0;

    

    function shuffle(arr) {
       
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {
        if (isAnswered){
            return;
        }
        isAnswered = true;

        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        }else {
            li.classList.add('wrong');
        }

        btn.classList.remove('disabled');
    }

    function setQuiz() {
        isAnswered = false;
        question.textContent = quizSet[currentNum].q;

        while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }


    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => {
            checkAnswer(li);
        });
        choices.appendChild(li);
    });

    if (currentNum == quizSet.length - 1) {
        btn.textContent = 'Show Score';
    }
    }

    setQuiz()

    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');

        if (currentNum === quizSet.length - 1) {
            // console.log(`Score: ${score} / ${quizSet.length}`)
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
            result.classList.remove('hidden');
        }else{
            currentNum++
            setQuiz()
        }

    });

}