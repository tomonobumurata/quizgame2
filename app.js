const quiz = [
  {
    question: '村田智信がやったことのないスポーツは次の内どれ？',
    answers: [
      'カバディ',
      'インディアーカ',
      'ハンドボール',
      'セパタクロー'
    ],
    correct: 'セパタクロー'
  },{
    question: '村田智信がこの世で一番嫌いなものは次の内どれ？',
    answers: [
      'お化け',
      '絶叫系の乗り物',
      '風',
      '汚物'
    ],
    correct: '風'
  },{
    question: '村田智信が呼ばれた事のない呼び方は次の内どれ？',
    answers: [
      '鑑真',
      'インド人',
      'シンドバッド',
      'チュートリアル徳井'
    ],
    correct: '鑑真'
  },{
    question: '村田智信が小中学生の時どうしてもできなかった事は次の内どれ？',
    answers: [
      '親に反抗して悪口を言う',
      'カードゲームの大会で優勝する',
      '学校でうんちをする',
      '人の家の車の上にコーンを置く'
    ],
    correct: '学校でうんちをする'
  },{
    question: '村田智信がこの世で一番好きなものは次の内どれ？',
    answers: [
      '髪の毛',
      'お金',
      'ラーメン',
      '阿部日向子'
    ],
    correct: '阿部日向子'
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義

const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) =>{
if(quiz[quizIndex].correct === e.target.textContent){
     window.alert('正解！！やるやん！');
     score++;
  } else {
     window.alert('不正解ですもっと勉強してください');
  }

  quizIndex++;

  
  if (quizIndex < quizLength) {
     //問題数がまだあればこちらを実行
     setupQuiz();
  } else {
　   //問題数がもうなければこちらを実行
    window.alert('終了！！あなたの正解数は' + score + '/' + quizLength + 'です！！');
  }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}









