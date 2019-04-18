package com.spring.annotation;

/**
 * Created by LH on 2019/2/28.
 */
public class Helloapp {
    public static void main(string[] args){
        ApplicationContext context=new AnnotationConfigApplicationContext(helloapp,class);
        Hello hello=context.getBean(Hello.class);
        System.out.println(hello.getHello());
    }
}
