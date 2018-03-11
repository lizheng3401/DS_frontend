var Mock = require('mockjs');
const Random = Mock.Random;;
const data = function (opt) {
  // 'heart', 'breath', 'score', 'sleepPeriod'
  var item = new Date('2018/3/2 22:13:34')
  let time = []
  let heart = []
  let breath = []
  let score = Random.natural(0,100)
  let sleepPeroid = [
    Random.Random.float(0.5, 8, 1, 1),
    Random.Random.float(0.5, 8, 1, 1),
    Random.Random.float(0.5, 8, 1, 1),
    Random.Random.float(0.5, 8, 1, 1),
  ]
  for(let t = 0; t < 10; t++){
    time.push(item)
    heart.push(Random.natural(30, 80))
    breath.push(Random.natural(8, 35))
    item = new Date(item + 60 * 1000);
  }
  return {
    time: time,
    heart: heart,
    breath: breath,
    score: score,
    sleepPeroid: sleepPeroid
  }
}
console.log(JSON.stringify(data, null, 2))


