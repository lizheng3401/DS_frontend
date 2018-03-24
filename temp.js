var Mock = require('mockjs');
const Random = Mock.Random;
const data = Mock.mock(function (opt) {
  let date = []
  let content = []
  for(let i = 0; i < 12; i++){
    date.push(i+1)
    let newObject = {
      time: '2018年'+(i+1)+'月份',
      value: [
        Random.float(5, 10, 1,2),
        Random.float(60, 100, 1,2),
        Random.float(15, 20, 1,2),
        Random.float(10, 50, 1,2),
        Random.float(60, 100, 1,2),
        Random.float(0, 4, 1,2)
      ]
    }
    content.push(newObject)
  }

  return {
    results: {
      date,
      content
    }
  }
})
console.log(JSON.stringify(data, null, 2))


