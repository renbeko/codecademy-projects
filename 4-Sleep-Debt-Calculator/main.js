const getSleepHours = day => {
    day = day.toLowerCase();

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
    }
}

const getActualSleepHours = () => {
    let hoursPerWeek = 0;
    hoursPerWeek += getSleepHours('monday');
    hoursPerWeek += getSleepHours('tuesday');
    hoursPerWeek += getSleepHours('wednesday');
    hoursPerWeek += getSleepHours('thursday');
    hoursPerWeek += getSleepHours('friday');
    hoursPerWeek += getSleepHours('saturday');
    hoursPerWeek += getSleepHours('sunday');
    return hoursPerWeek;
}

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);

    if (actualSleepHours === idealSleepHours) {
        console.log("Congratulations! You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than you needed this week. You gotta sleep less.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. You should get some rest.");
    }
}

calculateSleepDebt();


