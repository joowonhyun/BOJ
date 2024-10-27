package 브론즈4.Day4;

import java.util.Scanner;

public class BOJ25304 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int total = sc.nextInt();
        int N = sc.nextInt();
        int sum = 0;
        for (int i = 0; i < N; i++) {
            int temp_amount = sc.nextInt();
            int temp_sum = sc.nextInt();
            sum += temp_amount * temp_sum;
        }
        if(total == sum) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
