import picker from '../src/picker';

picker.init({
  target: document.querySelector('#e-1'),
});

picker.init({
  target: document.querySelector('#e-2'),
  preview: document.querySelector('.icon-preview')
});
