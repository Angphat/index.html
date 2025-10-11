// Carousel auto-slide
let carousel = document.getElementById("carousel");
setInterval(() => {
  carousel.appendChild(carousel.firstElementChild);
}, 2500);

// Visitor Counter
let count = localStorage.getItem('visits') || 0;
count++;
localStorage.setItem('visits', count);
document.getElementById("visitorCount").textContent = count;

// Contact Form Validation + Sanitize
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  const sanitize = (str) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  if(name === "" || email === "" || message === ""){
    document.getElementById("statusMsg").textContent = "กรุณากรอกข้อมูลให้ครบถ้วน!";
    document.getElementById("statusMsg").style.color = "red";
  } else {
    document.getElementById("statusMsg").textContent = "ส่งข้อความเรียบร้อยแล้ว ขอบคุณค่ะ ☕";
    document.getElementById("statusMsg").style.color = "green";
    console.log("Name:", sanitize(name));
    console.log("Email:", sanitize(email));
    console.log("Message:", sanitize(message));
    document.getElementById("contactForm").reset();
  }
});
