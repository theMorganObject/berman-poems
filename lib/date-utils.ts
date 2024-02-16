export const monthNumberToFullMonthName = (month: string): string => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const index = parseInt(month, 10) - 1;
  return monthNames[index] || '';
};

export const monthNumberToShortMonthName = (month: string): string => {
  const shortMonthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const index = parseInt(month, 10) - 1;
  return shortMonthNames[index] || '';
};
