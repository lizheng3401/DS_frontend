const Mock = require('mockjs')
const data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
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
  let users = [];
  for(let i = 0; i < 10; i++)
  {
    let newObject = {
      'id': i+1,
      'username': Random.cname(),
      'email': Random.email(),
      'device': Random.id(),
      'sleep': Random.id()
    };
    users.push(newObject);
  }
  return {
    results: users
  }
};
const sleepData = function (opt) {
  let sleep = {
    time: [],
    heart: [],
    breath: []
  }
  for(let i = 0; i < 200; i++)
  {
    sleep.time.push(i)
    sleep.heart.push(Random.natural(30, 100))
    sleep.breath.push(Random.natural(8, 40))
  }
  return sleep
}
Mock.mock('/news', /post|get/i, produceData);//当post或get请求到/news路由时Mock会拦截请求并返回上面的数据

Mock.mock('/users/', 'get',userData);
Mock.mock('api/sleepData/1', 'get', sleepData);
Mock.mock('/login/', 'post', "success");
