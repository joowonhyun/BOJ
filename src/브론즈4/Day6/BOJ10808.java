package 브론즈4.Day6;

import java.util.Scanner;

public class BOJ10808 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int [] A = new int [26];
        char [] temp = sc.next().toCharArray();
        for (int i = 0; i < temp.length; i++) {
          A[temp[i] - 97]++;
        }
        for (int i : A) {
            System.out.print(i + " ");
        }
    }
}
