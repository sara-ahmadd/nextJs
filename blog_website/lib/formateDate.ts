export const formateDate = (date: string) => {
  const months = [
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
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const mon = newDate.getMonth();
  const day = newDate.getDate();
  return `${months[mon + 1]} ${day}, ${year}`;
};
