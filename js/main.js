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
  let result = event.results[0][0].transcript;
  console.log(result);
  if (result === "qizil") {
    document.body.style.background = "red";
    elText.textContent = "Qizil";
  } else if (result === "sariq") {
    document.body.style.background = "yellow";
    elText.textContent = "Sariq";
  } else if (result === "yashil") {
    document.body.style.background = "green";
    elText.textContent = "Yashil";
  } else if (result === "futbol") {
    audio.src = "./mp3/mbappe.mp3";
    audio.play();
    elText.textContent = "Futbol";
  } else if (result === "musiqa") {
    audio.src = "./mp3/musiqa.mp3";
    audio.play();
    elText.textContent = "Musiqa";
  } else if (result === "tugadi") {
    audio.src = "./mp3/tugadi.ogg";
    audio.play();
    elText.textContent = "Tugadi";
  } else {
    document.body.style.background = "white";
    elText.textContent = "Boshidan";
  }
};
