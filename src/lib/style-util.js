export const createDateSuffix = function (dateString) {
  const days = dateString.slice(-2);
  const lastDigit = parseInt(days.slice(-1));

  let suffix;

  if (days === '11' || days === '12' || days === '13') {
    suffix = 'th';
  } else {
    switch (lastDigit) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
        break;
    }
  }

  return suffix;
};
