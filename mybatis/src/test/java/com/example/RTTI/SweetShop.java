package com.example.RTTI;

/**
 * Created by cuiyy on 2017/8/9.
 */

class Candy {
    static {
        System.out.println("Loading Candy");
    }
}

class Gum {
    static {
        System.out.println("Loading Gum");
    }
}

class Cookie {
    static {
        System.out.println("Loading Cookie");
    }
}

public class SweetShop {
    public static void main(String[] args) throws ClassNotFoundException {
        System.out.println("inside main");
        new Candy();
        System.out.println("After creating Candy");
        Class.forName("com.example.RTTI.Gum");
        System.out.println("After Class.forName(\"Gum\")");
        new Cookie();
        System.out.println("After creating Cookie");
    }
}
