import courses from "./static/courses.js";
import tests from "./tests/tests.js";
import coursesFilter from "./modules/coursesFilter.js";

const sort = "lth"; //add "lth" ("lowToHigh") or "htl" ("highToLow") as third argument in coursesFilter to sort if required

Object.keys(tests).forEach((key) => {
  console.log(
    `interval selected by user: [${tests[key][0]}, ${tests[key][1]}]\noutput:`
  );
  console.log(coursesFilter(courses, tests[key], sort));
});
