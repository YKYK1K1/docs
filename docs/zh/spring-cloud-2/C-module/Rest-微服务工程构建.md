# **Rest 微服务工程构建**

![架构](/docs/assets/spring-cloud-2/fourth-module/yky-20200707110834.png)

## **cloud-provider-payment8001 微服务提供者 Module 模块**
---

<br />

- 建 module

![建 module](/docs/assets/spring-cloud-2/fourth-module/yky-20200707133056.png)

<br />

- 改 POM

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>spring-cloud-2020</artifactId>
        <groupId>com.yky.spring.cloud</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>cloud-provider-payment-8001</artifactId>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.10</version>
        </dependency>
        <!--mysql-connector-java-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
        <!--jdbc-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

- 写 YML

```yml
server:
  port: 8001

spring:
  application:
    name: cloud-payment-service
  datasource:
    druid:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: ${DB_CONN_URL:jdbc:mysql://localhost:3306/spring-cloud-2020?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=UTC}
      username: ${DB_USER:root}
      password: ${DB_PWD:root}
      initial-size: 1
      min-idle: 1
      max-active: 20

mybatis:
  mapper-locations: classpath:mappers/*Mapper.xml
  type-aliases-package: com.yky.spring.cloud.domain # 所有Entity别名类所在包
```

- 主启动

```java
package com.yky.spring.cloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @version 1.0
 * @ClassName PaymentMain8001
 * @Description TODO
 * @Author YKY
 * @Date 2020/7/7 16:02
 **/
@MapperScan(basePackages = "com.yky.spring.cloud.dao")
@SpringBootApplication
public class PaymentMain8001 {
    public static void main(String[] args) {
        SpringApplication.run(PaymentMain8001.class, args);
    }
}
```

- **业务类**
    - 1. 建表

    ```sql
    CREATE TABLE `payment`  (
     `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
     `serial` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '支付流水号',
     PRIMARY KEY (`id`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '支付表' ROW_FORMAT = Dynamic;
    
    insert into payment (id, serial)VALUES (1, 'a000001');
    ```

    - 2. domain
        - 1. 主实体 `Payment` 

        ```java
        package com.yky.spring.cloud.domain;

        import java.io.Serializable;

        import lombok.AllArgsConstructor;
        import lombok.Builder;
        import lombok.Data;
        import lombok.NoArgsConstructor;

        /**
        * 支付表
        */
        @Data
        @Builder
        /**
          *全参
          */
        @AllArgsConstructor 
        /**
          *空参
          */
        @NoArgsConstructor
        public class Payment implements Serializable {
            /**
            * 主键
            */
            private Long id;

            /**
            * 支付流水号
            */
            private String serial;

            private static final long serialVersionUID = 1L;
        }
        ```

        - 2. Json 封装体 `CommonResult`

        ```java
        package com.yky.spring.cloud.utils;

        import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;

        /**
        * @version 1.0
        * @ClassName CommonResult
        * @Description TODO Json 封装体
        * @Author YKY
        * @Date 2020/7/7 16:33
        **/
        @Data
        @AllArgsConstructor
        @NoArgsConstructor
        public class CommonResult<T> {
            private Integer code;
            private String message;
            private T data;

            public CommonResult(Integer code, String message) {
                this(code, message, null);
            }

        }
        ```
    - 3. dao
        - 1. 接口 `PaymentDao`

        ```java
        package com.yky.spring.cloud.dao;

        import com.yky.spring.cloud.domain.Payment;
        import org.apache.ibatis.annotations.Param;

        public interface PaymentMapper {
            int deleteByPrimaryKey(Long id);

            int insert(Payment record);

            int insertSelective(Payment record);
            
            Payment selectByPrimaryKey(@Param("id") Long id);

            int updateByPrimaryKeySelective(Payment record);

            int updateByPrimaryKey(Payment record);
        }
        ```
        - 2. mybatis 的映射文件 `PaymentMapper.xml`
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
        <mapper namespace="com.yky.spring.cloud.dao.PaymentMapper">
        <resultMap id="BaseResultMap" type="com.yky.spring.cloud.domain.Payment">
            <!--@mbg.generated-->
            <!--@Table payment-->
            <id column="id" jdbcType="BIGINT" property="id" />
            <result column="serial" jdbcType="VARCHAR" property="serial" />
        </resultMap>
        <sql id="Base_Column_List">
            <!--@mbg.generated-->
            id, serial
        </sql>
        <select id="selectByPrimaryKey" parameterType="java.lang.Long" resultMap="BaseResultMap">
            <!--@mbg.generated-->
            select 
            <include refid="Base_Column_List" />
            from payment
            where id = #{id,jdbcType=BIGINT}
        </select>
        <delete id="deleteByPrimaryKey" parameterType="java.lang.Long">
            <!--@mbg.generated-->
            delete from payment
            where id = #{id,jdbcType=BIGINT}
        </delete>
        <insert id="insert" keyColumn="id" keyProperty="id" parameterType="com.yky.spring.cloud.domain.Payment" useGeneratedKeys="true">
            <!--@mbg.generated-->
            insert into payment (serial)
            values (#{serial,jdbcType=VARCHAR})
        </insert>
        <insert id="insertSelective" keyColumn="id" keyProperty="id" parameterType="com.yky.spring.cloud.domain.Payment" useGeneratedKeys="true">
            <!--@mbg.generated-->
            insert into payment
            <trim prefix="(" suffix=")" suffixOverrides=",">
            <if test="serial != null">
                serial,
            </if>
            </trim>
            <trim prefix="values (" suffix=")" suffixOverrides=",">
            <if test="serial != null">
                #{serial,jdbcType=VARCHAR},
            </if>
            </trim>
        </insert>
        <update id="updateByPrimaryKeySelective" parameterType="com.yky.spring.cloud.domain.Payment">
            <!--@mbg.generated-->
            update payment
            <set>
            <if test="serial != null">
                serial = #{serial,jdbcType=VARCHAR},
            </if>
            </set>
            where id = #{id,jdbcType=BIGINT}
        </update>
        <update id="updateByPrimaryKey" parameterType="com.yky.spring.cloud.domain.Payment">
            <!--@mbg.generated-->
            update payment
            set serial = #{serial,jdbcType=VARCHAR}
            where id = #{id,jdbcType=BIGINT}
        </update>
        </mapper>
        ```
    - 4. service
        - 1. 接口 `PaymentService`

        ```java
        package com.yky.spring.cloud.service;

        import com.yky.spring.cloud.domain.Payment;
        public interface PaymentService{


            int deleteByPrimaryKey(Long id);

            int insert(Payment record);

            int insertSelective(Payment record);

            Payment selectByPrimaryKey(Long id);

            int updateByPrimaryKeySelective(Payment record);

            int updateByPrimaryKey(Payment record);

        }
        ```
    
        - 2. impl 实现类

        ```java
        package com.yky.spring.cloud.service.impl;

        import org.springframework.stereotype.Service;
        import javax.annotation.Resource;
        import com.yky.spring.cloud.domain.Payment;
        import com.yky.spring.cloud.dao.PaymentMapper;
        import com.yky.spring.cloud.service.PaymentService;
        @Service
        public class PaymentServiceImpl implements PaymentService{

            @Resource
            private PaymentMapper paymentMapper;

            @Override
            public int deleteByPrimaryKey(Long id) {
                return paymentMapper.deleteByPrimaryKey(id);
            }

            @Override
            public int insert(Payment record) {
                return paymentMapper.insert(record);
            }

            @Override
            public int insertSelective(Payment record) {
                return paymentMapper.insertSelective(record);
            }

            @Override
            public Payment selectByPrimaryKey(Long id) {
                return paymentMapper.selectByPrimaryKey(id);
            }

            @Override
            public int updateByPrimaryKeySelective(Payment record) {
                return paymentMapper.updateByPrimaryKeySelective(record);
            }

            @Override
            public int updateByPrimaryKey(Payment record) {
                return paymentMapper.updateByPrimaryKey(record);
            }

        }
        ```
    - 5. controller

    ```java
    package com.yky.spring.cloud.controller;

    import com.yky.spring.cloud.domain.CommonResult;
    import com.yky.spring.cloud.domain.Payment;
    import com.yky.spring.cloud.service.PaymentService;
    import lombok.extern.slf4j.Slf4j;
    import org.springframework.web.bind.annotation.*;

    import javax.annotation.Resource;

    /**
    * @version 1.0
    * @ClassName controller
    * @Description TODO
    * @Author YKY
    * @Date 2020/7/7 17:10
    **/
    @Slf4j
    @RestController
    @RequestMapping(value = "/payment")
    public class PaymentController {

        @Resource
        private PaymentService paymentService;

        @PostMapping(value = "/create")
        public CommonResult<Integer> create(Payment payment) {
            log.info("调用 create 方法 参数：{}", payment);
            int result = paymentService.insert(payment);
            log.info("create 方法 插入结果：" + result);
            if (result > 0) {
                return new CommonResult<>(200, "插入数据库成功", result);
            } else {
                return new CommonResult<>(444, "插入数据库失败", null);
            }
        }

        @GetMapping(value = "/get/{id}")
        public CommonResult<Payment> getByPrimaryKey(@PathVariable("id") Long id) {
            log.info("调用 getByPrimaryKey 方法 参数：{}", id);
            Payment payment = paymentService.selectByPrimaryKey(id);
            log.info("getByPrimaryKey 方法 查询结果：" + payment);
            if (payment != null) {
                return new CommonResult<>(200, "查询成功", payment);
            } else {
                return new CommonResult<>(444, "没用对应记录，查询ID：" + id, null);
            }
        }
    }
    ```
- **测试**
    - **浏览器路径访问测试**
    `http://localhost:8001/payment/get/1`

    <br />

    ![浏览器路径](/docs/assets/spring-cloud-2/fourth-module/yky-20200707201142.png)
    
    <br />
    
    - **postman 模拟 `post/get` 请求**

    <br />

    ![postman post请求](/docs/assets/spring-cloud-2/fourth-module/yky-20200707202148.png)
    
    <br />

    - **运行**
        -  
## **热部署 Devtools**
---

### 1. Adding devtools to your project

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

### 2. Adding plugin to your pom.xml

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <fork>true</fork>
                <addResources>true</addResources>
            </configuration>
        </plugin>
    </plugins>
</build>
```

### 3. Enabling automatic build

<br />

![](/docs/assets/spring-cloud-2/fourth-module/yky-20200708085730.png)

<br />

### 4. Update the value of

<br />

![](/docs/assets/spring-cloud-2/fourth-module/yky-20200708090125.png)

<br />

### 5. 重启 IDEA

## **cloud-consumer-order80 微服务消费者订单Module模块**
---

<br />

- **建 module** 

![建 module](/docs/assets/spring-cloud-2/fourth-module/yky-20200708161813.png)

<br />

- **改 POM**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>spring-cloud-2020</artifactId>
        <groupId>com.yky.spring.cloud</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>cloud-consumer-order-80</artifactId>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.10</version>
        </dependency>
        <!--mysql-connector-java-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
        <!--jdbc-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

- **写 YML**

```yml
server:
  port: 80
  
```

- **主启动**

```java
package com.yky.spring.cloud;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @version 1.0
 * @ClassName OrderMain80
 * @Description TODO
 * @Author YKY
 * @Date 2020/7/8 17:11
 **/
@MapperScan(basePackages = "com.yky.spring.cloud.dao")
@SpringBootApplication
public class OrderMain80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderMain80.class, args);
    }
}
```
- **业务类**
    - **domain (将 `cloud-provider-payment8001` 工程下的 domain 包下的两个实体类复制过来)**
    - **首说 `Resttemplate`**
        > **`RestTemplate` 提供多种便携访问远程 Http 服务的方法，**
        >
        > **是一种简单便携的访问 restful 服务模板类 是 Spring 提供的用于访问 Rest 服务的 **客户端模板工具集****

        - [官网地址](https://docs.spring.io/spring-framework/docs/5.2.2.RELEASE/javadoc-api/org/springframework/web/client/RestTemplate.html)
        - **使用**
            - **使用 RestTemplate 访问 restful 接口 非常的简单粗暴无脑(url,requestMap,ResponseBean.class)这三个参数分别代表 REST 请求地址、请求参数、HTTP相应转换被转换成的对象类型。**

    - **config 配置类(`ApplicationContextConfig`)**
    
    ```java
    package com.yky.spring.cloud.config;

    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.web.client.RestTemplate;

    /**
    * @version 1.0
    * @ClassName ApplicationContextConfig
    * @Description TODO
    * @Author YKY
    * @Date 2020/8/7 16:02
    **/
    @Configuration
    public class ApplicationContextConfig {
        @Bean
        public RestTemplate getRestTemplate() {
            return new RestTemplate();
        }
    }
    ```
    - 创建controller(`OrderController`)

    ```java
    package com.yky.spring.cloud.controller;

    import com.yky.spring.cloud.domain.Payment;
    import com.yky.spring.cloud.utils.CommonResult;
    import lombok.extern.slf4j.Slf4j;
    import org.springframework.web.bind.annotation.*;
    import org.springframework.web.client.RestTemplate;

    import javax.annotation.Resource;

    /**
    * @version 1.0
    * @ClassName OrderController
    * @Description TODO
    * @Author YKY
    * @Date 2020/8/7 16:29
    **/
    @Slf4j
    @RequestMapping(value = "/consumer")
    @RestController
    public class OrderController {
        public static final String PAYMENT_URL = "http://localhost:8001";

        @Resource
        private RestTemplate restTemplate;

        @GetMapping(value = "/payment/create")
        public CommonResult<Payment> create(Payment payment) {
            log.info("通过 create 调用 PAYMENT 服务 添加信息：{}", payment);
            return restTemplate.postForObject(PAYMENT_URL + "/payment/create", payment, CommonResult.class);
        }

        @GetMapping(value = "/payment/get/{id}")
        public CommonResult<Payment> getPayment(@PathVariable("id") Long id) {
            log.info("通过 getPayment 调用 PAYMENT 服务 添加信息：{}", id);
            return restTemplate.getForObject(PAYMENT_URL + "/payment/get/" + id, CommonResult.class);
        }
    }
    ```

- **测试**
    - **先启动** `cloud-provider-payment-8001`
    - **再启动** `cloud-consumer-order-80`
    - http://localhost/consumer/payment/get/32
    - **不要忘了 `@RequestBody` 注解 (在 8001 工程的 controller 的 `create` 方法下)**
    - **开启Run DashBoard**
        -  D:\devSoft\JetBrains\IdeaProjects\自己project名\.idea
        ```xml
        <option name="configurationTypes">
            <set>
                <option value="SpringBootApplicationConfigurationType" />
            </set>
        </option>
        ```
        ![.idea](/docs/assets/spring-cloud-2/fourth-module/yky-2020-08-10-103838.png)
        
## **工程重构**
---

- **观察问题**
> 系统中有重复部分,重构

![观察问题](/docs/assets/spring-cloud-2/fourth-module/yky-2020-08-10-105050.png)
- **新建**
    - `cloud-api-commons`
- pom

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>spring-cloud-2020</artifactId>
        <groupId>com.yky.spring.cloud</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>cloud-api-commons</artifactId>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.1.0</version>
        </dependency>
    </dependencies>
</project>
```
- **entities**
    - **`Payment` 实体**
    - **`CommonResult` 通用封装类**
- **`maven` 命令 `clean install`**
- 订单80和支付8001分别改造
    - 删除各自的原先有过的 `entities` 文件夹
    - 各自黏贴 POM 内容 (80 ,8001 都添加)

    ```xml
    <!-- 引入自己定义的api通用包，可以使用 Payment 支付 Entity -->
    <dependency>
        <groupId>com.yky.spring.cloud</groupId>
        <artifactId>cloud-api-commons</artifactId>
        <version>${project.version}</version>
    </dependency>