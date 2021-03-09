def rotate(matrix)
  n = matrix.length
     
  (0...n).each do |row|
      (row...n).each do |col|
          matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]
      end
  end
  
  (0...n).each do |row|
      (0...n/2).each do |col|
          matrix[row][col], matrix[row][n - 1 - col] = matrix[row][n - 1 - col], matrix[row][col]
      end            
  end
end