package 브론즈4.Day1;

import java.util.Scanner;

public class BOJ2439 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        for (int i=a; i > 0; i--) { // 5 4 3 2 1
            for (int j = 1; j <= a; j++) { // 1 2 3 4 5
                if (j >= i) System.out.print("*");
                else System.out.print(" ");
            }
            System.out.println();
        }
    }
}
