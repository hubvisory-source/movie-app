export const getFormatedTimeString = (date: Date) => {
  return date.toLocaleTimeString("fr-FR");
};
export const getFormatedDateString = (date: Date) => {
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export const getFormatedDateTimeString = (date: Date) => {
  const dateString = getFormatedDateString(date);
  const timeString = getFormatedTimeString(date);
  return `${dateString}, ${timeString}`;
};

export const getCurrentFomatedDateTimeString = () => {
  return getFormatedDateTimeString(new Date());
};
