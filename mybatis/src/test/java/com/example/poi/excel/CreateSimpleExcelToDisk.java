package com.example.poi.excel;

import com.example.poi.Student;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.HorizontalAlignment;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by cuiyy on 2017/7/17.
 */
public class CreateSimpleExcelToDisk {

    private static List<Student> getStudent() throws ParseException {
        List<Student> list = new ArrayList<Student>();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-mm-dd");

        Student stuOne = new Student(1, "张三", 17, df.parse("1997-03-12"));
        Student stuTwo = new Student(2, "李四", 17, df.parse("1997-03-12"));
        Student stuThree = new Student(3, "张五", 20, df.parse("1997-03-12"));

        list.add(stuOne);
        list.add(stuThree);
        list.add(stuTwo);
        return list;
    }

    public static void main(String[] args) throws ParseException {
        //第一步，创建一个webBook,对应一个Excel文件
        HSSFWorkbook wb = new HSSFWorkbook();
        //第二步，在webBook中添加一个sheet，对应Excel文件的sheet
        HSSFSheet sheet = wb.createSheet("学生表一");
        //第三步，在sheet中添加表头第0行，注意老版本POI对Excel的行数列数有限制short
        HSSFCellStyle headStyle = wb.createCellStyle();
        HSSFFont f = wb.createFont();
        f.setFontHeightInPoints((short) 11);
        f.setBold(true);
        headStyle.setFont(f);
        headStyle.setAlignment(HorizontalAlignment.CENTER);
        headStyle.setBorderBottom(BorderStyle.valueOf((short) 1));
        headStyle.setBorderRight(BorderStyle.valueOf((short) 1));
        headStyle.setFillBackgroundColor((short) 20);
        HSSFRow row = sheet.createRow(0);
        //第四步，创建单元格，并设置值表头，设置表头居中
        HSSFCellStyle style = wb.createCellStyle();
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setBorderBottom(BorderStyle.valueOf((short) 1));
        style.setBorderRight(BorderStyle.valueOf((short) 1));
        String[] header = new String[]{"学号", "姓名", "年龄", "生日"};
        HSSFCell cell = null;
        for (int i = 0; i < header.length; i++) {
            cell = row.createCell((short) i);
            cell.setCellValue(header[i]);
            cell.setCellStyle(headStyle);
            sheet.setColumnWidth(i, 5000);
        }
        //第五步，写入实体数据
        List<Student> list=CreateSimpleExcelToDisk.getStudent();
        for(int i=0;i<list.size();i++){
            row = sheet.createRow((int) i + 1);
            Student stu = (Student) list.get(i);
            // 第四步，创建单元格，并设置值
            cell = row.createCell((short) 0);
            cell.setCellValue(stu.getId());
            cell.setCellStyle(style);
            cell = row.createCell((short) 1);
            cell.setCellValue(stu.getName());
            cell.setCellStyle(style);
            cell = row.createCell((short) 2);
            cell.setCellValue(stu.getAge());
            cell.setCellStyle(style);
            cell = row.createCell((short) 3);
            cell.setCellValue(new SimpleDateFormat("yyyy-mm-dd").format(stu.getBirth()));
            cell.setCellStyle(style);
        }
        //第六步，将文件存到指定位置
        try {
            FileOutputStream fout=new FileOutputStream("D:/students.xls");
            wb.write(fout);
            fout.close();
            System.out.println("输出成功");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
