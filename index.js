const mkReadLine = (input_stdin) => {
  const input_stdin_array = input_stdin.split('\n').filter(i => i.length);
  let input_currentline = 0;
  return () => input_stdin_array[input_currentline++];
};

module.exports = function(input) {
  if (!input) throw 'input is undefined!';

  return mkReadLine(input);
};
