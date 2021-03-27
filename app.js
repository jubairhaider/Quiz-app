//first-quiz
const modal = document.querySelector(".modal");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
let score = 0;
let quizes = 0;

const quiz1 = document.querySelector("#section-1 ol");
quiz1.addEventListener("click", (e) => {
  const option = e.target.id;
  quizes++;
  if (option == "sec-1-op-3") {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-1").innerHTML =
      '<h2 style="color:limegreen">You are right</h2>';
    score++;
    
  } else {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-1").innerHTML =
      '<h2 style="color:red">You are wrong</h2>';
  }
  if(quizes === 4){
    submit.style.display = "block";
  }
});
const quiz2 = document.querySelector("#section-2 ol");
quiz2.addEventListener("click", (e) => {
  quizes++;
  const option = e.target.id;
  if (option == "sec-2-op-1") {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-2").innerHTML =
      '<h2 style="color:limegreen">You are right</h2>';
    score++;
    
  } else {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-2").innerHTML =
      '<h2 style="color:red">You are wrong</h2>';
    
  }
  if(quizes === 4){
    submit.style.display = "block";
  }
});

const quiz3 = document.querySelector("#section-3 ol");
quiz3.addEventListener("click", (e) => {
  quizes++;
  const option = e.target.id;
  if (option == "sec-3-op-4") {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-3").innerHTML =
      '<h2 style="color:limegreen">You are right</h2>';
    score++;
    
  } else {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-3").innerHTML =
      '<h2 style="color:red">You are wrong</h2>';
    
  }
  if(quizes === 4){
    submit.style.display = "block";
  }
});

const quiz4 = document.querySelector("#section-4 ol");
quiz4.addEventListener("click", (e) => {
  quizes++;
  const option = e.target.id;
  if (option == "sec-4-op-2") {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-4").innerHTML =
      '<h2 style="color:limegreen">You are right</h2>';
    score++;
    
  } else {
    e.target.parentElement.style.display = "none";
    document.querySelector("#title-4").innerHTML =
      '<h2 style="color:red">You are wrong</h2>';
    
  }
  if(quizes === 4){
    submit.style.display = "block";
  }
});




submit.addEventListener("click", showmodal);
function showmodal(e) {
  modal.style.display = "block";
  if (score >= 3) {
    result.innerHTML = `<h1 style='color:limegreen'>Great!</h2>
    <p>Your Score is : ${score} out of 4</p>`;
  } else if (score >= 1) {
    result.innerHTML = `<h1 style='color:black'>Good</h2>
    <p>Your Score is : ${score} out of 4</p>`;
  } else {
    result.innerHTML = `<h1 style='color:red'>Oops! Better luck next time!</h2>
    <p>Your Score is : ${score} out of 4</p>`;
  }
}
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
});
