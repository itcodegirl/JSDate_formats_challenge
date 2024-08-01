import moment from "moment";

function displayCurrentDate() {
  let currentDate = moment().format("dddd, LL");
  console.log(currentDate);
  let todayCurrentDate = document.querySelector("#current-date");
  if (todayCurrentDate) {
    todayCurrentDate.innerHTML = currentDate;
  }
}
