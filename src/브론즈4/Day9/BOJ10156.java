package 브론즈4.Day9;

import java.util.Scanner;

public class BOJ10156 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a[] = new int[3];

        for (int i = 0; i < 3; i++) {
            a[i] = sc.nextInt();
        }
        int result = a[0] * a[1] - a[2];
        if (result > 0) {
            System.out.println(result);
        } else {
            System.out.println(0);
        }
    }
}
