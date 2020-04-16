public class ValidParanthesisString {
    public static void main(String[] args) {
        System.out.println(checkValidString("()()()(()***)))()()("));
    }
    public static boolean checkValidString(String s) {
        int c1 = 0, c2 = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                c1++;
                c2++;
            } else if (s.charAt(i) == ')') {
                c1--;
                c2--;
            } else {
                c1--;
                c2++;
            }
            if (c2 < 0) return false;
            c1 = Math.max(c1, 0);
        }
        return c1 == 0;
    }
}