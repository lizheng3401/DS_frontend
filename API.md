# API Guide

## 概述页面


| API                     | 参数     |   类型    |   示例      |  用处  |
| --------                | -----:  | -----:   | -----------:|:----: |
| api/sleepPercent/       | date    | string  |  20180310    |   获取指定日期睡眠健康人数占比   |
| api/sleepBadPercent/    | date    | string  |  20180310    |   获取指定日期失眠人数占比      |
| api/breathPercent/      | date    | string  |  20180310    |   获取指定日期呼吸健康人数占比   |
| api/breathPercent/      | date    | string  |  20180310    |   获取指定日期呼吸异常人数占比   |
| api/sleep/users         | time | string |  20180301-201803010 | 获取这段时间内的每天睡眠健康人数总数|
| api/sleepBad/users         | time | string |  20180301-201803010 | 获取这段时间内的每天失眠人数总数|
| api/breath/users         | time | string |  20180301-201803010 | 获取这段时间内的每天呼吸健康人数总数|
| api/breathBad/users         | time | string |  20180301-201803010 | 获取这段时间内的每天呼吸异常人数总数|