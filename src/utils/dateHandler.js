const getDate = (fullDate) => {
  if (!fullDate) return null;
  const date = fullDate.split("T");
  return date[0];
};

const getTime = (fullDate) => {
  const date = fullDate.split("T");
  return date[1].slice(0, 5);
};

export { getDate, getTime };
