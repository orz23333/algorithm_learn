function ArrayList() {
  var array = [];

  this.insert = function(item) {
    return array.push(item)
  }

  this.toString = function(item) {
    return array.join('-')
  }
}