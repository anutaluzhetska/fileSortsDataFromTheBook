const fs = require('fs');

const book = fs.readFileSync(
    './book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
)

const counters = {};

for (let i = 0; i < book.length; i++) {
    const char = book[i];
    
    if (counters[char] === undefined) {
        counters[char] = 0
    }
    counters[char] += 1;
}
const sortedChars = Object.entries(counters);

sortedChars.sort((a, b) => b[1] - a[1]);

const tableData = sortedChars.map(([char, count]) => {
    return {
        'Символ': char === '\n' ? '\\n (Новий рядок)' : (char === ' ' ? '  (Пробіл)  ' : char),
        'Кількість': count
    };
});

console.log('Таблиця частоти символів (від найбільшого до найменшого):');
console.table(tableData);
