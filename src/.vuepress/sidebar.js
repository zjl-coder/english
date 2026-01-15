const { home } = require('./menu/home');
const { predicate } = require('./menu/predicate');
const { vocabularies_3500 } = require('./menu/3500_vocabularies');
const { ef_lesson } = require('./menu/ef_lesson');

const sidebar = {
  '/3500_vocabularies/': [vocabularies_3500],
  '/predicate/': [predicate],
  '/home/': home,
  '/ef_lesson/': [ef_lesson],
};

module.exports = { sidebar };
