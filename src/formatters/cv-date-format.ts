const cvDateFormat = (date: Date) => {
  var options = { year: 'numeric', month: 'long' } as const;
  return new Intl.DateTimeFormat('en', options).format(date);
};

export default cvDateFormat;
