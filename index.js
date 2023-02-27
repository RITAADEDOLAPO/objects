//QUESTION 1
function InstagramPost(authorHandle, content, imageUrl, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageUrl = imageUrl;
    this.views = views;
    this.likes = likes;
}

//QUESTION 2
const post1 = new InstagramPost ("benedicta", "DM me to place order for your dresses at affordable prices", "https://www.instagram.com/", 150, 70);
const post2 = new InstagramPost ("thisisbabajide", "out here to vote, doing my civic duty", "https://www.instagram.com/", 120, 65);
console.log({post1});
console.log({post2});


//QUESTION 3a
function createPerson(name, age, location) {
    return {
      name,
      age,
      location
    };
  }
  
  const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
  console.log({musa})


//QUESTION 3b
function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
  
  const musaScores = createJambScores(70, 85, 82, 94);
  musa.jamb_scores = musaScores;
  console.log({musaScores});

//QUESTION 4
    //1. Using the spread operator
    const obj1 = {'name': 'Fola', 'designer': 'prada', 'cars': 5};
    const obj2 = { ...obj1 };
    console.log({obj2}); // {'name': 'Fola', 'designer': 'prada', 'cars': 5}

    //2. Using the object.assign()
    const obj3 = {'name':'Beatrice', 'designer': 'gucci', 'cars': 2};
    const obj4 = Object.assign({}, obj3);
    console.log({obj4}); // {'name':'Beatrice', 'designer': 'gucci', 'cars': 2}

    //3.Using the JSON.parse() and JSON.stringify()
    const obj5 = {'name':'Tunrayo', 'designer': 'Louis Vuitton', 'cars': 5};
    const obj6 = JSON.parse(JSON.stringify(obj5));
    console.log({obj6}); // {'name':'Tunrayo', 'designer': 'Louis Vuitton', 'cars': 5}


//QUESTION 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 

for (const party in presidentialCandidates) {
    const candidate = presidentialCandidates[party];
    console.log(candidate + "is the presidential candidate of " + party);
  }
  


