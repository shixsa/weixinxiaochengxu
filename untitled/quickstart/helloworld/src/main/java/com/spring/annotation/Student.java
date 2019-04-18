package com.spring.annotation;

/**
 * Created by LH on 2019/2/28.
 */
public class Student {
    @Value("Tom")
    private String name;
    @Value("20")
    private int age;
    @A
    private phone phone;
}
