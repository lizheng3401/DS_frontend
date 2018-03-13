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
  let j = page*10 - 9
  let users = [];
  let total = 100
  for(let i = 0; i < 10; i++)
  {
    let newObject = {
      'id': j,
      'username': Random.cname(),
      'email': Random.email(),
      'device': Random.id(),
      'sleep': Random.id(),
      'status':  ['success', 'warning', 'danger'][Random.natural(0, 2)]
    };
    j += 1
    if(key === "status")
    {
      if(!(newObject.status === query))
      {
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
  for(let i = 0; i < 100; i++)
  {
    let newObject = {
      'id': i+1,
      'username': Random.cname(),
      'email': Random.email(),
      'device': Random.id(),
      'sleep': Random.id(),
      'status':  ['success', 'warning', 'danger'][Random.natural(0, 2)]
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
  for(let i = 0; i < 200; i++)
  {
    sleep.time.push(i);
    sleep.heart.push(Random.natural(30, 100));
    sleep.breath.push(Random.natural(8, 40));
  }
  return sleep
};
const sleepusers = function (opt) {
  let result = {
    cate: '睡眠',
    expectedData: [],
    actualData:[],
  };
  for (let i = 0; i < 31; i++)
  {
    result.expectedData.push(Random.natural(10, 1000));
    result.actualData.push(Random.natural(500, 10000))
  }
  return result
};
const breathusers = function (opt) {
  let result = {
    cate: '呼吸率',
    expectedData: [],
    actualData:[],
  };
  for (let i = 0; i < 31; i++)
  {
    result.expectedData.push(Random.natural(0, 10));
    result.actualData.push(Random.natural(10, 30))
  }
  return result
};
const heartusers = function (opt) {
  let result = {
    cate: '心率',
    expectedData: [],
    actualData:[],
  };
  for (let i = 0; i < 31; i++)
  {
    result.expectedData.push(Random.natural(0, 30));
    result.actualData.push(Random.natural(30, 80))
  }
  return result
}
const moveusers = function (opt) {
  let result = {
    cate: '体动',
    expectedData: [],
    actualData:[],
  };
  for (let i = 0; i < 31; i++)
  {
    result.expectedData.push(Random.natural(0, 10));
    result.actualData.push(Random.natural(10, 100))
  }
  return result
}
const deviceData = function (opt) {
  let devices = []
  for(let i = 0; i < 10; i++){
    let newObject = {
      "id": Random.id(),
      "createdTime": Random.datetime(),
      "username":Random.cname(),
      'status':  ['success', 'warning', 'danger'][Random.natural(0, 2)]
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
  for(let i = 0; i < 100; i++){
    let newObject = {
      "id": Random.id(),
      "createdTime": Random.datetime(),
      "username":Random.cname(),
      'status':  ['success', 'warning', 'danger'][Random.natural(0, 2)]
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
  var item = new Date('2018/3/2 22:13:34')
  let time = []
  let heart = []
  let breath = []
  let score = Random.natural(0,100)
  let sleepPeroid = [
    {value:Random.float(0.5, 8, 1, 1), name:'觉醒期'},
    {value:Random.float(0.5, 8, 1, 1), name:'浅睡I期'},
    {value:Random.float(0.5, 8, 1, 1), name:'浅睡II期'},
    {value:Random.float(0.5, 8, 1, 1), name:'深睡期'},
  ]
  for(let t = 0; t < 100; t++){
    time.push(t+1)
    heart.push(Random.natural(30, 80))
    breath.push(Random.natural(8, 35))
    // item = new Date(item + 60 * 1000);
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
  for(let i = 0; i < 10; i++)
  {
    let newObject = {
      userId: i+1,
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
  let time = []
  let heart = []
  let breath = []
  // let score = []
  for(var i = 0; i < 30; i++)
  {
    time.push(i+1)
    heart.push(Random.natural(30, 80))
    breath.push(Random.natural(8, 35))
    // score.push(Random.natural(0, 100))
  }

  return {
    results: {
      "time": time,
      "heart":heart,
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
  for(var i = 0; i < 7; i++)
  {
    time.push(i+1)
    sleepN1.push(Random.float(0.5, 8, 1, 1))
    sleepN2.push(Random.float(0.5, 8, 1, 1))
    sleepN3.push(Random.float(0.5, 8, 1, 1))
    sleepN4.push(Random.float(0.5, 8, 1, 1))
  }

  return {
    results: {
      // time:time,
      "sleepN1": sleepN1,
      "sleepN2": sleepN2,
      "sleepN3": sleepN3,
      "sleepN4": sleepN4,
    }
  }
}
Mock.mock('/news', /post|get/i, produceData);
Mock.mock('/users/', 'get',userData);
Mock.mock('api/sleepData/1', 'get', sleepData);
Mock.mock('/login/', 'post', "success");
Mock.mock('/allusers', 'get', Mock.mock({
  "results|10" :[{
    'id|+1': 1,
    'username': Random.cname(),
    'email': Random.email(),
    'device': Random.id(),
    'sleep': Random.id(),
    'status|1':  [
      {'type': 'success', 'content': '健康'},
      {'type': 'warning', 'content': '异常'},
      {'type': 'dangering', 'content': '危险'},
    ]
  }]
}));

Mock.mock(RegExp('api/sleep/users*'), 'get', sleepusers);
Mock.mock(RegExp('api/heart/users*'), 'get', heartusers);
Mock.mock(RegExp('api/breath/users*'), 'get', breathusers);
Mock.mock(RegExp('api/move/users*'), 'get', moveusers);

Mock.mock(RegExp('sleepPercent/*'),'get',{'Percent': Random.natural(0, 100)} );
Mock.mock(RegExp('breathPercent/*'),'get', {'Percent': Random.natural(0, 100)});
Mock.mock(RegExp('breathBadPercent/*'),'get', {'Percent': Random.natural(0, 100)});
Mock.mock(RegExp('sleepBadPercent/*'),'get', {'Percent': Random.natural(0, 100)});


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


