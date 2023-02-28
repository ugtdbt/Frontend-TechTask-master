const intlNumberFormatValues = ["de-DE", "currency", "EUR"];

/**
 * @description Format currency base on de-DE
 */

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});
