package 브론즈5.Day14;

import java.util.Scanner;

public class BOJ2475 {
    public static void main(String[] args) {
        int result = 0;
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < 5; i++) {
            int a = sc.nextInt();
            result += Math.pow(a, 2);
        }
        System.out.print(result % 10);
    }
}
