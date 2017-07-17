package com.mybatis.common.util;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Created by zhe on 09/11/2016.
 */
public class JsonUtil {


    public static ObjectMapper getObjectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(DateUtil.generalDateFormatDateTime);

        /**
         * 忽略反序列化时JavaBean中属性不存在的异常
         */
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);


        return objectMapper;
    }

    public static ObjectMapper getObjectMapper(ObjectMapperConfig config) {
        ObjectMapper objectMapper = getObjectMapper();
        for (Class aClass : config.getMixIns().keySet()) {
            objectMapper.addMixIn(aClass, config.getMixIns().get(aClass));
        }
        return objectMapper;
    }

    /**
     * 对象转JsonNode,不确定数据源的情况下使用
     *
     * @return
     * @throws IOException
     */

    public static JsonNode toJsonNode(byte[] bytes) throws IOException {
        return bytes == null ? null : getObjectMapper().readTree(bytes);
    }

    public static JsonNode toJsonNode(String str) throws IOException {
        return toJsonNode(str.getBytes("UTF-8"));
    }

    public static JsonNode toJsonNode(Object object) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ObjectMapper objectMapper = getObjectMapper();
        objectMapper.writeValue(outputStream, object);
        return objectMapper.readTree(outputStream.toByteArray());
    }

    public static ObjectNode toObjectNode(byte[] bytes) throws IOException {
        return (ObjectNode) getObjectMapper().readTree(bytes);
    }

    public static ObjectNode toObjectNode(String str) throws IOException {
        return (ObjectNode) toJsonNode(str.getBytes("UTF-8"));
    }

    @JsonFilter("objectFilter")
    interface ObjectFilterMixIn {
    }

    public static ObjectNode toObjectNode(Object object, String... filed) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ObjectMapper objectMapper = getObjectMapper();

        FilterProvider filters = new SimpleFilterProvider().addFilter("objectFilter",
                SimpleBeanPropertyFilter.serializeAllExcept(filed));
        objectMapper.setFilters(filters);
        objectMapper.addMixInAnnotations(object.getClass(), ObjectFilterMixIn.class);

        objectMapper.writeValue(outputStream, object);
        return (ObjectNode) objectMapper.readTree(outputStream.toByteArray());
    }

    public static IntNode toIntNode(Object object) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ObjectMapper objectMapper = getObjectMapper();
        objectMapper.writeValue(outputStream, object);
        return (IntNode) objectMapper.readTree(outputStream.toByteArray());
    }


    /**
     * 对象转ArrayNode
     *
     * @return
     * @throws IOException
     */

    public static ArrayNode toArrayNode(byte[] bytes) throws IOException {
        return bytes == null ? null : (ArrayNode) getObjectMapper().readTree(bytes);
    }

    public static ArrayNode toArrayNode(String str) throws IOException {
        return str == null ? null : (ArrayNode) toJsonNode(str.getBytes());
    }

    public static ArrayNode toArrayNode(Iterable list) throws IOException {
        ArrayNode jsonNodes = getObjectMapper().createArrayNode();
        for (Object item : list) {
            jsonNodes.add(toJsonNode(item));
        }
        return jsonNodes;
    }


    /**
     * Json转对象
     *
     * @param str
     * @param clazz
     * @param <T>
     * @return
     * @throws IOException
     */
    public static <T> T toObject(String str, Class<T> clazz) throws IOException {
        return str == null ? null : getObjectMapper().readValue(str, clazz);
    }

    public static <T> T toObject(JsonNode jsonNode, Class<T> clazz) throws IOException {
        return jsonNode == null ? null : toObject(jsonNode.toString(), clazz);
    }

    public static <T> List toList(String str, Class<T> clazz) throws IOException {
        return toList(toArrayNode(str), clazz);
    }

    public static <T> List<T> toList(ArrayNode arrayNode, Class<T> clazz) throws IOException {
        if (arrayNode == null) return null;
        List<T> list = new ArrayList<T>();
        for (JsonNode _jsonNode : arrayNode) {
            list.add(toObject(_jsonNode, clazz));
        }
        return list;
    }

    /**
     * 对象转Json
     */
    public static String toJson(Object object) throws JsonProcessingException {
        return getObjectMapper().writeValueAsString(object);
    }


    /**
     * 对象转Map
     *
     * @param object
     * @param objectMapper
     * @return
     */
    public static Map toMap(Object object, ObjectMapper objectMapper) {
        return objectMapper.convertValue(object, Map.class);
    }

    /**
     * 对象列表转Map列表
     *
     * @param iterable
     * @param objectMapper
     * @return
     */
    public static Iterable<Map> toMap(Iterable iterable, ObjectMapper objectMapper) {
        Iterator iterator = iterable.iterator();
        List<Map> result = new ArrayList<Map>();
        while (iterator.hasNext()) {
            result.add(toMap(iterator.next(), objectMapper));
        }
        return result;
    }
}
