package com.example.typeInfo;

import javax.validation.Payload;
import javax.validation.constraints.Null;
import java.lang.annotation.Annotation;
import java.security.PrivateKey;

/**
 * Created by cuiyy on 2017/8/11.
 */
public class Person {
    public final String first;
    public final String last;
    public final String address;

    public Person(String first, String last, String address) {
        this.address = address;
        this.first = first;
        this.last = last;
    }

    public String toString() {
        return "Person" + first + " " + last + " " + address;
    }
}
