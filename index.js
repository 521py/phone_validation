const mask = (selector) => {
  const input = document.querySelector(selector);

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
      event.target.value.length &&
      event.target.value.length < matrix.length &&
      event.type === 'blur'
    ) {
      input.classList.add('form__phone-error');
    }

    if (
      !event.target.value ||
      event.target.value.length > 14 ||
      event.type === 'focus'
    ) {
      input.classList.remove('form__phone-error');
    }
  };

  input.addEventListener('input', createMask);
  input.addEventListener('focus', createMask);
  input.addEventListener('blur', createMask);
};

document.addEventListener('DOMContentLoaded', () => {
  mask('.form__phone');
});
