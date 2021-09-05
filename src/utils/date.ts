export class DateGenerator {
  /**
   * Get date from month
   * @param [months]
   * @returns gives the date from the month given in toISOString format, if there is no month gives the current date
   */
  getFromMonth(months?: number) {
    const date = new Date();

    if (!months) {
      return date.toISOString();
    }

    date.setMonth(date.getMonth() + months);

    return date.toISOString();
  }
}

export class DateHandler {}
