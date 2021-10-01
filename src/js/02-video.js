import throttle from 'lodash.throttle';

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (data) {
    // data is an object containing properties specific to that event
    console.log(data);
    localStorage.setItem('videoplayer - current - time', data.seconds);
  }, 1000),
);
console.log(localStorage.getItem('videoplayer - current - time'));
player
  .setCurrentTime(localStorage.getItem('videoplayer - current - time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
