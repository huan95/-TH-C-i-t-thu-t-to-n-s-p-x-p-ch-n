var CArray = function (numElements) {

    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;

    this.setData = function () {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    };

    this.toString = function () {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + " ";
            if (i > 0 && i % 10 == 0) {
                retstr += "<br/>";
            }
        }
        return retstr;
    };

    this.swap = function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };

    this.insertionSort = function () {
        var temp, inner;
        for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner-1];
                --inner;
            }
            this.dataStore[inner] = temp;
        }
    }
};

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
myNums.insertionSort ();
document.write(myNums.toString());
















