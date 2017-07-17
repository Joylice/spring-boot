package com.mybatis.common.util;

/**
 * A snowflake is a source of k-ordered unique 64-bit integers.
 */
public class IDGenerator {

    public static final int NODE_SHIFT = 10;
    public static final int SEQ_SHIFT = 12;

    public static final short MAX_SEQUENCE = 4096;

    private static short sequence;
    private static long referenceTime;

    private final static Object locker = new Object();

    /**
     * A snowflake is designed to operate as a singleton instance within the context of a node.
     * If you deploy different nodes, supplying a unique node id will guarantee the uniqueness
     * of ids generated concurrently on different nodes.
     */
    private static int node = 1;    //1 ~ 1024

    /**
     * Generates a k-ordered unique 64-bit integer. Subsequent invocations of this method will produce
     * increasing integer values.
     *
     * @return The next 64-bit integer.
     */
    public static synchronized String getNextId() {

        long currentTime = System.currentTimeMillis();
        long counter;

        synchronized (locker) {

            if (currentTime < referenceTime) {
                throw new RuntimeException(String.format("Last referenceTime %s is after reference time %s", referenceTime, currentTime));
            } else if (currentTime > referenceTime) {
                sequence = 0;
            } else {
                if (sequence < MAX_SEQUENCE) {
                    sequence++;
                } else {
                    throw new RuntimeException("Sequence exhausted at " + sequence);
                }
            }
            counter = sequence;
            referenceTime = currentTime;
        }

        return String.valueOf(currentTime << NODE_SHIFT << SEQ_SHIFT | node << SEQ_SHIFT | counter);
    }
}