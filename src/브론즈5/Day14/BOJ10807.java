package 브론즈5.Day14;

import java.util.Scanner;

public class BOJ10807 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[201];
        int N = sc.nextInt();

        for (int i = 0; i < N; i++) {
            int index = sc.nextInt();
            arr[index+100]++;
        }

        int V = sc.nextInt();
        System.out.println(arr[V+100]);
    }
}
