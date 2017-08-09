package com.example.typeInfo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by cuiyy on 2017/8/1.
 */
class CountedInteger {
    private static long counter;
    private final long id = counter++;

    public String toString() {
        return Long.toString(id);
    }
}

public class FilledList<T> {
    private Class<T> type;

    public FilledList(Class<T> type) {
        this.type = type;
    }

    public List<T> create(int nElements) throws IllegalAccessException, InstantiationException {
        List<T> result = new ArrayList<T>();
        for (int i = 0; i < nElements; i++) {
            result.add(type.newInstance());
        }
        return result;
    }

    public static void main(String[] args) throws InstantiationException, IllegalAccessException {
        FilledList<CountedInteger> fl =
                new FilledList<CountedInteger>(CountedInteger.class);
        System.out.println(fl.create(15));
    }
}
