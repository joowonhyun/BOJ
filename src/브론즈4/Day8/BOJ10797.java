package 브론즈4.Day8;

import java.util.Scanner;

public class BOJ10797 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int count = 0;
        for (int i = 0; i < 5; i++) {
            int a = sc.nextInt();
            if (a == num) {
                count++;
            }
        }
        System.out.println(count);
    }
}
