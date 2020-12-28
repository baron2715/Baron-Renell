
var firebaseConfig = {
    apiKey: "AIzaSyCaqxCekNwVPJCmbZ__B1-W--J1YryzUMU",
    authDomain: "minigame-c66cf.firebaseapp.com",
    projectId: "minigame-c66cf",
    storageBucket: "minigame-c66cf.appspot.com",
    messagingSenderId: "1012527643715",
    appId: "1:1012527643715:web:ebc5ee30721836c2fde8f6",
    measurementId: "G-KLZ93P9KL0"
  };

 var app = firebase.initializeApp(firebaseConfig);
         db = firebase.firestore(app);
         firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });


        const submitPlayers = document.querySelector("#submit_btn");
        const name = document.querySelector("#name");
        const leaderBoard = document.querySelector("#leaderBoard");
        const score = document.querySelector("#demo2");


db.collection('players').orderBy('score', "desc").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
        changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);}
    })
})

function renderCafe(doc){
    let tr = document.createElement('tr');
    let name = document.createElement('span');
    let score = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    score.textContent = doc.data().score;

    tr.appendChild(name);
    tr.appendChild(score);

    leaderBoard.appendChild(tr);
}



function display(){
    document.getElementById('table').style.display = "block";
}


submitPlayers.addEventListener("click",function(){
    if( document.getElementById("name").value != ''){
    //e.preventDefault();
    db.collection('players').add({
    name: name.value,
    score: parseInt(score.value)
    });
  }
});

