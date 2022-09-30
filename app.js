// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");
// const time = document.querySelector(".time");

// setInterval(() => {
//   const date = new Date();

//   let hh = date.getHours();
//   let mm = date.getMinutes();
//   let ss = date.getSeconds();
//   if (hh >= 12) {
//     hh = hh - 12;
//   }
//   time.textContent = date.toLocaleTimeString();
//   hour.setAttribute("data-number", hh + mm / 60);
//   minute.setAttribute("data-number", mm + ss / 60);
//   second.setAttribute("data-number", ss);
//   const circles = document.querySelectorAll(".circle");

//   function drawCircle(circle, color, strokeWidth, radius) {
//     circle.width = window.innerWidth;
//     circle.height = window.innerHeight;
//     let max_value = circle.dataset.number;
//     let actual_value = circle.parentNode.dataset.number;

//     let angle = (actual_value / max_value) * 2 * Math.PI;
//     const ctx = circle.getContext("2d");
//     ctx.beginPath();
//     ctx.arc(circle.width / 2, circle.height / 2, radius, 0, angle, false);
//     ctx.lineCap = "round";
//     ctx.strokeStyle = color;
//     ctx.lineWidth = strokeWidth;
//     ctx.stroke();
//   }

//   drawCircle(circles[0], "orangered", 8, 200);
//   drawCircle(circles[1], "lime", 8, 180);
//   drawCircle(circles[2], "dodgerblue", 8, 160);
//   // circle, length, color, strokeWidth, radius
// }, 1000);

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
