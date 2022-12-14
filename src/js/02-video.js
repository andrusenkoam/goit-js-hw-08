import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const dataSave = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(dataSave, 1000));
const getTimePlayer = localStorage.getItem('videoplayer-current-time');

if (getTimePlayer) {
  player
    .setCurrentTime(getTimePlayer)
    .then(function () {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
}
