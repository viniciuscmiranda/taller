const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const Formatters = {
  date(date: string) {
    return new Date(date).toLocaleDateString('en-US');
  },

  money(amount: number) {
    return moneyFormatter.format(amount);
  },
};
