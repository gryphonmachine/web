const getDayOrdinal = (day: number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = day % 100;
  return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export const convertDate = (dateParam: string) => {
  const date = new Date(dateParam);
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const months = [
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
  const monthName = months[month];

  const dayOrdinal = getDayOrdinal(day);

  const output = `${monthName} ${dayOrdinal}`;
  return output;
};

export const isLive = (start: string, end: string) => {
  const today = new Date();
  const newToday = today.toISOString().split("T")[0];

  today.setHours(0, 0, 0, 0);

  if (newToday >= start && newToday <= end) {
    return true;
  } else {
    return false;
  }
};