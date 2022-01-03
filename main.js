const getSleepHours = day => {
  switch (day) {
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 8;
    break;
    case 'wednesday':
    return 8;
    break;
    case 'thursday':
    return 8;
    break;
    case 'friday':
    return 8;
    break;
    case 'saturday':
    return 8;
    break;
    case 'sunday':
    return 8;
    break;
    default:
    return 'Error';
  }
};
 
//console.log(getSleepHours('monday'));
 
const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');
 
//console.log(getActualSleepHours());
 
const getIdealSleepHours = () => {
  let idealHours = 7;      // Change value here
  return idealHours * 7;
};
 
//console.log(getIdealSleepHours());
 
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You get perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You get ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep this week');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You get ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep this week');
  } else {
    console.log('Error');
  }
};
 
calculateSleepDebt();
