// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix != undefined && matrix.length != 0) {
        let arr = matrix
            .map((item) => item.join(","))
            .map((item, index) => {
                if (index % 2) {
                    return item.split(",").reverse().join(",");
                } else {
                    return item;
                }
            })
            .join(",")
            .split(",")
            .map((item) => +item);
        return arr;
    } else {
        return [];
    }
};
