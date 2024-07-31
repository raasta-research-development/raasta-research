export const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp) * 1000);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
