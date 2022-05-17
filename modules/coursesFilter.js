export default (courses, range, sort = "") => {
  if (
    !Array.isArray(courses) ||
    !Array.isArray(range) ||
    typeof sort !== "string"
  )
    return -1;

  const lower = range[0] ? range[0] : null;
  const upper = range[1] ? range[1] : Infinity;
  const filtered = courses.filter(
    (obj) =>
      obj.prices[0] <= upper &&
      (obj.prices[0] >= lower || obj.prices[1] >= lower)
  );

  if (sort === "htl")
    return filtered.sort((prev, next) => next.prices[0] - prev.prices[0]);
  else if (sort === "lth")
    return filtered.sort((prev, next) => prev.prices[0] - next.prices[0]);
  else return filtered;
};
