# Spring Boot 基本介绍

## 诞生背景

- Spring Boot 旨在简化 Spring 应用的初始搭建和开发过程。
- 提供了“约定优于配置”的原则，减少开发者的配置量。

## 基本介绍

- Spring Boot 是 Spring 全家桶中的一个子项目，提供一站式解决方案。
- 简化了 Spring 框架的使用难度，成为后端标准开发框架。

## 核心思想

- 约定优于配置（Convention over Configuration）：提供默认配置，允许自定义配置。

## 组件关系

- Spring Boot、Spring MVC、Spring 框架之间相互依存。
- Spring Boot 简化了 Spring 和 Spring MVC 的使用。

# Spring Boot 基本特性

## 独立运行

- 可以创建独立的应用，内置 Servlet 容器，无需外部依赖。

## 简化配置

- 提供了各种技术组件的一站式启动器（Starters）。

## 自动配置

- 根据类路径下的依赖自动配置 Bean。

## 无代码生成和无需 XML 配置

- 通过条件注解完成自动配置，无需生成额外代码或 XML 配置。

# Spring Boot 核心模块

## spring-boot

- 支持其他模块的核心模块。

## spring-boot-autoconfigure

- 提供自动配置功能。

## spring-boot-starters

- 提供各种技术组件的启动器。

## spring-boot-cli

- 提供命令行工具。

## spring-boot-actuator

- 提供监控和管理功能。

## spring-boot-actuator-autoconfigure

- 为 actuator 提供自动配置。

## spring-boot-test

- 提供测试支持。

## spring-boot-test-autoconfigure

- 为测试模块提供自动配置。

## spring-boot-loader

- 支持构建可执行的 JAR 文件。

## spring-boot-devtools

- 开发者工具模块，提供开发阶段的特性。

# Spring Boot 版本选择

## 版本周期

- 包括 GA（正式版本）、CURRENT（最新正式版本）、SNAPSHOT（快照版本）和 PRE（预览版本）。

## 支持版本

- 随着新版本的发布，旧版本可能会停止维护。

# Spring Boot 环境要求

## JDK 版本

- 不同版本的 Spring Boot 对 JDK 版本有不同要求。

## 依赖管理

- 需要合适版本的 Maven 和 Gradle 支持。

# Spring Boot 接口快速开发

## 生成项目

- 通过 Spring Initializr 生成项目。

## 导入依赖

- 添加所需的依赖到项目中。

## 编写接口

- 使用 Spring MVC 注解编写 RESTful 接口。

## 启动应用

- 通过 SpringApplication 启动应用。

## 测试接口

- 编写测试代码验证接口功能。

# 课堂练习

## 练习 1：多模块项目

![image-20240906200503656](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240906200503656.png)

## 练习 2：使用 Records 创建数据传输对象（DTO）

书籍记录类BookDTO:

```java
package com.wang.springbootquickstart.dto;

public record BookDTO(Long id,String title, String authoe ,Double price) {
    public BookDTO{
        if (price<0){
            throw new IllegalArgumentException("Price cannot be negative");
        }
    }
}

```

创建一个服务类BookService，返回书籍 DTO 列表：

```java
package com.wang.springbootquickstart.service;

import com.wang.springbootquickstart.dto.BookDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    public List<BookDTO> getAllBooks(){
        return List.of(
                new BookDTO(1l,"alix","tom",19.33),
                new BookDTO(2L,"Spring Boot in Action","Bob",34.99)
        );
    }
}

```

 控制器 BookController：

```java
package com.wang.springbootquickstart.controller;

import com.wang.springbootquickstart.dto.BookDTO;
import com.wang.springbootquickstart.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;


    @GetMapping()
    public List<BookDTO> getBooks(){
        return bookService.getAllBooks();
    }
}

```

运行结果：

![image-20240906200811140](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240906200811140.png)

## 练习 3：结合 Switch Expressions 实现高级路由逻辑

枚举RequestType：

```java
package com.wang.springbootquickstart.enums;

public enum ReuqestType {
    QUERY,COMPLAINT,SUGGESTION
}

```

CustomerService:

```java
package com.wang.springbootquickstart.service;

import org.springframework.stereotype.Service;
import com.wang.springbootquickstart.enums.ReuqestType;
@Service
public class CustomerService {
    public String handlerequest(ReuqestType reuqestType ){
        return switch (reuqestType){
            case QUERY -> handleQuery();
            case COMPLAINT -> handleComplaint();
            case SUGGESTION -> handleSuggestion();
        };
    }

    private String handleQuery(){
        return "查询成功";
    }
    private String handleComplaint(){
        return "投诉成功";
    }
    private String handleSuggestion(){
        return "建议请求";
    }
}

```

CustomerController:

```java
package com.wang.springbootquickstart.controller;

import com.wang.springbootquickstart.enums.ReuqestType;
import com.wang.springbootquickstart.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/requests")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/{type}")
    public String handleRequest(@PathVariable ReuqestType type){
        return  customerService.handlerequest(type);
    }
}

```

运行结果：

![image-20240906201102450](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240906201102450.png)



## 练习 4：使用 LocalDate 和 LocalTime 处理日期和时间

实体类Meeting：

```java
package com.wang.springbootquickstart.bean;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class Meeting {

    private Long id;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;

    public boolean isOverlapping(Meeting other) {
        // 检查两个会议是否在同⼀天
       return this.date.equals(other.date)&&(this.startTime.isBefore(other.endTime)&&this.endTime.isAfter(other.startTime));
    }
}
```

服务类MeetingService

```java
package com.wang.springbootquickstart.service;

import com.wang.springbootquickstart.bean.Meeting;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MeetingService {
    private final List<Meeting> meetings = new ArrayList<>();

    public boolean isRoomAvailable(Meeting newMeeting) {
        return meetings.stream()
                .noneMatch(existingMeeting -> {
                            return existingMeeting.isOverlapping(newMeeting);
                        }
                );
    }

    public void addMeeting(Meeting meeting) {
        meetings.add(meeting);
    }
}
```

控制器MeetingController

```java
package com.wang.springbootquickstart.controller;

import com.wang.springbootquickstart.bean.Meeting;
import com.wang.springbootquickstart.service.MeetingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/meetings")
@RequiredArgsConstructor
public class MeetingController {

    private final MeetingService meetingService;
    @PostMapping("/check")
    public ResponseEntity<String> checkAvailability(@RequestBody Meeting meeting){
        if (meetingService.isRoomAvailable(meeting)){
            meetingService.addMeeting(meeting);
            return ResponseEntity.ok("会议室可用，会议已预定！");
        }else {
            return ResponseEntity.status(409).body("会议室不可⽤！");
        }
    }
}
```

![image-20240906201746831](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240906201746831.png)

再次发送

![image-20240906201803520](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240906201803520.png)



## 练习 5：使用 Stream API 实现简单的用户过滤功能

用户类User

```java
package com.wang.springbootquickstart.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Long id;
    private String name;
    private int age;
}
```

服务类UserService

```java
package com.wang.springbootquickstart.service;

import com.wang.springbootquickstart.bean.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserService {
    private final List<User> users = List.of(
            new User(1L, "张三", 22),
            new User(2L, "张三丰", 17),
            new User(3L, "张三疯", 19),
            new User(4L, "张三⻛", 16),
            new User(5L, "张三峰", 25),
            new User(6L, "张三凤", 17),
            new User(7L, "张三冯", 47),
            new User(8L, "张三奉", 12)
    );
    public List<String> getAdultUserNames() {
        return users.stream()
                // 过滤年龄⼤于18岁的⽤户
                .filter(user -> user.getAge() > 18)
                // 提取名字
                .map(User::getName)
                .collect(Collectors.toList());  //收集 将流转换为其他形式
    }
    }
```

控制器UserController

```java
package com.wang.springbootquickstart.controller;

import com.wang.springbootquickstart.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private  final UserService userService;

    @GetMapping("/adults")
    public List<String> getAdultUserNames(){
        return userService.getAdultUserNames();
    }
}
```

# spring Boot 启动分析

## 启动流程

- 入口类：`main`方法
- 创建`SpringApplication`对象
- 执行`run`方法
- 准备环境
- 打印Banner
- 创建`ApplicationContext`
- 初始化`ApplicationContext`
- 刷新
- 启动服务器
- 回调`ApplicationContext`和`CommandRunner`
- 启动完成
- 关闭

# IDEA 环境下的热加载

## 引入 devtools 的 Maven 依赖

```java
   <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
        </dependency>
```

## 设置 IDEA

![image-20240906203130895](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240906203130895.png)

这样设置是自动保存的，如果只修改一个字符串时，又可能修改一个字符就重新编译了 ，所以，可以在代码修改完成之后 用ctrl+F9 对修改类重新编译，而不是做项目自动编译

![image-20240906203444368](C:\Users\wang\AppData\Roaming\Typora\typora-user-images\image-20240906203444368.png)