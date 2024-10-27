package 브론즈5.Day20;

import java.util.Scanner;

public class BOJ4101 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int a = sc.nextInt();
            int b = sc.nextInt();

            if (a == 0  && b == 0) {
                break;
            } else {
                String result = a > b ? "Yes" : "No";
                System.out.println(result);
            }
        }
    }
}
