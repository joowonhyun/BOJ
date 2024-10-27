package 브론즈4.Day5;

import java.util.Scanner;

public class BOJ10039 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int sum = 0;

        for (int i = 0; i < 5; i++) {
            int temp = sc.nextInt();
            if(temp < 40) {
                sum += 40;
            } else {
                sum += temp;
            }
        }
        System.out.println(sum / 5);
    }
}
