package com.mybatis.common.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by zhe on 18/04/2017.
 */
public class DateUtil {

    public static final SimpleDateFormat generalDateFormatFull = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
    public static final SimpleDateFormat generalDateFormatDateTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    public static final SimpleDateFormat generalDateFormatDate = new SimpleDateFormat("yyyy-MM-dd");
    public static final SimpleDateFormat generalDateFormatTime = new SimpleDateFormat("HH:mm:ss.SSS");
    public static final SimpleDateFormat generalDateFormat_yyyyMMddHHmm = new SimpleDateFormat("yyyy-MM-dd HH:mm");
    public static final SimpleDateFormat generalDateFormat_yyyyMMddHH = new SimpleDateFormat("yyyy-MM-dd HH");
    public static final SimpleDateFormat generalDateFormat_HHmm = new SimpleDateFormat("HH:mm");
    public static final SimpleDateFormat generalDateFormat_HHmmss = new SimpleDateFormat("HH:mm:ss");
    public static final SimpleDateFormat generalDateFormat_HHmmssSSS = new SimpleDateFormat("HH:mm:ss.sss");

    public static List<String> getTableNames(String prefix, Date dateStart, Date dateEnd) throws Exception {
        if (dateStart.after(dateEnd)) {
            throw new Exception("dateStart cannot after dateEnd");
        }
        Calendar start = Calendar.getInstance();
        start.setTime(dateStart);
        Calendar end = Calendar.getInstance();
        end.setTime(dateEnd);
        List<String> tableNames = new ArrayList<>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
        while (!compareYearAndMouth(start.getTime(), end.getTime())) {
            tableNames.add(prefix + sdf.format(start.getTime()));
            start.add(Calendar.MONTH, 1);
        }
        tableNames.add(prefix + sdf.format(end.getTime()));
        return tableNames;
    }

    public static boolean compareYearAndMouth(Date dateStart, Date dateEnd) {
        Calendar c1 = Calendar.getInstance();
        c1.setTime(dateStart);
        Calendar c2 = Calendar.getInstance();
        c2.setTime(dateEnd);
        return c1.get(Calendar.YEAR) == c2.get(Calendar.YEAR) && c1.get(Calendar.MONTH) == c2.get(Calendar.MONTH);
    }

    public static Date resetToOneDayBegin(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return calendar.getTime();
    }
    public static Date resetToOneDayEnd(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        calendar.set(Calendar.MINUTE, 59);
        calendar.set(Calendar.SECOND, 59);
        calendar.set(Calendar.MILLISECOND, 999);

        return calendar.getTime();
    }

    /**
     *
     *
     * @param params yyyy,mm,dd,hh,mm,ss,sss
     * @return
     */
    public static Calendar getCalendar(Integer... params) {
        Calendar calendar = Calendar.getInstance();
        int[] settings = new int[]{Calendar.YEAR, Calendar.MONTH, Calendar.DATE, Calendar.HOUR_OF_DAY, Calendar.MINUTE, Calendar.SECOND, Calendar.MILLISECOND};
        for (int i = 0; i < params.length && i < settings.length; i++) {
            calendar.set(settings[i], params[i]);
        }
        return calendar;
    }
}
