import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
    locale: 'en-IN', // 'en-IN' is the locale code for English in India
    currency: 'INR',  // 'INR' is the currency code for Indian Rupees
  };
  
