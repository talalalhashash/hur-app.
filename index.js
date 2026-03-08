const _ = require('lodash');
const mySentence = 'تعلم البرمجة ممتع';
const words = mySentence.split(' ');
const reversedWords = _.reverse(words);
console.log('الجملة الأصلية:', mySentence);
console.log('الجملة مقلوبة:', reversedWords.join(' '));
