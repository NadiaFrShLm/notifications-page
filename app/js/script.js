'use strict';

const readAll = document.querySelector('#readAll');
const unreadMessages = document.querySelector('#unreadMessages');
const notifications = document.querySelectorAll('.notification');

readAll.addEventListener('click', function () {
  unreadMessages.textContent = '0';
  for (const item of notifications) {
    if (item.classList.contains('new')) {
      item.classList.remove('new');
    }
  }
});
