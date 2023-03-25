setInterval(function () {
  let date = new Date();

  seconds.innerHTML =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  minutes.innerHTML =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  hour.innerHTML = hours < 10 ? `0${hours}` : hours;

  ampm.innerHTML = date.getHours() > 12 ? "PM" : "AM";
}, 1000);
