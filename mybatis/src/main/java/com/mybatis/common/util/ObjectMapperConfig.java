package com.mybatis.common.util;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zhe on 10/03/2017.
 */
public class ObjectMapperConfig {

    private Map<Class, Class> mixIns;


    public ObjectMapperConfig() {
        mixIns = new HashMap<>();
    }

    public Map<Class, Class> getMixIns() {
        return mixIns;
    }

    public static ObjectMapperConfig create() {
        return new ObjectMapperConfig();
    }

    public ObjectMapperConfig addMixIn(Class<?> target, Class<?> mixinSource) {
        mixIns.put(target, mixinSource);
        return this;
    }
}
