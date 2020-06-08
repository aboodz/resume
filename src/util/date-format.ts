export function cvDateFormat(date: Date) {
  var options = { year: 'numeric', month: 'long' };
  return date ? new Intl.DateTimeFormat('en', options).format(date) : 'present';
}
