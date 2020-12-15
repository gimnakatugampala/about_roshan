const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');
const container = document.querySelector('.container');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish & Restart';
            startButton.classList.remove('hide')
            score.innerText = 0;
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        container.style.color = '#fff';
        container.style.background = 'transparent';
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        container.style.color = '#fff';
        container.style.background = 'transparent';
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"His Hardest Subject?",
        answers:[
            {text:'Physics',correct:false},
            {text:'Chemistry',correct:false},
            {text:'Bussiness Studies',correct:true},
            {text:'IT',correct:false}
        ]
    },
    {
        questions:"Most Used App ?",
        answers:[
            {text:'PUBG',correct:false},
            {text:'Youtube',correct:true},
            {text:'Instagram',correct:false},
            {text:'Whatsapp',correct:false},
        ]
    },
    {
        questions:"His Dream Job?",
        answers:[
            {text:'Not Found',correct:true},
            {text:'Enterprenur',correct:false},
            {text:'CEO of Company',correct:false},
            {text:'Economist',correct:false}
        ]
    },
    {
        questions:"Most Visited Websites ?",
        answers:[
            {text:'Facebook and Youtube',correct:false},
            {text:'Pirate Bay and Mirosoft Teams',correct:true},
            {text:'Instagram and Whatsapp',correct:false},
            {text:'Pornhub and Horapusa',correct:false}
        ]
    },
    {
        questions:"A Famous Person who inspired him?",
        answers:[
            {text:'Steve Jobs',correct:false},
            {text:'Kevin Systrom',correct:false},
            {text:'Jan Koum',correct:true},
            {text:'Jeff Bezos',correct:false}
        ]
    },
    {
        questions:"A School teachers who he learnt alot from ?",
        answers:[
            {text:'Ruwani teacher and hasanga teacher',correct:false},
            {text:'Manjula Sir and Manju teacher',correct:true},
            {text:'Nilan Sir and Nath Sir',correct:false},
            {text:'Seneviratne teacher and Lasitha Sir',correct:false}
        ]
    },
    {
        questions:"Class teacher who he learnt a lot from ?",
        answers:[
            {text:'Achini teacher',correct:false},
            {text:'Kapila Sir',correct:true},
            {text:'Sathsara Sir',correct:false},
            {text:'Subodhani teacher',correct:false}
        ]
    },
    {
        questions:"A Girl we matched him  with?",
        answers:[
            {text:'Kaveesha Dahanayake',correct:false},
            {text:'Medanee Panagoda',correct:false},
            {text:'Lithumi',correct:false},
            {text:'No One',correct:true}
        ]
    },
    {
        questions:"Best day of his life?",
        answers:[
            {text:'The release day of Spiderman Far from Home',correct:false},
            {text:'The release day of Avengers Infinity War',correct:false},
            {text:'The release day of Black Panther',correct:false},
            {text:'The release day of Avengers Endgame',correct:true}
        ]
    },
    {
        questions:"His Favorite Subject ?",
        answers:[
            {text:'Accounting',correct:true},
            {text:'IT',correct:false},
            {text:'Economics',correct:false},
            {text:'English',correct:false}
        ]
    },
    {
        questions:"An Industry he is passionate about?",
        answers:[
            {text:'Energy',correct:false},
            {text:'Fashion',correct:false},
            {text:'Tourism',correct:true},
            {text:'Film',correct:false}
        ]
    },
    {
        questions:"Schoolmate who educates him?",
        answers:[
            {text:'Munaj',correct:false},
            {text:'Sandro',correct:true},
            {text:'Teran',correct:false},
            {text:'Saduni',correct:false}
        ]
    },
    {
        questions:"Schoolmate that challenges him ?",
        answers:[
            {text:'Himself',correct:true},
            {text:'Sandro',correct:false},
            {text:'Kaw',correct:false},
            {text:'Sanduni',correct:false}
        ]
    },
    {
        questions:"Schoolmate that makes him laugh ?",
        answers:[
            {text:'Adhya and Sanduni',correct:false},
            {text:'Teran and Sahasra',correct:true},
            {text:'Sahassrika and Migara',correct:false},
            {text:'Sandro and Bryan',correct:false}
        ]
    },
    {
        questions:"Famous Person he is willing to meet?",
        answers:[
            {text:'Elon Musk',correct:false},
            {text:'Donald Trump',correct:false},
            {text:'Peter Dinklage',correct:true},
            {text:'Jeff Bezos',correct:false}
        ]
    },
    {
        questions:"One Person you can't live without ?",
        answers:[
            {text:'Father',correct:false},
            {text:'Sister',correct:false},
            {text:'Grandma',correct:false},
            {text:'Mother',correct:true}
        ]
    },
    {
        questions:"Favorite Brand ?",
        answers:[
            {text:'Giorgio Armani',correct:true},
            {text:'Calvin klein',correct:false},
            {text:'Tommy Hilfiger',correct:false},
            {text:"Victoria's Secret",correct:false}
        ]
    },
    {
        questions:"Favorite place to visit ?",
        answers:[
            {text:'London',correct:false},
            {text:'Finland',correct:true},
            {text:'Switzerland',correct:false},
            {text:'Japan',correct:false}
        ]
    },
    {
        questions:"A Movie that inspires him ?",
        answers:[
            {text:'21 bridges',correct:false},
            {text:'Not yet Found',correct:true},
            {text:'Hitman Agent 47',correct:false},
            {text:'Kingsman',correct:false}
        ]
    },
    {
        questions:"His Current Job ?",
        answers:[
            {text:'Student',correct:false},
            {text:'Teacher',correct:false},
            {text:'Freelancer',correct:false},
            {text:'Not yet Found',correct:true}
        ]
    },
]