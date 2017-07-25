package com.example.io;

import java.io.*;

/**
 * Created by cuiyy on 2017/7/25.
 */
public class BufferedInputFile {
    public static String read(String fileName) throws IOException {
        System.out.println("开始读取文件内容");
        InputStreamReader isr = new InputStreamReader(new FileInputStream(fileName), "GB2312");
        BufferedReader in = new BufferedReader(isr);
        String s;
        StringBuilder sb = new StringBuilder();
        while ((s = in.readLine()) != null) {
            sb.append(s);
        }
        in.close();
        return sb.toString();
    }

    public static void memoryInput(String fileName) throws IOException {
        StringReader sr = new StringReader(read(fileName));
        int c;
        while ((c = sr.read()) != -1) {
            System.out.println((char) c);
        }
    }

    public static void formattedMemoryInput(String fileName) throws IOException {
        DataInputStream in = new DataInputStream(
                new ByteArrayInputStream(
                        read(fileName).getBytes()
                ));
        while (true)
            System.out.println((char) in.readByte());
    }

    public static void testEOF(String fileName) throws IOException {
        DataInputStream in = new DataInputStream(
                new BufferedInputStream(
                        new FileInputStream(fileName)
                )
        );
        //available()的工作方式会随着所读取的媒介类型的不同而有所不同，谨慎使用
        while (in.available() != 0) {
            System.out.println((char) in.readByte());
        }
    }

    public static void basicFileOutput(String fileName) throws IOException {
        final String file = "BasicFileOutput.out";
        BufferedReader in = new BufferedReader(
                new StringReader(
                        read("D://test.txt")
                )
        );
        PrintWriter out = new PrintWriter(
                new BufferedWriter(new FileWriter(file))
        );
        int lineCount = 1;
        String s;
        while ((s = in.readLine()) != null) {
            out.println(lineCount++ + ":" + s);
        }
        out.close();
        System.out.println(BufferedInputFile.read(file));
    }

    public static void main(String[] args) throws IOException {

        System.out.println("文件内容读取完毕");
    }
}
