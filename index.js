const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => {
  const namedFunction = () => {};
  return namedFunction;
};

const returnsAnAnonymousFunction = () => {
  return function () {};
};