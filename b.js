const arrSubjects = ['Node', 'Android', 'iOS', 'React'];

arrSubjects[1] += ' 2';

// console.log(arrSubjects[1]);
// arrSubjects.pop();
// arrSubjects.shift();
// arrSubjects.push('PHP', 'a');
// arrSubjects.unshift('PHP');
const index = arrSubjects.indexOf('Android');
console.log(index);
// arrSubjects.splice(index, 2);
arrSubjects.splice(index + 1, 0, 'PHP', 'a');
console.log(arrSubjects);
