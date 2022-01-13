export const parseBlogDate = (rawTime) => {
  const monthNames = [
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
  return (
    rawTime.getDate().toString().padStart(2, "0") +
    " " +
    monthNames[rawTime.getMonth()] +
    " " +
    rawTime.getFullYear()
  );
};

export const parseDate = (rawTime) =>
  rawTime.getDate().toString().padStart(2, "0") +
  "." +
  (rawTime.getMonth() + 1).toString().padStart(2, "0") +
  "." +
  rawTime.getFullYear() +
  " " +
  rawTime.getHours().toString().padStart(2, "0") +
  ":" +
  rawTime.getMinutes().toString().padStart(2, "0") +
  ":" +
  rawTime.getSeconds().toString().padStart(2, "0");
