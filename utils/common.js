import moment from "moment";

export const getDateFormat = (givenTime) => {
  const givenTimePT = moment.unix(givenTime);
  const currentTimePT = moment();

  const diffInHours = currentTimePT.diff(givenTimePT, "hours");
  const diffInDays = currentTimePT.diff(givenTimePT, "days");
  const diffInWeeks = currentTimePT.diff(givenTimePT, "weeks");

  if (diffInWeeks >= 4) {
    return givenTimePT.format("MMM D YYYY");
  } else if (diffInWeeks >= 3) {
    return diffInWeeks === 3 ? "3 weeks ago" : `${diffInWeeks} weeks ago`;
  } else if (diffInWeeks >= 2) {
    return diffInWeeks === 2 ? "2 weeks ago" : `${diffInWeeks} weeks ago`;
  } else if (diffInWeeks >= 1) {
    return diffInWeeks === 1 ? "1 week ago" : `${diffInWeeks} weeks ago`;
  } else if (diffInDays >= 1) {
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
  } else if (diffInHours >= 1) {
    return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
  } else {
    return "Today";
  }
};

  export const processData = (res) => {
  const data = {};
  res.forEach(item => {
    const { applicationId, cpuUtilization } = item;

    if (!data[applicationId]) {
      data[applicationId] = [];
    }
    data[applicationId].push(parseFloat(cpuUtilization)); 
  });

  return gameData;
}