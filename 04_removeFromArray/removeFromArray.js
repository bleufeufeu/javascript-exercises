const removeFromArray = function(array, ...indices) {
    for (i = 0; i < indices.length; i++) {
        array = array.filter((array) => array !== indices[i]);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
