// 👉 Questions (sample - tum apne 100 questions paste karo)
const quiz = [
{question:"What is the capital of India?", options:["Mumbai","Delhi","Kolkata","Chennai"], answer:"Delhi"},
{question:"What is the national animal of India?", options:["Lion","Tiger","Elephant","Bear"], answer:"Tiger"},
{question:"What is the national bird of India?", options:["Pigeon","Peacock","Parrot","Eagle"], answer:"Peacock"},
{question:"What is the national flower of India?", options:["Rose","Lotus","Sunflower","Jasmine"], answer:"Lotus"},
{question:"What is the national sport of India?", options:["Cricket","Hockey","Football","Kabaddi"], answer:"Hockey"},

{question:"Which is the largest ocean in the world?", options:["Atlantic","Indian","Pacific","Arctic"], answer:"Pacific"},
{question:"In which direction does the sun rise?", options:["North","South","East","West"], answer:"East"},
{question:"What is the natural satellite of Earth?", options:["Mars","Moon","Venus","Sun"], answer:"Moon"},
{question:"Which is the longest river in India?", options:["Ganga","Yamuna","Narmada","Godavari"], answer:"Ganga"},
{question:"Where is the Taj Mahal located?", options:["Delhi","Agra","Jaipur","Lucknow"], answer:"Agra"},

{question:"Who was the first Prime Minister of India?", options:["Nehru","Gandhi","Patel","Rajendra Prasad"], answer:"Nehru"},
{question:"What is the tenure of the President of India?", options:["4 years","5 years","6 years","7 years"], answer:"5 years"},
{question:"When was the Constitution of India implemented?", options:["1947","1950","1952","1960"], answer:"1950"},
{question:"How many houses are there in Indian Parliament?", options:["1","2","3","4"], answer:"2"},
{question:"Who designed the Indian national flag?", options:["Gandhi","Nehru","Pingali Venkayya","Patel"], answer:"Pingali Venkayya"},

{question:"What is the chemical formula of water?", options:["H2O","CO2","O2","NaCl"], answer:"H2O"},
{question:"The Sun is a?", options:["Planet","Star","Satellite","Comet"], answer:"Star"},
{question:"How many bones are in the human body?", options:["200","206","210","220"], answer:"206"},
{question:"Which is the lightest element?", options:["Oxygen","Hydrogen","Helium","Nitrogen"], answer:"Hydrogen"},
{question:"Which is a source of Vitamin C?", options:["Milk","Lemon","Rice","Bread"], answer:"Lemon"},

{question:"What is the brain of a computer?", options:["RAM","CPU","Hard Disk","Monitor"], answer:"CPU"},
{question:"What does HTML stand for?", options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language","None"], answer:"Hyper Text Markup Language"},
{question:"What does WWW stand for?", options:["World Wide Web","World Web Wide","Web World Wide","None"], answer:"World Wide Web"},
{question:"How many keys are in a standard keyboard?", options:["101","104","110","120"], answer:"104"},
{question:"Mouse is which type of device?", options:["Input","Output","Storage","None"], answer:"Input"},

{question:"Largest state in India by area?", options:["UP","MP","Rajasthan","Bihar"], answer:"Rajasthan"},
{question:"Smallest state in India?", options:["Goa","Sikkim","Tripura","Manipur"], answer:"Goa"},
{question:"Largest city in India?", options:["Delhi","Mumbai","Kolkata","Chennai"], answer:"Mumbai"},
{question:"Who wrote the national anthem of India?", options:["Tagore","Gandhi","Nehru","Patel"], answer:"Tagore"},
{question:"When was Jana Gana Mana first sung?", options:["1911","1947","1950","1920"], answer:"1911"},

{question:"Shape of Earth?", options:["Round","Flat","Oval","Triangle"], answer:"Oval"},
{question:"Largest continent?", options:["Asia","Africa","Europe","Australia"], answer:"Asia"},
{question:"Currency of India?", options:["Rupee","Dollar","Euro","Yen"], answer:"Rupee"},
{question:"Father of Railways?", options:["James Watt","George Stephenson","Newton","Einstein"], answer:"George Stephenson"},
{question:"Who discovered gravity?", options:["Newton","Einstein","Galileo","Tesla"], answer:"Newton"},

{question:"National tree of India?", options:["Neem","Peepal","Banyan","Mango"], answer:"Banyan"},
{question:"National song of India?", options:["Jana Gana Mana","Vande Mataram","Sare Jahan Se Achha","None"], answer:"Vande Mataram"},
{question:"When was Chandrayaan-1 launched?", options:["2005","2008","2010","2012"], answer:"2008"},
{question:"Where is ISRO headquarters?", options:["Delhi","Mumbai","Bangalore","Chennai"], answer:"Bangalore"},
{question:"First satellite of India?", options:["Aryabhata","Bhaskara","Rohini","INSAT"], answer:"Aryabhata"},

{question:"Highest mountain in the world?", options:["K2","Everest","Kangchenjunga","Nanga Parbat"], answer:"Everest"},
{question:"Longest river in the world?", options:["Nile","Amazon","Ganga","Yangtze"], answer:"Nile"},
{question:"Largest country by area?", options:["USA","China","Russia","India"], answer:"Russia"},
{question:"When was UNO established?", options:["1945","1950","1939","1960"], answer:"1945"},
{question:"Where is WHO headquarters?", options:["India","USA","Geneva","London"], answer:"Geneva"},

{question:"Longest dam in India?", options:["Bhakra","Tehri","Hirakud","Sardar Sarovar"], answer:"Hirakud"},
{question:"Highest dam in India?", options:["Bhakra","Tehri","Nagarjuna","Rihand"], answer:"Tehri"},
{question:"Fastest animal?", options:["Lion","Cheetah","Horse","Dog"], answer:"Cheetah"},
{question:"Largest mammal?", options:["Elephant","Blue Whale","Giraffe","Bear"], answer:"Blue Whale"},
{question:"Smallest country?", options:["Monaco","Vatican City","Nepal","Bhutan"], answer:"Vatican City"},

{question:"Total states in India?", options:["28","29","30","27"], answer:"28"},
{question:"Union territories in India?", options:["6","7","8","9"], answer:"8"},
{question:"Total Lok Sabha members?", options:["545","550","500","530"], answer:"545"},
{question:"Total Rajya Sabha members?", options:["250","245","240","230"], answer:"245"},
{question:"Where is Supreme Court of India?", options:["Mumbai","Delhi","Kolkata","Chennai"], answer:"Delhi"},

{question:"First man on the Moon?", options:["Armstrong","Aldrin","Yuri","Columbus"], answer:"Armstrong"},
{question:"First President of India?", options:["Rajendra Prasad","Nehru","Gandhi","Patel"], answer:"Rajendra Prasad"},
{question:"When was Mahatma Gandhi born?", options:["1869","1870","1880","1890"], answer:"1869"},
{question:"Quit India Movement year?", options:["1942","1940","1930","1920"], answer:"1942"},
{question:"Jallianwala Bagh massacre year?", options:["1919","1920","1930","1942"], answer:"1919"},

{question:"Which planet is called Red Planet?", options:["Earth","Mars","Venus","Jupiter"], answer:"Mars"},
{question:"Largest planet?", options:["Saturn","Jupiter","Mars","Venus"], answer:"Jupiter"},
{question:"Smallest planet?", options:["Mercury","Mars","Venus","Earth"], answer:"Mercury"},
{question:"Number of planets in solar system?", options:["7","8","9","10"], answer:"8"},
{question:"How many rings does Saturn have?", options:["5","7","10","12"], answer:"7"},

{question:"Longest bone in human body?", options:["Femur","Tibia","Humerus","Radius"], answer:"Femur"},
{question:"Largest organ?", options:["Heart","Skin","Lungs","Brain"], answer:"Skin"},
{question:"Why is blood red?", options:["Hemoglobin","Oxygen","Carbon","Water"], answer:"Hemoglobin"},
{question:"Heart has how many chambers?", options:["2","3","4","5"], answer:"4"},
{question:"Process of breathing?", options:["Digestion","Respiration","Circulation","Excretion"], answer:"Respiration"},

{question:"Largest railway station in India?", options:["Delhi","Howrah","Mumbai","Chennai"], answer:"Howrah"},
{question:"Busiest airport in India?", options:["Delhi","Mumbai","Bangalore","Chennai"], answer:"Delhi"},
{question:"First train in India ran in?", options:["1853","1860","1870","1880"], answer:"1853"},
{question:"First metro city in India?", options:["Delhi","Kolkata","Mumbai","Chennai"], answer:"Kolkata"},
{question:"First woman Prime Minister of India?", options:["Indira Gandhi","Sarojini","Kiran Bedi","Sushma"], answer:"Indira Gandhi"},

{question:"Olympics are held every?", options:["2","3","4","5"], answer:"4"},
{question:"Balls in one cricket over?", options:["5","6","7","8"], answer:"6"},
{question:"Players in football team?", options:["9","10","11","12"], answer:"11"},
{question:"Players in hockey team?", options:["9","10","11","12"], answer:"11"},
{question:"Grand Slam tournaments in tennis?", options:["2","3","4","5"], answer:"4"},
{question:"Which is the smallest continent?", options:["Asia","Australia","Europe","Africa"], answer:"Australia"},
{question:"Which gas do plants absorb?", options:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], answer:"Carbon Dioxide"},
{question:"Who invented the telephone?", options:["Newton","Einstein","Alexander Graham Bell","Tesla"], answer:"Alexander Graham Bell"},
{question:"Which planet is closest to the Sun?", options:["Earth","Mars","Mercury","Venus"], answer:"Mercury"},
{question:"What is the boiling point of water?", options:["90°C","100°C","80°C","120°C"], answer:"100°C"},

{question:"Which is the largest desert?", options:["Sahara","Thar","Gobi","Kalahari"], answer:"Sahara"},
{question:"Which country is known as Land of Rising Sun?", options:["China","Japan","Korea","Thailand"], answer:"Japan"},
{question:"Who wrote Ramayana?", options:["Valmiki","Vyas","Kalidas","Tulsidas"], answer:"Valmiki"},
{question:"Which is the fastest bird?", options:["Eagle","Falcon","Parrot","Owl"], answer:"Falcon"},
{question:"Which is the largest island?", options:["Greenland","Iceland","Sri Lanka","Madagascar"], answer:"Greenland"},

{question:"Which vitamin is from sunlight?", options:["A","B","C","D"], answer:"D"},
{question:"Which organ purifies blood?", options:["Heart","Liver","Kidney","Lungs"], answer:"Kidney"},
{question:"Which is the hardest natural substance?", options:["Gold","Iron","Diamond","Silver"], answer:"Diamond"},
{question:"Which country hosted first Olympics?", options:["USA","Greece","UK","France"], answer:"Greece"},
{question:"Which is the largest ocean?", options:["Atlantic","Indian","Pacific","Arctic"], answer:"Pacific"},

{question:"Which is the national fruit of India?", options:["Apple","Banana","Mango","Orange"], answer:"Mango"},
{question:"Who is known as Father of Nation (India)?", options:["Nehru","Gandhi","Patel","Bose"], answer:"Gandhi"},
{question:"Which is the tallest animal?", options:["Elephant","Giraffe","Horse","Camel"], answer:"Giraffe"},
{question:"Which gas do humans need to breathe?", options:["Carbon Dioxide","Oxygen","Nitrogen","Hydrogen"], answer:"Oxygen"},
{question:"Which is the largest planet?", options:["Earth","Mars","Jupiter","Saturn"], answer:"Jupiter"}
];
let index = 0;
let score = 0;
let answered = false;

// 👉 Button connect
document.getElementById("nextBtn").addEventListener("click", nextQuestion);

// 👉 Load Question
function loadQuestion() {
  answered = false;

  let q = quiz[index];

  document.getElementById("question").innerText = q.question;
  document.getElementById("progress").innerText = `Question ${index+1}/${quiz.length}`;
  document.getElementById("score").innerText = `Score: ${score}`;
  document.getElementById("progress-fill").style.width = ((index / quiz.length) * 100) + "%";

  let optionsHTML = "";
  q.options.forEach(option => {
    optionsHTML += `<button class="option-btn">${option}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;

  let buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      selectAnswer(btn, btn.innerText);
    });
  });
}

// 👉 Select Answer
function selectAnswer(btn, selected) {
  if (answered) return;

  answered = true;

  let correct = quiz[index].answer;

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }

  let buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(b => {
    if (b.innerText === correct) {
      b.classList.add("correct");
    }
  });
}

// 👉 Next Question
function nextQuestion() {

  if (!answered) {
    alert("Select answer first!");
    return;
  }

  index++;

  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML = `
      <h2>Quiz Finished 🎉</h2>
      <h3>Your Score: ${score}/${quiz.length}</h3>
      <button onclick="location.reload()">Restart</button>
    `;
  }
}

// 👉 Start
loadQuestion();