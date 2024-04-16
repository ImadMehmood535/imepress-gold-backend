const getFormattedDate = (dateString) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const dateRetrive = (date) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();

  const checkDay = day.toString().length;
  const checkMonth = month.toString().length;

  if (checkMonth == 1) {
    month = `0${month}`;
  }
  if (checkDay == 1) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

module.exports = { getFormattedDate, dateRetrive };
