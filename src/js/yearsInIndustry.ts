/**
 * Return an integer of how many years experience you have,
 * compares the date you started your career to the current date
 */
import { differenceInYears } from "./differenceInYear";

const careerStartDate = "2021-04-17";

export const yearsInIndustry = differenceInYears(
  new Date(careerStartDate),
  new Date()
);
