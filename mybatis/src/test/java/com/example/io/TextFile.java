package com.example.io;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.TreeSet;

/**
 * Created by cuiyy on 2017/7/25.
 * 文件读写的使用工具
 * ArrayList来保存文件的若干行
 * 如此，当操纵文件内容时，就可以使用ArrayList的所有功能了。
 */
public class TextFile extends ArrayList<String> {
    public static String read(String fileName) throws IOException {
        StringBuilder sb = new StringBuilder();

        BufferedReader in = new BufferedReader(
                new FileReader(new File(fileName).getAbsoluteFile())
        );
        String s;
        while ((s = in.readLine()) != null) {
            sb.append(s);
            sb.append("\n");
        }
        in.close();
        return sb.toString();
    }

    public static void write(String fileName, String text) throws FileNotFoundException {
        PrintWriter out = new PrintWriter(
                new File(fileName).getAbsoluteFile()
        );
        out.println(text);
        out.close();
    }

    public TextFile(String fileName, String splitter) throws IOException {
        super(Arrays.asList(read(fileName).split(splitter)));
        if (get(0).equals("")) remove(0);
    }

    public TextFile(String fileName) throws IOException {
        this(fileName, "\n");
    }

    public void write(String fileName) throws FileNotFoundException {
        PrintWriter out = new PrintWriter(
                new File(fileName).getAbsoluteFile()
        );
        for (String item : this) {
            out.println(item);
        }
        out.close();
    }

    public static void main(String[] args) throws IOException {
        String file=read("D://test.txt");
        write("D://write.txt",file);
        TextFile text=new TextFile("D://test.txt");
        text.write("D://text2.txt");
        TreeSet<String> words=new TreeSet<String>(
                new TextFile("src/test/java/com/example/io/TextFile.java","\\W+")
        );
        System.out.println(words.headSet("a"));
    }
}
