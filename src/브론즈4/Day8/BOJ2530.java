package 브론즈4.Day8;

import java.util.Scanner;

public class BOJ2530 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();
        int s = sc.nextInt();

        int time = sc.nextInt();

        s+=time;

        if (s > 59) {
            m += s / 60;
            s = s % 60;
        }
        if (m > 59) {
            h += m / 60;
            m = m % 60;
        }
        if (h > 23) {
            h = h % 24;
        }
        System.out.println(h+" "+m+ " "+s);
    }
}
