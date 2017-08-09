package com.example.reflect;

import com.mybatis.core.domain.Menu;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.regex.Pattern;

/**
 * Created by cuiyy on 2017/8/2.
 */
public class ShowMethods {
    private static String usage =
            "usage:\n" +
                    "ShowMethods qualified.class.name\n" +
                    "To show all methods in class or:\n" +
                    "ShowMethods qualified.class.name word \n" +
                    "To search for method.class.name word\n" +
                    "To search for methods involving word";
    private static Pattern p = Pattern.compile("\\w+\\.");

    public static void main(String[] args) throws ClassNotFoundException {
        if (args.length < 1) {
            System.out.println(usage);
            System.exit(0);
        }
        int lines = 0;
        Class<?> c = Class.forName(args[0]);
        Method[] methods = c.getMethods();
        Constructor[] constructors = c.getConstructors();
        if (args.length == 1) {
            for (Method method : methods) {
                System.out.println(p.matcher(method.toString()).replaceAll(""));
            }
            for (Constructor constructor : constructors) {
                System.out.println(p.matcher(constructor.toString()).replaceAll(""));
            }
            lines = methods.length + constructors.length;
        } else {
            for (Method method : methods) {
                if (method.toString().indexOf(args[1]) != -1) {
                    System.out.println(p.matcher(method.toString()).replaceAll(""));
                    lines++;
                }
            }
            for (Constructor constructor : constructors) {
                if (constructor.toString().indexOf(args[1]) != -1) {
                    System.out.println(p.matcher(constructor.toString()).replaceAll(""));
                    lines++;
                }
            }
        }
    }
}
