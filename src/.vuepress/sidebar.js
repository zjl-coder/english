const { home } = require('./menu/home');
const { predicate } = require('./menu/predicate');
const { vocabularies_3500 } = require('./menu/3500_vocabularies');

const sidebar = {
  '/3500_vocabularies/': [vocabularies_3500],
  '/predicate/': [predicate],
  '/home/': home,
};

module.exports = { sidebar };
