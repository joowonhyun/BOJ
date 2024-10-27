package 브론즈5.Day17;

import java.util.Scanner;

public class BOJ25314 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();

        for (int i = 4; i <= a; i*=4) {
            if(a % i == 0) {
                System.out.print("long");
            }
        }
    }
}