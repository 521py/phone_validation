const mask = (selector) => {
  const setCursorPosition = (position, element) => {
    element.focus();
    element.setSelectionRange(position, position);
  };

  const createMask = (event) => {
    if (event.target.value.length === 11 && event.target.value[0] === '8') {
      event.target.value = event.target.value.replace('8', '');
    }

    if (event.target.value.length === 11 && event.target.value[0] === '7') {
      event.target.value = event.target.value.replace('7', '');
    }

    if (event.target.value.length >= 13 && event.target.value[0] === '+') {
      event.target.value = event.target.value.replace('+7', '');
    }

    const matrix = '(___) ___-__-__';
    const def = matrix.replace(/\D/g, '');
    let i = 0;
    let = value = event.target.value.replace(/\D/g, '');

    if (def.length >= value.length) {
      value = def;
    }

    event.target.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < value.length
        ? value.charAt(i++)
        : i >= value.length
        ? ''
        : a;
    });

    if (event.type !== 'blur') {
      setCursorPosition(event.target.value.length, event.target);
    }

    if (
      event.target.value.length < 15 &&
      event.type === 'blur' &&
      event.target.value.length > 0
    ) {
      document.getElementById('phone').classList.add('error');
    }

    if (
      event.target.value.length > 14 ||
      event.target.value === '' ||
      event.type === 'focus'
    ) {
      document.getElementById('phone').classList.remove('error');
    }
  };

  const input = document.querySelector(selector);

  input.addEventListener('input', createMask);
  input.addEventListener('focus', createMask);
  input.addEventListener('blur', createMask);
};

document.addEventListener('DOMContentLoaded', () => {
  mask('.form__phone');
});
