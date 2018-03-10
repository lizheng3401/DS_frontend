var Mock = require('mockjs');
const Random = Mock.Random;;
var data = Mock.mock({
  "result":{
    "time|1-31": [1],
    "count|31": [Random.natural(10000,100000)]
  }
});
// 输出结果

console.log(JSON.stringify(data, null, 2))
