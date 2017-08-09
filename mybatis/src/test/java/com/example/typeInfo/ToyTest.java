package com.example.typeInfo;

import com.fasterxml.jackson.databind.node.ObjectNode;

import java.util.HashMap;

/**
 * Created by cuiyy on 2017/8/9.
 */
interface HasBatteries {
}

interface Waterproof {
}

interface Shoots {
}

class Toy {
    Toy() {
    }

    Toy(int i) {
    }
}

class FancyToy extends Toy implements HasBatteries, Waterproof, Shoots {
    FancyToy() {
        super(1);
    }
}

public class ToyTest {
    static void printInfo(Class cc) {
        System.out.println("Class name :" + cc.getName() +
                "is interface?[" + cc.isInterface() + "]");
        System.out.println("Simple name :" + cc.getSimpleName());
        System.out.println("Canonical name:" + cc.getCanonicalName());
    }

    public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        Class c = null;
        c = Class.forName("com.example.typeInfo.FancyToy");
        printInfo(c);
        for (Class face : c.getInterfaces()) {
            printInfo(face);
        }
        Class up = c.getSuperclass();
        Object obj = null;
        obj = up.newInstance();
        System.out.println(obj.getClass());
    }
}
