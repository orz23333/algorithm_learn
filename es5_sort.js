function ArrayList() {
  var array = [];

  function swap(i, j) { //交换数组中i，j位置函数
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
  }

  this.insert = function (item) {
    return array.push(item)
  }

  this.toString = function (item) {
    return array.join('-')
  }

  // 冒泡排序
  this.bubbleSort = function () {
    var length = array.length;

    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1)
        }
      }
    }

    return array
  }

  // 选择排序
  this.selectSort = function () {
    var length = array.length;
    var minIndex;

    for (var i = 0; i < length - 1; i++) {
      minIndex = i;
      for (var j = i; j < length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      i !== minIndex && swap(i, minIndex)
    }

    return array;
  }

  // 插入排序
  this.insertSort = function () {
    var length = array.length;
    var index; // 保存交换位置的索引
    var temp; // 保存每次进行排序的基准数值

    for (var i = 0; i < length; i++) {
      index = i;
      temp = array[i];

      while (index > 0 && array[index - 1] > temp) {
        array[index] = array[index - 1];
        index--;
      }

      array[index] = temp;
    }

    return array;
  }

  // 归并排序
  this.mergeSort = function () {
    function mergeSortRec(list) {
      var length = list.length;
      if (length === 1) {
        return list
      }

      var mid = Math.floor(length / 2);
      var left = list.slice(0, mid);
      var right = list.slice(mid);

      return merge(mergeSortRec(left), mergeSortRec(right))
    }

    function merge(left, right) {
      var leftIndex = 0,
        leftLength = left.length,

        rightIndex = 0,
        rightLength = right.length,

        result = [];

      while (leftIndex < leftLength && rightIndex < rightLength) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex++])
        } else {
          result.push(right[rightIndex++])
        }
      }

      while (leftIndex < leftLength) {
        result.push(left[leftIndex++])
      }

      while (rightIndex < rightLength) {
        result.push(right[rightIndex++])
      }

      return result
    }

    return array = mergeSortRec(array);
  }

  // 快速排序
  this.quickSort = function () {
    function quick(array, left, right) {
      if (array.length > 1) {
        var index = partition(array, left, right);
        left < index - 1 && quick(array, left, index - 1);
        index < right && quick(array, index, right);
      }
    }

    function partition(array, left, right) {
      var pivot = array[Math.floor((left + right) / 2)],
        i = left,
        j = right;

      while (i <= j) {
        while (array[i] < pivot) {
          i++
        }

        while (array[j] > pivot) {
          j--
        }

        if (i <= j) {
          swap(i, j)
          i++;
          j--;
        }
      }

      return i
    }

    quick(array, 0, array.length - 1)

    return array
  }
}

function randomNumInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomArrayList(min, max, length) {
  var array = new ArrayList();
  var count = 0;

  while (count < length) {
    array.insert(randomNumInRange(min, max))
    count++;
  }

  var result = array.quickSort();

  return result;
}