import Vimeo from '@vimeo/player';
import throttle from "lodash.throttle";

   const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(event) {
   localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
const currentTimeNumeric = Number(currentTime);

if(currentTime) {
   player.setCurrentTime(currentTimeNumeric);
}