package 브론즈4.Day9;

import java.util.Scanner;

public class BOJ10101 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if(a == b && b == c && a == 60) {
            System.out.println("Equilateral");
        } else if (a + b + c == 180) {
            if ((a == b || b == c || a == c)) {
                System.out.println("Isosceles");
            } else {
                System.out.println("Scalene");
            }
        } else {
            System.out.println("Error");
        }
    }
}
