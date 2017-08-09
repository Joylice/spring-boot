package com.example.io;

import java.io.*;

/**
 * Created by cuiyy on 2017/7/25.
 * 简化了读取二进制文件
 */
public class BinaryFile {
    public static byte[] read(File bFile) throws IOException {
        BufferedInputStream bf = new BufferedInputStream(
                new FileInputStream(bFile)
        );
        try {
            byte[] data = new byte[bf.available()];
            bf.read(data);
            return data;
        } finally {
            bf.close();
        }
    }

    public static byte[] read(String bFile) throws IOException {

        return read(new File(bFile).getAbsoluteFile());
    }


    public static void main(String[] args) throws IOException {
        PrintStream console = System.out;
        BufferedInputStream in = new BufferedInputStream(
                new FileInputStream("D://test.txt")
        );
        PrintStream out = new PrintStream(
                new FileOutputStream("test.out")
        );
        System.setIn(in);
        System.setOut(out);
        System.setErr(out);
        BufferedReader br = new BufferedReader(
                new InputStreamReader(System.in)
        );
        String s;
        while ((s = br.readLine()) != null) {
            System.out.println(s);
        }
       out.println(BufferedInputFile.read("test.out"));
        out.close();

       // System.setOut(console);
    }
}
