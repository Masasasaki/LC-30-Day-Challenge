public class MinPathSum {
    public static void main(String[] args) {
        int[][] grid = {{1,3,1},
                        {1,5,1},
                        {4,2,1}};
        System.out.println(minPathSum(grid));
    }

    public static int minPathSum(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int[][] T = new int[n][m];

        T[0][0] = grid[0][0];

        for (int i = 1; i < n; i++) {
            T[i][0] = grid[i][0] + T[i-1][0];
        }
        
        for (int i = 1; i < m; i++) {
            T[0][i] = grid[0][i] + T[0][i-1];
        }

        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                T[i][j] = Math.min(grid[i][j] + T[i-1][j], grid[i][j] + T[i][j-1]);
            }
        }

        return T[n-1][m-1];
    }
}