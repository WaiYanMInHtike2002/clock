const hrTag = document.querySelector(".hr");
const miTag = document.querySelector(".mi");
const seTag = document.querySelector(".se");

const timeFun = () => {
  let time = new Date();
  let milli = time.getMilliseconds();
  let hour = time.getHours() * 30;
  let min = time.getMinutes() * 6;
  let sec = time.getSeconds() * 6 + (milli / 1000) * 6;

  hrTag.style.transform = `rotateZ(${hour + min / 12}deg)`;
  miTag.style.transform = `rotateZ(${min}deg)`;
  seTag.style.transform = `rotateZ(${sec}deg)`;
};
setInterval(timeFun, 1);
