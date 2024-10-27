package 브론즈5.Day13;

import java.util.Scanner;

public class BOJ3003 {
    public static void main(String[] args) {
        int[] A = {1,1,2,2,2,8};

        Scanner sc = new Scanner(System.in);

        for (int j : A) {
            System.out.print(j - sc.nextInt() + " ");
        }
    }
}
