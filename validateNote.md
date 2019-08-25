# 概述

- 本目录下的 validata.js 是作为表单验证的实用工具。可以进行参考扩充。
- 使用时，应当先将 validate.js 加入到 src/service/util/ 下
- 基本思想都是最终给出二值判断，通过或没通过。
- 多用正则表达式来进行

# 用法说明

#### 导入

```javascript
import gValidate from "@/service/util/validate.js";
```

#### 抽象模块

这样的函数可以灵活书写，需要根据实际情况使用

```javascript
    validate() {
      // 1.首先进行手机号检查
      if (!gValidate.isMobileNumber(this.phone)) return false
      if (this.chooseTab === 1) {
        // 2.验证码检查
        console.log(this.sms)
        if (!gValidate.isSms(this.sms)) return false
      } else {
        // 3.密码检查
        if (!gValidate.isPassword(this.password)) return false
      }

      return true
    },
```

#### 查验

```javascript
// 1.对表单信息进行检查
if (!this.validate()) return;
```
