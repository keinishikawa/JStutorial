const quiz = [
    {
        question : "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
        answers :[
            "スーパーファミコン",
            "PS2",
            "Switch",
            "DS"    
        ],
        correct : "DS"
    },{
        question : "世界最強のテニスプレイヤーは誰？",
        answers :[
            "ジョコビッチ",
            "フェデラー",
            "ナダル",
            "マレー"    
        ],
        correct : "フェデラー"
    },{
        question : "スノーボードメーカーでないのはどれ？",
        answers :[
            "バートン",
            "サロモン",
            "ノーベンバー",
            "ウィルソン"    
        ],
        correct : "ウィルソン"
    }
];

const quizLength = quiz.length;
let quizIndex=0;
let score = 0;

const $button = document.getElementsByTagName("button");

//定数の文字列をHTMLに反映させる

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex =　0;
    while(buttonIndex < $button.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }   
}
setupQuiz();



const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解");
        score++;
    }else{
        window.alert("不正解");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert("終了。あなたの正解数は" + score + "/" + quizLength + "です");
    }
}

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while(handleIndex < $button.length){
    $button[handleIndex].addEventListener("click",(e)=>{
        clickHandler(e);
    });
    handleIndex++;
           
}