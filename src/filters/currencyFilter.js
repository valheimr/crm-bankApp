/**
 * Экспорт функции фильтра валюты
 * @param {int} value 
 * @param {symbol} currency 
 * @returns {Intl.NumberFormat}
 */
export default function currencyFilter(value, currency = 'EUR'){
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(value)
}
