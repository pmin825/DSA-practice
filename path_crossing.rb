def is_path_crossing(path)
  row = 0
  col = 0
  visited = {'0, 0' => true}

  path.each_char do |dir|
      if dir == "N"
          row += 1
      elsif dir == "S"
          row -= 1
      elsif dir == "E"
          col += 1
      elsif dir == "W"
          col -=1
      end
      
      key = "#{row}, #{col}"
      return true if visited[key]
      visited[key] = true
  end
  
  return false
end