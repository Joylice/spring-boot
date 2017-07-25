package com.example.poi.doc;

import org.apache.poi.xwpf.usermodel.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created by cuiyy on 2017/7/17.
 */
public class ExportDocTest {

    public static void main(String[] args) throws IOException {
        FontStyle();
    }
    public static void FontStyle() throws IOException {

        XWPFDocument document= new XWPFDocument();

        //Write the Document in file system
        FileOutputStream out = new FileOutputStream(
                new File("D://test.docx"));

        //create paragraph
        XWPFParagraph paragraph = document.createParagraph();

        //Set Bold an Italic
        XWPFRun paragraphOneRunOne = paragraph.createRun();
        paragraphOneRunOne.setBold(true);
        paragraphOneRunOne.setItalic(true);
        paragraphOneRunOne.setText("Font Style");
        paragraphOneRunOne.addBreak();

        //Set text Position
        XWPFRun paragraphOneRunTwo = paragraph.createRun();
        paragraphOneRunTwo.setText("Font Style two");
        paragraphOneRunTwo.setTextPosition(100);

        //Set Strike through and Font Size and Subscript
        XWPFRun paragraphOneRunThree = paragraph.createRun();
        paragraphOneRunThree.setStrike(true);
        paragraphOneRunThree.setFontSize(20);
        paragraphOneRunThree.setSubscript(
                VerticalAlign.SUBSCRIPT);
        paragraphOneRunThree.setText(" Different Font Styles");

        document.write(out);
        out.close();
        System.out.println("test.docx written successully");
    }
    public static void TableWrite() throws IOException {
        XWPFDocument document = new XWPFDocument();


        //Write the Document in file system
        FileOutputStream out = new FileOutputStream(
                new File("d://test.docx"));

        //create paragraph
        XWPFParagraph paragraph = document.createParagraph();

        XWPFTable table = document.createTable();
        XWPFTableRow row=table.getRow(0);
        row.getCell(0).setText("col one,row one");
        row.addNewTableCell().setText("col two, row one");
        row.addNewTableCell().setText("col three,row one ");

        XWPFTableRow row1=table.createRow();
        row1.getCell(0).setText("col one,row one");
        row1.getCell(1).setText("col one,row one");
        row1.getCell(2).setText("col one,row one");
        XWPFRun run = paragraph.createRun();
        run.setText("At w3ii.com, we strive hard to " +
                "provide quality tutorials for self-learning " +
                "purpose in the domains of Academics, Information " +
                "Technology, Management and Computer Programming " +
                "Languages.");

        document.write(out);
        out.close();
        System.out.println("test.docx written successully");
    }
}
