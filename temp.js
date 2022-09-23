const hello = (prop0) => {
  const prop1 = parseInt(prop0) ?? 0;  
  const prop2 = parseInt(prop1) + 1;
  return prop2 > 4 ? prop2 : 4;
};

module.exports = hello;