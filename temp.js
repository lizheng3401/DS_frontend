var Mock = require('mockjs');
const Random = Mock.Random;;
var data = Mock.mock({
  "results|10" :[{
    'id|+1': 1,
    'username': Random.cname(),
    'email': Random.email(),
    'device': Random.id(),
    'sleep': Random.id(),
    'status|1 ': [
      {'type': 'success', 'content': '健康'},
      {'type': 'warning', 'content': '异常'},
      {'type': 'dangering', 'content': '危险'},
    ]
  }]
});
// 输出结果
console.log(JSON.stringify(data, null, 2))
