        class ArrayList {
          constructor() {
            this.array = []
          }

          insert(item) {
            this.array.push(item)
          }

          toString() {
            return this.array.join('-')
          }

          bubbleSort() {
            console.time('耗时')
            let length = this.array.length;
            for (let i = 0; i < length; i++) {
              for (let j = 0; j < length - 1 - i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                  this.swap(j, j + 1)
                }
              }
            }
            console.timeEnd('耗时')
            return this.array
          }

          selectSort() {
            console.time('耗时')
            let length = this.array.length,
              index;
            for (let i = 0; i < length - 1; i++) {
              index = i
              for (let j = i; j < length; j++) {
                this.array[j] < this.array[index] ? index = j : '';
              }
              i !== index ? this.swap(i, index) : '';
            }
            console.timeEnd('耗时')
            return this.array
          }

          insertSort() {
            console.time('耗时')
            let length = this.array.length,
              temp, j
            for (let i = 1; i < length; i++) {
              j = i
              temp = this.array[i]
              while (j > 0 && this.array[j - 1] > temp) {
                this.array[j] = this.array[j - 1]
                j--
              }
              this.array[j] = temp
            }
            console.timeEnd('耗时')
            return this.array
          }

          mergeSort() {
            console.time('耗时')
            let result = this.array = mergeSortRec(this.array)
            console.timeEnd('耗时')
            return result

            function mergeSortRec(array) {
              let length = array.length
              if (length === 1) {
                return array
              }

              let mid = Math.floor(length / 2)
              let left = array.slice(0, mid)
              let right = array.slice(mid)

              return merge(mergeSortRec(left), mergeSortRec(right))
            }

            function merge(left, right) {
              let leftLength = left.length,
                rightLength = right.length,
                lf = 0,
                rg = 0,
                result = [];

              while (lf < leftLength && rg < rightLength) {
                left[lf] < right[rg] ? result.push(left[lf++]) : result.push(right[rg++])
              }

              while (lf < leftLength) {
                result.push(left[lf++])
              }

              while (rg < rightLength) {
                result.push(right[rg++])
              }

              return result
            }
          }

          quickSort() {
            console.time('耗时')
            let result = quickSortRec(this.array)
            console.timeEnd('耗时')
            return result

            function quickSortRec(array) {
              if (array.length <= 1) {
                return array
              }

              let index = Math.floor(array.length / 2),
                indexValue = array[index],
                left = array.filter(v => v < indexValue),
                right = array.filter((v, i) => i != index && v >= indexValue)

              return quickSortRec(left).concat(indexValue, quickSortRec(right))
            }
          }

          swap(i, j) {
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]]
          }
        }

        function createArr(size = 1000, min = 1, max = 1000) {
          let arr = new ArrayList()
          for (let i = 0; i < size; i++) {
            arr.insert(Math.floor(Math.random() * (max - min + 1) + min))
          }
          return arr
        }

        let arr = createArr()