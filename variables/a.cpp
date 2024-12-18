// #include <bits/stdc++.h>
// using namespace std;

// int dx[] = {0,0,1,-1};
// int dy[] = {-1,1,0,0};
// bool valid(int i , int j , vector<vector<int>>&grid){
//     if (i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size() || grid[i][j] == 0)
//     {
//         return 0;
//     }
//     return 1;
// }
// int dfs(vector<vector<int>> &grid, int i, int j)
// {
//     if(!valid(i,j,grid)) return 0;

//     grid[i][j] = 0;

//     int area = 1;

//     for(int k=0;k<4;k++){
//         int child_x = i+dx[k];
//         int child_y = j+dy[k];

//         area+=dfs(grid,child_x,child_y);
//     }

//     return area;
// }

// int findLandInSwamp(vector<vector<int>> &grid)
// {   
//     int n = grid.size();
//     int m = grid[0].size();
//     int maxArea = 0;
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j < m; j++)
//         {
//             if (grid[i][j] == 1)
//             {
//                 maxArea = max(maxArea, dfs(grid, i, j));
//             }
//         }
//     }

//     return maxArea;
// }

// int main()
// {
//     int rows, cols;
//     cin >> rows >> cols;
//     vector<vector<int>> matrix(rows, vector<int>(cols));

//     for (int i = 0; i < rows; i++)
//     {
//         for (int j = 0; j < cols; j++)
//         {
//             cin >> matrix[i][j];
//         }
//     }

//     cout << findLandInSwamp(matrix) << endl;
//     return 0;
// }

#include <iostream>
#include <vector>
using namespace std;

int n , m;
void getAnswer (vector<int> &zeroRows , vector<int>&zeroCols ,vector<vector<int>>& resultMatrix){
    
    for (int row = 0; row < n; row++)
    {
        for (int col = 0; col < m; col++)
        {
            if (zeroCols[col] == 1 || zeroRows [row] == 1)
            {
                resultMatrix[row][col] = 0;
            }
        }
    }
}
vector<vector<int>> transform(const vector<vector<int>> &input)
{
    n = input.size();
    m = input[0].size();

    vector<int> zeroRows(n);
    vector<int> zeroCols(m);
    for(int i=0;i<n;i++){
        zeroCols[i]=0;
        zeroRows[i]=0;
    }

    for (int row = 0; row < n; row++)
    {
        for (int col = 0; col < m; col++)
        {
            if (input[row][col] == 0)
            {
                zeroRows[row] = 1;
                zeroCols[col] = 1;
            }
        }
    }

    vector<vector<int>> resultMatrix = input;

    getAnswer(zeroRows , zeroCols , resultMatrix);

    return resultMatrix;
}

int main()
{
    int n, m;
    cin >> n >> m;

    vector<vector<int>> input(n, vector<int>(m));
    for (int row = 0; row < n; row++)
    {
        for (int col = 0; col < m; col++)
        {
            cin >> input[row][col];
        }
    }

    vector<vector<int>> output = transform(input);

    for (const auto &row : output)
    {
        for (const auto &element : row)
        {
            cout << element << " ";
        }
        cout << endl;
    }

    return 0;
}
