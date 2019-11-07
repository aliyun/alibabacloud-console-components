# Upload 上传组件

何时使用

用户根据提示将自己本地的相应信息(包含本地和云储存)上传到网站，上传组件可以帮助用户对上传过程和上传结果有预期，并可以更改或撤销上传行为。

## 基本用法

### 文件上传

#include "demo/demo1.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备


### 接口返回数据格式要求

```
{
  "success": true,
  "message": "上传成功",                                  // success=false 时候可以返回错误信息
  "url": "http://kfupload.alibaba.com/a.png"             // 返回结果
  "imgURL": "http://kfupload.alibaba.com/a.png",         // 图片预览地址 (非必须)
  "downloadURL": "http://kfupload.alibaba.com/a.png",    // 文件下载地址 (非必须)
}
```

### 后端数据格式化

通过 `formatter` 将来自后端的 **不规则数据** 转换为 **符合组件要求** 的数据格式

> 假设服务器的响应数据如下

```
{
  "status": "success",                              // 上传成功返回码
  "img_src": "http://kfupload.alibaba.com/a.jpg",   // 图片链接
}
```

> 使用 `formatter` 对接口返回的不规则数据进行转换

```
<Upload
  action="http://127.0.0.1:3001/upload"
  formatter={(res) => {
    return {
      success: res.status === 'success',
      url: res.img_src,
    }
  }}
/>
```


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/upload/index.md)

## Method

### Upload.Uploader

> [底层能力] 文件上传核心功能
> let uploader = new Upload.Uploader([options]);

#### options

| 参数              | 说明                                                                     | 类型              | 默认值   |
| --------------- | ---------------------------------------------------------------------- | --------------- | ----- |
| action          | 上传的地址                                                                  | String          | -     |
| data            | 上传额外传参                                                                 | Object/Function | -     |
| headers         | 设置上传的请求头部                                                              | Object          | -     |
| withCredentials | 是否允许请求携带 cookie                                                        | Boolean         | false |
| onProgress      | 上传中<br/><br/>**签名**:<br/>Function() => void                               | Function        | noop  |
| onSuccess       | 上传成功回调函数，参数为请求下响应信息以及文件<br/><br/>**签名**:<br/>Function() => void           | Function        | noop  |
| onError         | 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件<br/><br/>**签名**:<br/>Function() => void | Function        | noop  |

### 自定义Request

某些场景下需要自定义Request,例如对接AWS S3 jd-sdk or aliyun oss sdk,. Upload 支持 传入自定义的 request方法.

            function customRequest(option) {
                /* coding here */
                return {abort() {/* coding here */}};
            }

            <Upload request={customRequest}/>

customRequest被传入一个 object,包含以下属性:

-   onProgress: (event: { percent: number }): void
-   onError: (event: Error, body?: Object): void
-   onSuccess: (body: Object): void
-   data: Object // 额外的数据
-   filename: String // 文件名
-   file: File // 原生File对象
-   withCredentials: Boolean // 是否携带cookie
-   action: String // 请求地址
-   method: String // 请求类型 post/put
-   timeout: Number // 超时
-   headers: Object // 请求头

request需要返回一个包含abort方法的对象,用于中断上传

-   abort(file?: File) => void: abort the uploading file

具体实现参照 Upload 默认request方法: <https://github.com/alibaba-fusion/next/blob/master/src/upload/runtime/request.jsx>

### ErrorCode

| ErrorCode           | 含义                                                             |
| ------------------- | -------------------------------------------------------------- |
| EXCEED_LIMIT        | 当设置了limit, 选中的文件 + 已上传的文件 > limit 报错                           |
| BEFOREUPLOAD_REJECT | BeforeUpload中返回了 false/Promise.resolve(false)/Promise.reject() |
| RESPONSE_FAIL       | 返回提响应错误                                                        |

所有的值在`Upload.ErrorCode`.

### onChange 返回结构

        {
          uid: 'uid',       // 文件唯一标识
          name: 'xx.png'    // 文件名
          state: 'done',    // 状态有：selected uploading done error
          response: {"success":true}  // 服务端响应内容
          url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg', // 头像(可选)
          downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'   // 下载(可选)
        }

### 接口 response 返回数据格式要求

        {
          "success": true,
          "message": "上传成功",                                  // success=false 时候可以展示错误
          "url": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"             // 返回结果
          "imgURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",         // 图片预览地址 (非必须)
          "downloadURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",    // 文件下载地址 (非必须)
        }

### 后端数据格式化

通过 `formatter` 将来自后端的不规则数据转换为符合组件要求的数据格式

-   `假设` 服务器的响应数据如下


        {
          "status": "success",                              // 上传成功返回码
          "img_src": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",   // 图片链接
        }

-   转换方法


        <Upload
          action="http://127.0.0.1:3001/upload"
          formatter={(res, file) => {
            // 函数里面根据当前服务器返回的响应数据
            // 重新拼装符合组件要求的数据格式
            return {
              success: res.status === 'success',
              url: res.img_src,
            }
          }}
        />

## Upload 服务端代码样例

Next Upload组件上传文件使用的`multipart/form-data`方式上传文件,具体实现是在支持`FormData`对象的浏览器中使用xhr对象发送formdata。在不支持`FormData`对象的浏览器如IE9, 使用iframe原生表单实现。

各个语言的服务端框架,必然是可以处理`multipart/form-data`类型的请求,并解析出文件。一下给出两种语言的样例代码

-   [Java Springboot 样例](https://github.com/alibaba-fusion/next-upload-java-server)
-   [Node Eggjs 样例](https://github.com/alibaba-fusion/next-upload-node-server)

## Demo
 

### 文字列表

#include "demo/demo2.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 图片列表

#include "demo/demo3.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 卡片

#include "demo/demo4.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 拖拽上传

#include "demo/demo5.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 自定义上传参数

#include "demo/demo6.js"

通过 data 控制自定义参数

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 提交上传

#include "demo/demo7.js"

通过按钮点击提交上传

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 粘贴上传

#include "demo/demo8.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 个数限制

#include "demo/demo9.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 大小限制

#include "demo/demo10.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 内容回填

#include "demo/demo11.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 上传前预处理

#include "demo/demo12.js"

使用beforeUpload去控制上传行为

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备


### 额外内容

#include "demo/demo13.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备

### 裁剪上传

#include "demo/demo14.js"

提醒: //upload-server.alibaba.net/upload.do接口:
            该接口仅作为测试使用,业务请勿使用
            该接口仅支持图片上传,其他文件类型接口请自备


