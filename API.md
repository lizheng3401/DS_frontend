# API Guide

## 概述页面

- api/sleep/percent/  
  - 返回睡眠健康人数占比
- api/breath/percent/
  - 返回呼吸健康人数占比
- api/move/percent/
  - 返回体动健康人数占比
- api/heart/percent/
  - 返回心率健康人数占比
 - 以下接口描述均适用于这四者
 - get
 - 参数:
   - （可选）begin: string 20180301  指定日期范围（开始，包含该日）
   - （可选）end: string 20180312  指定日期范围（结束，包含该日）
 - 用法：
   - 只有begin：返回指定日期的值，
   - 两者都有：返回指定范围内每天对应的值
   - 无参数：返回最新的值
  - 返回形式：
  ```json
    {
      "results":{
        "time": ["20180315", ],
        "percent": [90, ]
      }
    }
  ```
- api/sleep/users/
  - 返回睡眠情况人数（包括正常和异常）
- api/heart/users 
  - 返回心率情况人数（包括正常和异常）
- api/breath/users  
  - 返回呼吸情况人数（包括正常和异常）
- api/move/users 
  - 返回体动情况人数（包括正常和异常）
  - 以下接口描述均适用于这四者
  - get
  - 参数:
     - （可选）begin: string 20180301  指定日期范围（开始，包含该日）
     - （可选）end: string 20180312  指定日期范围（结束，包含该日）
  - 用法：
     - 只有begin：返回指定日期的值，
     - 两者都有：返回指定范围内每天对应的值
     - 无参数：返回最近31天的值
  - 返回形式：
    ```json
      {
        "results":{
          "time": ["20180315", ],
          "expection": [90, ],
          "normal":[90, ]
        }
      }
    ```

## 后台信息页面

- api/users/list/
  - 获取用户信息列表
  - get
  - 参数：
    - page: int 第几页
    - status：string 用户的状态 'success','warning', 'danger'三种之一
    - username: string 指定用户名
  - 用法：
    - 无参数：则返回所有的用户信息
    - 有参数：每次只返回一页的数据，默认一页的数据为10条
      - page：指定返回第几页的数据
      - status：若存在，则返回对应于该状态的所有用户的数据
      - username: 若存在，则返回该用户的信息（username和status不会同时出现）
  - 返回格式如下：
  ```JSON
  {
    "results": [
      {
        "id": 1,
        "username": "李正",
        "email": "lizheng3401@gmail.com",
        "device": "520000200704026558",  //注：此处表示设备ID
        "sleep": "220000200705013491",//注：此处表示该用户最近一次的睡眠数据的ID
        "status": "success" //['success', 'warning', 'danger']三种之一
      }
    ],
    "total": 200  //返回的用户总数
  }
  ```
- api/users/create/
  - 添加用户
  - post
  - 参数：
    - usename：string 用户名
    - password: string 密码（明文）
  - 用法：根据post的username和password创建新用户
    - 成功则返回success
    - 失败返回failure
  - 返回格式
  ```JSON
  {
    "results": "success",//或"failure"表示失败
  }
  ```
- api/users/update/ 
  - 更新用户信息(目前只支持更新用户名和电子邮件)
  - post
  - 参数
    - id: int 用户的ID
    - （可选）username：string 用户名
    - （可选）email：string 电子邮件
  - 用法：将返回的信息和已有信息对比,然后修改对应ID的信息
    - 成功则返回success
    - 失败返回failure
  - 返回格式
    ```JSON
    {
      "results": "success",//或"failure"表示失败
    }
    ```
- api/users/delete/
  - 删除用户
  - get
  - 参数：
    - id: int 用户的ID
  - 用法：根据ID删除用户
    - 成功则返回success
      - 失败返回failure
   - 返回格式
   ```JSON
    {
      "results": "success",//或"failure"表示失败
    }
   ```

