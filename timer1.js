'use strict';

// implement a timer that beep after a specific amount of time has passed
// the user can put in a time from the command line
//

const times = process.argv.slice(2);

const timer = function(times) {

  times.forEach(time => {
    // console.log(time);
    if (time > 0 && !isNaN(time)) {
      let delay = time * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    }
  
  });
        
};

timer(times);

