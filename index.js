function formatPhoneNumber(value) {
  if (!value) return;

  const phoneNumber = value.replace(/[^\d]/g);
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
    4,
    7
  )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
}
console.log(Number('str'));

var input = document.getElementById('phone-mask'),
  oldValue,
  regex = new RegExp(/^\d{0,16}$/g),
  mask = function (value) {
    let output = ['+'];
    console.log(output);
    for (var i = 0; i < value.length; i++) {
      console.log(value.length, i, value);

      if (value.length === 1 && value !== '7' && value !== '8') {
        output.push('7');
        console.log(value, 'is value');
      } else if (value === '7') {
        console.log('неверное начало', 'but value is', value);
      } else if (value === '8') {
        console.log('неверное начало', 'but value is', value);
        output.pop();
        output.pop();
        output.push('7');
        value = 0;
      } else if (value.length === 1) {
        console.log('value.length');
      } else if (i === 1) {
        output.push(' (');
      } else if (i === 3) {
      } else if (i === 4) {
        output.push(') ');
      } else if (i === 7 || i === 9) {
        output.push('-');
      }
      output.push(value[i]);
    }
    return output.join('');
  },
  unmask = function (value) {
    /^\d{0,16}$/g;
    var output = value.replace(new RegExp(/[^\d]/, 'g'), ''); // Remove every non-digit character
    return output;
  },
  keydownHandler = function (e) {
    oldValue = e.target.value;
  },
  inputHandler = function (e) {
    var el = e.target,
      newValue = el.value;
    newValue = unmask(newValue);

    if (newValue.match(regex)) {
      newValue = mask(newValue);
      el.value = newValue;
    } else {
      el.value = oldValue;
    }
  };
input.addEventListener('keydown', keydownHandler);
input.addEventListener('input', inputHandler);
