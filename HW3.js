// Q1
function Q1(x) {
  let rev = Math.abs(x).toString().split('').reverse().join('');
  return rev * Math.sign(x);
}
console.log(Q1(123));
console.log(Q1(-246));

// Q2
function Q2(x) {
  let s = x.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}
console.log(Q2('madAm , '));
console.log(Q2('nurses run.'));

// Q3
function Q3(x) {
  let combs = new Set();
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length + 1; j++) {
      combs.add(x.substring(i, j));
    }
  }
  return Array.from(combs);
}
console.log(Q3('dog'));

// Q4
function Q4(x) {
  return x.split('').sort().join('');
}
console.log(Q4('webmaster'));

// Q5
function Q5(x) {
  let words = x.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
}
console.log(Q5('the quick brown fox'));

// Q6
function Q6(x) {
  let words = x.split(' ');
  let max = -1;
  let ret;
  for (let i of words) {
    if (i.length > max) {
      max = i.length;
      ret = i;
    }
  }
  return ret;
}
console.log(Q6('Web Development Tutorial'));

// Q7
function Q7(x) {
  let count = 0;
  for (let i of x) {
    i = i.toUpperCase();
    if (i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U') {
      count++;
    }
  }
  return count;
}
console.log(Q7('The quick brown fox'));

// Q8
function Q8(x) {
  if (x === 1) return false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(Q8(11));

// Q9
function Q9(x) {
  return typeof x;
}
console.log(Q9(false));

// Q10
function Q10(x) {
  let matrix = [];
  for (let i = 0; i < x; i++) {
    matrix[i] = new Array(x).fill(0);
    matrix[i][i] = 1;
  }
  return matrix;
}
console.log(Q10(9));

// Q11
function Q11(x) {
  x.sort((a, b) => a - b);
  return [x.at(1), x.at(-2)];
}
console.log(Q11([110, 25, 3, 4, 5]));

// Q12
function Q12(x) {
  let perfecto = [6, 28, 496, 8128, 33550336];
  return perfecto.includes(x);
}
console.log(Q12(28));

// Q13
function Q13(x) {
  let ret = [];
  for (let i = 1; i < x; i++) {
    if (x % i === 0) {
      ret.push(i);
    }
  }
  return ret;
}
console.log(Q13(28));

// Q14
function Q14(x, coins) {
  let ret = [];
  for (let i of coins) {
    while (x >= i) {
      x = x - i;
      ret.push(i);
    }
  }
  return ret;
}
console.log(Q14(46, [25, 10, 5, 2, 1]));

// Q15
function Q15(x, n) {
  return Math.pow(x, n);
}
console.log(Q15(5, 3));

// Q16
function Q16(x) {
  let ret = x.split('');
  ret = new Set(ret);
  ret = [...ret].join('');
  return ret;
}
console.log(Q16('thequickbrownfoxjumpsoverthelazydog'));

// Q17
function Q17(x) {
  let count = {};
  for (let i of x) {
    if (count[i]) {
      count[i] = count[i] + 1;
    } else {
      count[i] = 1;
    }
  }
  return count;
}
console.log(Q17('leetcode'));

// Q18
function Q18(x, goal) {
  let lo = 0;
  let hi = x.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (x[mid] === goal) {
      return mid;
    } else if (x[mid] < goal) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}
console.log(Q18([1, 2, 3, 4, 5], 4));

// Q19
function Q19(x, num) {
  let ret = [];
  for (let i of x) {
    if (i > num) {
      ret.push(i);
    }
  }
  return ret;
}
console.log(Q19([1, 2, 3, 4, 5], 2));

// Q20
function Q20(x) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let ret = '';
  for (let i = 0; i < x; i++) {
    ret += chars[Math.floor(Math.random() * chars.length)];
  }
  return ret;
}
console.log(Q20(10));

// Q21
function Q21(x, k) {
  const getAllSubsets = (arr) =>
    arr.reduce(
      (sub, value) => sub.concat(sub.map((set) => [value, ...set])),
      [[]]
    );
  let subsets = getAllSubsets(x);
  let ret = [];
  for (let i of subsets) {
    if (i.length === k) {
      ret.push(i);
    }
  }
  return ret;
}
console.log(Q21([1, 2, 3], 2));

// Q22
function Q22(x, c) {
  let count = 0;
  for (let i of x) {
    if (i === c) {
      count++;
    }
  }
  return count;
}
console.log(Q22('microsoft.com', 'o'));

// Q23
function Q23(x) {
  for (let i of x) {
    let temp = x.replace(i, '');
    if (temp.includes(i) === false) {
      return i;
    }
  }
  return -1;
}
console.log(Q23('abacddbec'));

// Q24
function Q24(x) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length - i - 1; j++) {
      if (x[j] < x[j + 1]) {
        let temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
      }
    }
  }
  return x;
}
console.log(
  Q24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

// Q25
function Q25(x) {
  let max = -1;
  let ret = '';
  for (let i of x) {
    if (i.length > max) {
      max = i.length;
      ret = i;
    }
  }
  return ret;
}
console.log(Q25(['Australia', 'Germany', 'United States of America']));

// Q26
function Q26(x) {
  let ret = '';
  let sub = '';
  for (let i of x) {
    if (ret.includes(i) === false) {
      sub += i;
      if (sub.length > ret.length) {
        ret = sub;
      }
    } else {
      let cut = sub.indexOf(i);
      sub = sub.substring(cut + 1) + i;
    }
  }
  return ret;
}
console.log(Q26('pwwkew'));

// Q27
function Q27(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
}
console.log(Q27('babad'));

// Q28
function Q28(Q20, x) {
  return Q20(x + 10);
}
console.log(Q28(Q20, 20));

// Q29
function Q29() {
  return Q29.name;
}
console.log(Q29());