const Mock = require('mockjs')

const Random = Mock.Random;
const produceData = function (opt) {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
};
const userData = function (opt) {
  key = opt.url.split('=')[1].split('&')[0]
  query = opt.url.split('=')[2]
  page = parseInt(opt.url.split('=')[1])
  let j = page * 10 - 9
  let users = [];
  let total = 100
  for (let i = 0; i < 10; i++) {
    let newObject = {
      'id': j,
      'username': Random.cname(),
      'email': Random.email(),
      'device': Random.id(),
      'sleep': Random.id(),
      'status': ['success', 'warning', 'danger'][Random.natural(0, 2)]
    };
    j += 1
    if (key === "status") {
      if (!(newObject.status === query)) {
        continue
      }
    }
    users.push(newObject);
  }
  return {
    results: users,
    total: total
  }
};
const totalUsers = function (opt) {
  let users = [];
  for (let i = 0; i < 100; i++) {
    let newObject = {
      'id': i + 1,
      'username': Random.cname(),
      'email': Random.email(),
      'device': Random.id(),
      'sleep': Random.id(),
      'status': ['success', 'warning', 'danger'][Random.natural(0, 2)]
    };
    users.push(newObject);
  }
  return {
    results: users,
    total: 100
  }
}
const sleepData = function (opt) {
  let sleep = {
    time: [],
    heart: [],
    breath: []
  };
  for (let i = 0; i < 200; i++) {
    sleep.time.push(i);
    sleep.heart.push(Random.natural(30, 100));
    sleep.breath.push(Random.natural(8, 40));
  }
  return sleep
};
const sleepusers = function (opt) {
  function timetrans(date) {
    var date = new Date(date);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D;
  }
  var item = Date.parse(new Date('2018/2/2 00:00:00'))
  let result = {
    cate: '睡眠',
    expectedData: [],
    actualData: [],
    time: [],
  };
  for (let i = 0; i < 30; i++) {
    let num = Random.natural(7000, 10000)
    item = item + 60 * 1000 * 60 * 24;
    result.time.push(timetrans(item))
    result.actualData.push(num)
    result.expectedData.push(parseInt(num * 0.25));
  }
  return result
};
const breathusers = function (opt) {
  function timetrans(date) {
    var date = new Date(date);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D;
  }
  var item = Date.parse(new Date('2018/2/2 00:00:00'))
  let result = {
    cate: '呼吸率',
    expectedData: [],
    actualData: [],
    time: [],
  };
  for (let i = 0; i < 30; i++) {
    let num = Random.natural(7000, 10000)
    item = item + 60 * 1000 * 60 * 24;
    result.time.push(timetrans(item))
    result.actualData.push(num)
    result.expectedData.push(parseInt(num * 0.25));
  }
  return result
};
const heartusers = function (opt) {
  function timetrans(date) {
    var date = new Date(date);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D;
  }
  var item = Date.parse(new Date('2018/2/2 00:00:00'))
  let result = {
    cate: '心率',
    expectedData: [],
    actualData: [],
    time: [],
  };
  for (let i = 0; i < 30; i++) {
    let num = Random.natural(7000, 10000)
    item = item + 60 * 1000 * 60 * 24;
    result.time.push(timetrans(item))
    result.actualData.push(num)
    result.expectedData.push(parseInt(num * 0.25));
  }
  return result
}
const moveusers = function (opt) {
  function timetrans(date) {
    var date = new Date(date);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D;
  }
  var item = Date.parse(new Date('2018/2/2 00:00:00'))
  let result = {
    cate: '体动',
    expectedData: [],
    actualData: [],
    time: [],
  };
  for (let i = 0; i < 30; i++) {
    let num = Random.natural(7000, 10000)
    item = item + 60 * 1000 * 60 * 24;
    result.time.push(timetrans(item))
    result.actualData.push(num)
    result.expectedData.push(parseInt(num * 0.25));
  }
  return result
}
const deviceData = function (opt) {
  let devices = []
  for (let i = 0; i < 10; i++) {
    let newObject = {
      "id": Random.id(),
      "createdTime": Random.datetime(),
      "username": Random.cname(),
      'status': ['success', 'warning', 'danger'][Random.natural(0, 2)]
    }
    devices.push(newObject)
  }
  return {
    results: devices,
    total: 100
  }
}
const totalDevices = function (opt) {
  let devices = []
  for (let i = 0; i < 100; i++) {
    let newObject = {
      "id": Random.id(),
      "createdTime": Random.datetime(),
      "username": Random.cname(),
      'status': ['success', 'warning', 'danger'][Random.natural(0, 2)]
    }
    devices.push(newObject)
  }
  return {
    results: devices,
    total: 100
  }
}
const sleep = function (opt) {
  // 'heart', 'breath', 'score', 'sleepPeriod'
  function timetrans(date) {
    var date = new Date(date);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return h + m + s;
  }
  var item = Date.parse(new Date('2018/3/2 22:13:34'))
  let time = []
  let heart = []
  let breath = []
  let score = Random.natural(0, 100)
  let sleepPeroid = [
    { value: 0.5, name: '觉醒期' },
    { value: 2.0, name: '浅睡I期' },
    { value: 3.5, name: '浅睡II期' },
    { value: 2, name: '深睡期' },
  ]
  for (let t = 0; t < 550; t++) {
    // time.push(t+1)
    heart.push(Random.natural(60, 100))
    breath.push(Random.natural(10, 20))
    item = item + 60 * 1000;
    time.push(timetrans(item))
  }
  return {
    results: {
      userId: Random.id(),
      username: Random.cname(),
      time: time,
      heart: heart,
      breath: breath,
      score: score,
      sleepPeroid: sleepPeroid
    }
  }
}
const abnormalList = function (opt) {
  let users_list = []
  for (let i = 0; i < 20; i++) {
    let newObject = {
      userId: i + 1,
      username: Random.cname(),
      date: Random.date(),
      info: ['heart', 'breath'][Random.natural(0, 1)]
    }
    users_list.push(newObject)
  }

  return {
    results: {
      users_list: users_list
    }
  }
}
const avgHB = function (opt) {
  function timetrans(date) {
    var date = new Date(date);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return M + D;
  }
  var item = Date.parse(new Date('2018/2/2'))
  let time = []
  let heart = []
  let breath = []
  // let score = []
  for (var i = 0; i < 30; i++) {
    item = item + 60 * 1000 * 60 * 24;
    time.push(timetrans(item))
    heart.push(Random.natural(60, 100))
    breath.push(Random.natural(10, 20))
    // score.push(Random.natural(0, 100))
  }

  return {
    results: {
      "time": time,
      "heart": heart,
      "breath": breath,
    }
  }
}
const avgSleep = function (opt) {
  let sleepN1 = []
  let sleepN2 = []
  let sleepN3 = []
  let sleepN4 = []
  let time = []
  for (var i = 0; i < 7; i++) {
    time.push(i + 1)
    sleepN1.push(Random.float(0.1, 0.5, 1, 1))
    sleepN2.push(Random.float(1.5, 2.5, 1, 1))
    sleepN3.push(Random.float(2.5, 3.5, 1, 1))
    sleepN4.push(Random.float(1.5, 2, 1, 1))
  }

  return {
    results: {
      // time:time,
      sleepN1,
      sleepN2,
      sleepN3,
      sleepN4
    }
  }
}

const yesterday = function (opt) {
  function timetrans(date) {
    var date = new Date(date);    //如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return h + m + s;
  }
  let item = Date.parse(new Date('2018/2/2 19:00:00'))
  let time = [];
  let peroid = ['<2', '2~3', '3~4', '4~5', '5~6', '6~7', '7~8', '8~9', '>9']
  let Sleep_people = []
  let peroidPeople = [50, 100, 150, 250, 400, 2000, 5000, 2000, 200]
  for (let i = 0; i < 28; i++) {
    item = item + 60 * 1000 * 30;
    time.push(timetrans(item))
    Sleep_people.push(Random.natural(100, 1000))
  }
  let scorePercent = [
    { name: '<50', value: 1000 },
    { name: '50~70', value: 2000 },
    { name: '70~90', value: 6000 },
    { name: '90~100', value: 1000 }
  ]
  let DeepSleepPercent = [
    { name: '<0.1', value: 1000 },
    { name: '0.1~0.2', value: 2000 },
    { name: '0.2~0.25', value: 6000 },
    { name: '>0.25', value: 1000 }
  ]
  return {
    results: {
      time,
      Sleep_people,
      peroid,
      peroidPeople,
      scorePercent,
      DeepSleepPercent
    }
  }
}

const history = function (opt) {
  function timetrans(date) {
    var date = new Date(date);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M;
  }
  let item = Date.parse(new Date('2018/1/2 19:00:00'))
  let date = []
  let content = []
  for(let i = 0; i < 13; i++){
    date.push((new Date(item).getMonth() + 1))
    let newObject = {
      time: timetrans(item).replace("-", "年").replace("-","月份"),
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
    item = item + 60 * 1000 * 60 * 24 * 30;
  }

  return {
    results: {
      date,
      content
    }
  }
}
Mock.mock('/news', /post|get/i, produceData);
Mock.mock('/users/', 'get', userData);
Mock.mock('api/sleepData/1', 'get', sleepData);
Mock.mock('/login/', 'post', "success");
Mock.mock('/allusers', 'get', Mock.mock({
  "results|10": [{
    'id|+1': 1,
    'username': Random.cname(),
    'email': Random.email(),
    'device': Random.id(),
    'sleep': Random.id(),
    'status|1': [
      { 'type': 'success', 'content': '健康' },
      { 'type': 'warning', 'content': '异常' },
      { 'type': 'dangering', 'content': '危险' },
    ]
  }]
}));

Mock.mock(RegExp('api/sleep/users*'), 'get', sleepusers);
Mock.mock(RegExp('api/heart/users*'), 'get', heartusers);
Mock.mock(RegExp('api/breath/users*'), 'get', breathusers);
Mock.mock(RegExp('api/move/users*'), 'get', moveusers);

Mock.mock(RegExp('sleepPercent/*'), 'get', { 'Percent': 83 });
Mock.mock(RegExp('breathPercent/*'), 'get', { 'Percent': 84 });
Mock.mock(RegExp('breathBadPercent/*'), 'get', { 'Percent': 80 });
Mock.mock(RegExp('sleepBadPercent/*'), 'get', { 'Percent': 87 });


Mock.mock('api/users/lists/', 'get', totalUsers)
Mock.mock(RegExp('api/users/list/*'), 'get', userData)
Mock.mock(RegExp('api/users/create/*'), 'post', 'success')
Mock.mock(RegExp('api/users/update/*'), 'post', 'success')
Mock.mock(RegExp('api/users/delete/*'), 'get', 'success')

Mock.mock('api/users/lists/', 'get', totalDevices)
Mock.mock(RegExp('api/devices/list/*'), 'get', deviceData)
Mock.mock(RegExp('api/devices/create/*'), 'post', 'success')
Mock.mock(RegExp('api/devices/update/*'), 'post', 'success')
Mock.mock(RegExp('api/devices/delete/*'), 'get', 'success')

Mock.mock(RegExp('api/data/user/*'), 'get', sleep)
Mock.mock('api/users/abnormal/list', 'get', abnormalList)

Mock.mock(RegExp('api/avg/data/users/HB*'), 'get', avgHB)
Mock.mock(RegExp('api/avg/users/sleepData*'), 'get', avgSleep)

Mock.mock(RegExp('api/yesterday/'), 'get', yesterday)

Mock.mock(RegExp('api/history/'), 'get', history)



