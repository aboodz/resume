const cvDateFormat = (date: Date) => {
  var options = { year: 'numeric', month: 'short' } as const;
  return new Intl.DateTimeFormat('en', options).format(date);
};

export default cvDateFormat;
