export default function getTime(fullMin: number) {
  let min = fullMin % 60;
  let hoursOfMin = Math.round((fullMin - min) / 60);
  let hours = hoursOfMin % 24;
  let days = Math.round((hoursOfMin - hours) / 24);

  let time = '';
  if (days > 0) time = `${days} T.`;
  if (hours > 0) time = `${time} ${hours} Std.`;
  if (min > 0) time = `${time} ${min} Min.`;

  return time;
}
