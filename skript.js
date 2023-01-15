// Integrate dayjs library
dayjs.extend(dayjs_plugin_duration);

// Countdown
function activateCountdown(element, dateString) {
  const targetDate = dayjs(dateString);

  element.querySelector(
    ".until--event"
  ).textContent = `Until ${targetDate.format("D MMMM YYYY")}`;

  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));

    if (duration.asMilliseconds() <= 0) return;

    element.querySelector(".until--numeric--seconds").textContent = duration
      .seconds()
      .toString()
      .padStart(2, "0");

    element.querySelector(".until--numeric--minutes").textContent = duration
      .minutes()
      .toString()
      .padStart(2, "0");

    element.querySelector(".until--numeric--hours").textContent = duration
      .hours()
      .toString()
      .padStart(2, "0");

    element.querySelector(".until--numeric--days").textContent = duration
      .asDays()
      .toFixed(0)
      .toString()
      .padStart(2, "0");
  }, 250);
}

activateCountdown(document.getElementById("myCountdown"), "2024-12-31");

// Display current time
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 *
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

// Display current date
/**
 *
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  }, ${date.getDate()}, ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);
