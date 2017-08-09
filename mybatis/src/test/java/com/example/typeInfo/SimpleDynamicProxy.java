package com.example.typeInfo;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

/**
 * Created by cuiyy on 2017/8/9.
 */
class DynamicProxyHandler implements InvocationHandler {
    private Object proxied;

    public DynamicProxyHandler(Object proxied) {
        this.proxied = proxied;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

        System.out.println(proxy.getClass() + "method:" + method + "args:" + args);
        return method.invoke(proxied, args);
    }
}

public class SimpleDynamicProxy {

    public  static void consumer(Interface iface) {
        iface.doSomething();
        iface.somethingElse("111");
    }

    public static void main(String[] args) {
        Interface proxy = (Interface) Proxy.newProxyInstance(Interface.class.getClassLoader(), new Class[]{Interface.class}, new DynamicProxyHandler(new RealObject()));
        consumer(proxy);
    }
}
