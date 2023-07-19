const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

const localizeCountryCode = (countryCode: string) => {
  return regionNames.of(countryCode);
};

export default localizeCountryCode;
