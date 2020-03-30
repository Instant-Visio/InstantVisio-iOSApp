export {
  groupBy,
  objToList,
  precision,
  truncateString
};

function groupBy(array, key) {
  const coffee = {
  };
  for (const item of array) {
    if (!coffee[item[key]]) {
      coffee[item[key]] = [];
    }
    coffee[item[key]].push(item);
  }
  return coffee;
};

function objToList(obj) {
  const array = [];
  Object.keys(obj).sort((a, b) => (b - a)).forEach(key => {
    array.push({
      key,
      value: obj[key]
    });
  });
  return array;
};


function precision(value) {
  return parseFloat(value.toFixed(2));
}

function truncateString(string, number) {
  let returnedString;
  if (string && string.length < number) {
    returnedString = string;
  } else {
    returnedString = string.substring(0, number).concat('...');
  }
  return returnedString;
}





