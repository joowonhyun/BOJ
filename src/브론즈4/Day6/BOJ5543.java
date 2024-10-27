package 브론즈4.Day6;

import java.util.Scanner;

public class BOJ5543 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int ham = Math.min(a, Math.min(b, c));

        int d = sc.nextInt();
        int e = sc.nextInt();
        int drink = Math.min(d,e);

        int result = ham + drink - 50;

        System.out.println(result);
    }
}
