/**
 * Given a 2d grid map of '1's (land) and '0's (water),
 * count the number of islands.
 * 
 * This method approaches the problem as one of depth-first connected
 * components search
 * @param grid, the given grid.
 * @return the number of islands.
 */
const numIslands = grid => {

    // Store the given grid
    // This prevents having to make copies during recursion
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0
    }
    // Our count to return
    let count = 0

    // Iterate over the entire given grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                combineLand(grid, i, j)
            }
        }
    }
    return count
}

/**
 * Marks the given site as visited, then checks adjacent sites.
 * 
 * Or, Marks the given site as water, if land, then checks adjacent sites.
 * 
 * Or, Given one coordinate (i,j) of an island, obliterates the island
 * from the given grid, so that it is not counted again.
 * 
 * @param i, the row index of the given grid
 * @param j, the column index of the given grid
 */
const combineLand = (grid, i, j) => {
    // Check for invalid indices and for sites that aren't land
    if (i < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') {
        return
    }

    // Mark the site as visited
    grid[i][j] = 'X'

    // Check all adjacent sites
    combineLand(grid, i-1, j)
    combineLand(grid, i+1, j)
    combineLand(grid, i, j-1)
    combineLand(grid, i, j+1)
}