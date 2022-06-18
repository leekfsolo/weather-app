export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDateFormat = (dateStr: string) => {
  const d = new Date(dateStr);
  const day = DAYS[d.getDay()];
  const date = d.getDate();
  const month = MONTHS[d.getMonth()];

  return { day, date, month };
};
