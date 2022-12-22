const elBtn = document.querySelector(".btn");
const elText = document.querySelector(".text");
const audio = new Audio();

const recognition = new webkitSpeechRecognition();

recognition.lang = "uz-UZ";
recognition.continuous = false;

elBtn.addEventListener("click", () => {
  recognition.start();
  audio.play();
});

recognition.onresult = (event) => {
  if (event.results[0][0].transcript === "qizil") {
    document.body.style.background = "red";
    elText.textContent = "Qizil";
  } else if (event.results[0][0].transcript === "sariq") {
    document.body.style.background = "yellow";
    elText.textContent = "Sariq";
  } else if (event.results[0][0].transcript === "yashil") {
    document.body.style.background = "green";
    elText.textContent = "Yashil";
  } else if (event.results[0][0].transcript === "futbol") {
    audio.src = "./mp3/mbappe.mp3";
    audio.play();
    elText.textContent = "Futbol";
  } else if (event.results[0][0].transcript === "musiqa") {
    audio.src = "./mp3/musiqa.mp3";
    audio.play();
    elText.textContent = "Musiqa";
  } else if (event.results[0][0].transcript === "tugadi") {
    audio.src = "./mp3/tugadi.ogg";
    audio.play();
    elText.textContent = "Tugadi";
  } else {
    document.body.style.background = "white";
  }
};
