//Display the current date here following this format "Today is Saturday, October 8, 2023"

function displayCurrentDate() {
  let currentDate = moment().format("dddd, LL");
  console.log(currentDate);
  let todayCurrentDate = document.querySelector("#current-date");
  if (todayCurrentDate) {
    todayCurrentDate.innerHTML = currentDate;
  }
}

//Update the time every second
setInterval(displayCurrentDate, 1000);

//Initial call to display the the time immediately on page load
displayCurrentDate();

//Display the date and time here 10 years from now follow this format "10
//years from now, it will be Friday, October 8, 2033 11: 43: 32"

function displayFutureDate() {
  let futureDate = moment().add(10, 'years').format('dddd, MMMM D, YYYY HH:mm:ss');
  console.log(futureDate);
  let tenFutureDate = document.querySelector("#future-date");
  console.log(tenFutureDate);
  if (tenFutureDate) {
    tenFutureDate.innerHTML = `10 years from now, it will be ${futureDate}`;
  }

}

//Initial call to display the time immediately on page load
displayFutureDate();
