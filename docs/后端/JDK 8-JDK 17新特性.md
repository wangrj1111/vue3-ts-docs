# JDK 8-JDK 17新特性

## JDK 8

### Lambda 表达式

#### 由匿名类向Lambda表达式变换

1. 匿名类的正常写法

```java
HeroChecker c1 = new HeroChecker() {
​    public boolean test(Hero h) {
​        return (h.hp>100 && h.damage<50);
​    }
};
```



2. 把外面的壳子去掉

只保留**方法参数**和**方法体**
参数和方法体之间加上符号 **->**

```java
HeroChecker c1 = new HeroChecker() {
​    public boolean test(Hero h) {
​        return (h.hp>100 && h.damage<50);
​    }
};
```



3. 把return和{}去掉

```java
HeroChecker c3 = (Hero h) ->h.hp>100 && h.damage<50;

```



4. 把 参数类型和圆括号去掉(只有一个参数的时候，才可以去掉圆括号)

```java
HeroChecker c4 = h ->h.hp>100 && h.damage<50;
```

### **Stream API**

#### stream的几个特点

元素是特定类型的对象，形成一个队列。 Java中的Stream并不会存储元素，而是按需计算。

数据源的来源。 可以是集合，数组，I/O channel， 产生器generator 和IntStream等

聚合操作 类似SQL语句一样的操作， 比如filter, map, reduce, find, match, sorted等。

```java
/*
	  筛选与切片
		filter(Lambda)——接收 Lambda ，从流中排除某些元素。
		limit(n)——截断流，使其元素不超过给定数量n。
		skip(n) —— 跳过元素，返回一个扔掉了前 n 个元素的流。若流中元素不足 n 个，则返回一个空流。与 limit(n) 互补
		distinct()——筛选，通过流所生成元素的 hashCode() 和 equals() 去除重复元素
	 */
    //filter(Predicate p)
    //内部迭代：迭代操作 Stream API 内部完成

        /*
      映射
      map——接收 Lambda,将元素转换成其他形式或提取信息。接收一个函数作为参数，
该函数会被应用到每个元素上，并将其映射成一个新的元素。
      flatMap——接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流
    */
     /*
      排序
      sorted()——自然排序（Comparable中的comparaTo方法）
      sorted(Comparator com)——定制排序
    */
    public List<String> test(){
     return users.stream()
             //过滤年龄大于20岁的用户
             .filter(user -> user.getAge()>20)
             //限制元素数量为5
             .limit(5)
             //扔掉前面两个元素
             .skip(2)
             //提取名字
             .map(User::getName)
             .sorted()
             .collect(Collectors.toList());  //收集 将流转换为其他形式
    }
```

### **新的日期和时间API**

#### 基本日期/时间类

- **LocalDate**：表示没有时间的日期，例如生日、纪念日等。
- **LocalTime**：表示一天中的时间，不包含日期。
- **LocalDateTime**：同时表示日期和时间，但不包含时区信息。
- **ZonedDateTime**：表示带有时区的日期和时间。

#### 代码示例

```java
LocalDate today = LocalDate.now(); // 获取当前日期
LocalTime now = LocalTime.now(); // 获取当前时间
LocalDateTime currentDateTime = LocalDateTime.now(); // 获取当前日期和时间
ZonedDateTime zonedDateTime = ZonedDateTime.now(); // 获取当前日期和时间，带时区
//格式化代码
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
String formattedDate = today.format(formatter); // 格式化日期
LocalDate parsedDate = LocalDate.parse("2024-08-22", formatter); // 解析日期
```

### **Optional类**

#### 简介

Java 8 引入了 `Optional` 类，它是一个容器类，用于包含或不包含非空值。它的主要目的是提供一种更清晰、更安全的方式来处理可能为空的对象，从而避免 `NullPointerException`。`Optional` 类可以被看作是一种包装器，它包装了一个可能为 `null` 的值。

#### 特点

- **防止空值**：通过使用 `Optional`，你可以确保你的代码在处理可能为空的对象时更加健壮。
- **链式调用**：`Optional` 提供了许多方法，支持链式调用，使得代码更加简洁。
- **减少 `null` 检查**：使用 `Optional` 可以减少显式的 `null` 检查。

#### 代码示例

```java
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        // 创建一个非空的 Optional 对象
        Optional<String> optional = Optional.of("Hello, World!");

        // 打印值（如果存在）
        optional.ifPresent(System.out::println);

        // 获取值，如果为空则使用默认值
        String value = optional.orElse("Default Value");
        System.out.println("Value: " + value);

        // 获取值，如果为空则通过供应函数获取默认值
        String valueFromSupplier = optional.orElseGet(() -> "Default Value from Supplier");
        System.out.println("Value from Supplier: " + valueFromSupplier);

        // 获取值，如果为空则抛出异常
        String valueOrThrow = optional.orElseThrow(() -> new IllegalArgumentException("No value present"));
        System.out.println("Value or Exception: " + valueOrThrow);

        // 转换值
        Optional<Integer> lengthOptional = optional.map(String::length);
        lengthOptional.ifPresent(len -> System.out.println("Length of String: " + len));

        // 过滤值
        Optional<String> filtered = optional.filter(s -> s.length() > 10);
        filtered.ifPresent(s -> System.out.println("Filtered Value: " + s));

        // 处理空值的情况
        Optional<String> empty = Optional.ofNullable(null);
        String defaultValue = empty.orElse("Default Value");
        System.out.println("Default Value for Empty Optional: " + defaultValue);
    }
}
```

## JDK 9

### **模块系统（JPMS）**

#### 简介

ava平台模块系统（JPMS）是Java 9引入的一个重要特性，它旨在提供更好的封装、更清晰的依赖管理和更高效的运行时性能

#### 示例代码

```java
module com.example.mymodule {
    requires java.base;
    exports com.example.mymodule.api;
}
```

## JDK10

### **局部变量类型推断（var）**

#### 简介

Java 10 引入了局部变量类型推断（Local-Variable Type Inference）的特性，通过关键字 `var` 实现。这个特性允许编译器根据变量的初始化值来推断其类型，从而减少模板化的代码，使代码更加简洁和易读。、

#### var 关键字的使用场景

- **实例化集合时**：当你在使用如 `ArrayList`、`HashMap` 等集合时，可以利用 `var` 简化代码。
- **流操作**：在处理流（Streams）时，`var` 可以用来声明流中的变量。
- **lambda 表达式**：在 lambda 表达式中，`var` 可以用来声明局部变量。
- **循环**：在 for-each 循环中，`var` 可以用来声明迭代变量

#### var 关键字的优点

- **减少代码量**：不需要显式声明变量的类型，减少代码的冗余。
- **提高代码可读性**：使代码更加简洁，便于阅读和维护。
- **保持类型安全**：尽管使用了 `var`，Java 依然是一个静态类型语言，保持了类型安全。

#### var 关键字的限制

- **不能用于成员变量**：`var` 只能用于局部变量，不能用于类的成员变量。
- **不能用于数组**：不能使用 `var` 声明数组类型。
- **不能用于泛型**：在泛型声明中不能使用 `var`。

#### 代码示例

```java
//集合实例化
var list = new ArrayList<String>();
list.add("Java");
System.out.println(list);

var map = new HashMap<String, Integer>();
map.put("Java", 10);
System.out.println(map);
//流操作
var numbers = Arrays.asList(1, 2, 3, 4, 5);
var sum = numbers.stream().reduce(0, (a, b) -> a + b);
System.out.println("Sum: " + sum);
//Lambda表达式
Runnable r = var timer = () -> System.out.println("Timer running");
//for-each循环
var items = new String[] {"apple", "banana", "cherry"};
for (var item : items) {
    System.out.println(item);
}
```

## JDK11

### **HTTP/2客户端**

Java 11 引入了一个新的 HTTP 客户端 API，它实现了 HTTP/2 和 WebSocket。这个 API 旨在取代已经存在于 JDK 中多年的老旧 `HttpURLConnection` 类。新的 HTTP 客户端 API 提供了更现代、更高效的方式来发送 HTTP 请求和接收响应。

#### 主要特点

- **支持 HTTP/2 协议**：默认使用 HTTP/2，如果服务器不支持则回退到 HTTP/1.1。
- **异步请求**：支持异步发送请求和处理响应。
- **WebSocket 支持**：可以用于创建和管理 WebSocket 连接。
- **BodyPublisher 和 BodyHandler**：用于处理请求和响应体。

#### 示例代码

```java
//发送GET请求
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://postman-echo.com/get"))
    .GET()
    .build();

client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .join();
//发送POST请求
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://postman-echo.com/post"))
    .headers("Content-Type", "text/plain;charset=UTF-8")
    .POST(HttpRequest.BodyPublishers.ofString("Sample request body"))
    .build();

client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .join();
```

## JDK12

### **Switch表达式**

#### 简介

Java 12 引入了 Switch 表达式（Preview），而 Java 13 将其作为正式功能。Switch 表达式是对传统 switch 语句的增强，它允许使用箭头函数（->）来简化代码，使得 switch 语句更加简洁和易读

#### 特点

- **箭头函数**：可以使用箭头函数来替代传统的 case 代码块。
- **返回值**：Switch 表达式可以返回一个值，这使得它在某些情况下可以作为方法的替代。
- **模式匹配**：在 Java 14 中，Switch 表达式进一步增强，支持模式匹配（Preview），使得 switch 语句可以检查更多的数据类型和模式。

#### 示例代码

```java
String day = "MONDAY";
switch (day) {
    case "MONDAY", "SUNDAY" -> System.out.println(6);
    case "TUESDAY", "THURSDAY" -> System.out.println(4);
    default -> System.out.println(5);
}
```



## JDK14

### 实例匹配

#### 简介

实例匹配（Pattern Matching）是 Java 14 引入的一个预览特性，它增强了 `instanceof` 操作符，使得类型检查和类型转换更加简洁和安全。在 Java 14 之前，使用 `instanceof` 进行类型检查时，通常需要编写冗长的代码来对对象类型进行检查并进行强制类型转换。

#### 特点

- **类型检查与类型转换的结合**：实例匹配允许在 `instanceof` 操作符中直接进行类型转换，无需显式地进行类型转换。
- **更简洁的代码**：可以减少代码的冗余，使代码更加简洁易读。
- **增强的安全性**：由于编译器会检查类型，因此可以减少运行时的类型转换错误。

#### 代码示例

```java
public class PatternMatchingExample {
    public static void main(String[] args) {
        Object obj = "Hello, World!";

        if (obj instanceof String str) {
            System.out.println(str.toUpperCase());
        } else if (obj instanceof Integer intNum) {
            System.out.println(intNum * 2);
        } else {
            System.out.println("Unknown type");
        }
    }
}
```

## JDK15

### 文本块

文本块（Text Blocks）是 Java 15 引入的一个预览特性，它在 Java 16 中成为正式功能。文本块允许你编写多行字符串文本而不需要对每一行进行转义，这使得处理多行字符串（如 JSON、XML、SQL 查询等）变得更加容易和直观。

##### 特点

- **多行字符串**：可以包含跨越多行的文本，不需要在每行末尾添加 `\`。
- **避免转义**：在文本块中，大多数特殊字符（如双引号）不需要转义。
- **易读性**：提高了代码的可读性，尤其是在处理复杂的多行字符串时。

##### 代码示例

```java
public class TextBlockExample {
    public static void main(String[] args) {
        String html = """
            <html>
            <body>
            <h1>Hello, World!</h1>
            </body>
            </html>
            """;

        System.out.println(html);
    }
}
```

### **密封类**

#### 简介

密封类（Sealed Classes）是 Java 15 引入的一个预览特性，并在 Java 16 和 Java 17 中继续作为预览特性，最终在 Java 17 中成为正式特性。这个特性允许类或接口的作者限制哪些其他类或接口可以继承或实现它们。

#### 作用

密封类的主要目的是提供一种更加精确地控制类继承的方法。通过这种方式，类的设计者可以指定一个类它能够被哪些类继承，它增强了类的封装性和安全性。由于密封类限制了类的继承，所以它使得代码更加可预测和易于维护

#### 代码示例

```java
public sealed class Shape permits Circle, Square, Rectangle {
    // 父类成员
}

final class Circle extends Shape {
    // Circle 特有的成员
}

sealed class Square extends Shape permits Square.Rounded {
    // Square 特有的成员
}

non-sealed class Rectangle extends Shape {
    // Rectangle 特有的成员
}

final class Rounded extends Square {
    // Rounded 特有的成员
}
```



## JDK16

### **记录（Records）**

#### 简介

记录（Records）是 Java 14 引入的一个预览特性，并在 Java 16 中成为正式特性。Records 提供了一种简洁的方式来创建不可变的数据载体，通常用于数据传输对象（DTOs）、值对象（VOs）等场景

#### 特点

- **不可变性**：记录类的实例一旦创建，其状态就不能被修改。
- **自动生成的方法**：记录类自动提供了 `equals()`、`hashCode()`、`toString()` 方法的实现。
- **简洁的语法**：记录类的声明非常简洁，减少了样板代码。

#### 示例代码

```java
public record Point(int x, int y) {
    // 可以在这里添加额外的方法
    public Point {
        // 可以在这里添加构造逻辑，例如参数校验
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Coordinates must be non-negative");
        }
    }
    
    public static Point origin() {
        return new Point(0, 0);
    }
    
    public double distance(Point other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}
```

## JDK17

### **模式匹配增强（Pattern Matching for `switch`）**

#### 简介

在 Java 17 中，模式匹配增强是 `switch` 表达式的一个新特性，它允许在 `switch` 语句中使用类型模式和其他模式。这种增强使得 `switch` 表达式可以处理更复杂的场景，特别是在涉及到类型检查和转换时

#### 特点

- **类型模式**：允许在 `switch` 语句中直接匹配对象的类型，并且可以立即对匹配的变量进行操作，无需显式的类型转换。
- **简化代码**：减少了冗余的类型检查和类型转换代码，使得 `switch` 语句更加简洁和易读。
- **空值模式**：可以直接在 `switch` 语句中处理 `null` 值，提高了代码的安全性。

#### 代码示例

```java
public void checkType(Object obj) {
    switch (obj) {
        case String s -> System.out.println("String: " + s);
        case Integer i -> System.out.println("Integer: " + i);
        case null -> System.out.println("Null value");
        default -> System.out.println("Unknown type");
    }
}
```

















#### 









