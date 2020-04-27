public class MaximalSquare {
    public static void main(String[] args) {
        char[][] mat = {{'1','0','1','0','0'},
                        {'1','0','1','1','1'},
                        {'1','1','1','1','1'},
                        {'1','0','0','1','0'}};
        System.out.println(maximalSquare(mat));
    }

    public static int maximalSquare(char[][] matrix) {
        int n = matrix.length;
        int m = n > 0 ? matrix[0].length : 0;
        int T[][] = new int[n+1][m+1];
        int sol = 0;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (matrix[i-1][j-1] == '1') {
                    T[i][j] = 1 + Math.min(Math.min(T[i-1][j], T[i][j-1]), T[i-1][j-1]);
                    sol = Math.max(sol, T[i][j]);
                }
            }
        }
        return sol * sol;
    }
}