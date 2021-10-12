let calculadora = (() => {
  
  let numOr1 = n => isNaN(n) ? 1 : n;
  let numOr0 = n => isNaN(n) ? 0 : n;
  let operations = new Map();
  let countOperations = 0;

  let _calculadora = [];

  const enterCalc = (value) => {
    return _calculadora;
  }
  const values = () => {
    return _calculadora;
  }
  const equals = () => {
    let result = 0;
    if (_calculadora.includes('*'))
      result = _calculadora.reduce((a, b) => numOr1(a) * numOr1(b));
    if (_calculadora.includes('+'))
      result = _calculadora.reduce((a, b) => numOr0(a) + numOr0(b));
    if (_calculadora.includes('-'))
      result = _calculadora.reduce((a, b) => numOr0(a) - numOr0(b));
    if (_calculadora.includes('/'))
      result = _calculadora.reduce((a, b) => numOr1(a) / numOr1(b));
    countOperations++;
    operations.set('operacao_' + countOperations, _calculadora);

    _calculadora = [];
    return result;
  }
  const listOperations = () => {
    return operations;
  }

  const enter = enterCalc => {
    _calculadora = [..._calculadora, enterCalc]
  }
  return {
    listOperations,
    enter,
    equals
  }
})()
