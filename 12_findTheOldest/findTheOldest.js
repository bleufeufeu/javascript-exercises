const findTheOldest = function(people) {
    let maxAge = 0;
    let eldest;
    for (const person of people) {
        let age = 0;
        if (!person.yearOfDeath) age = new Date().getFullYear() - person.yearOfBirth;
        else age = person.yearOfDeath - person.yearOfBirth;
        if (age > maxAge) {
            maxAge = age;
            eldest = person;
        }
    }
    return eldest;
};

// Do not edit below this line
module.exports = findTheOldest;
