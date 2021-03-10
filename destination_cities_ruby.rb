def dest_city(paths)
  hash = {}
  for i in (0...paths.length).each do 
      path = paths[i]
      if !hash[path[0]]
          hash[path[0]] = path[1]
      end
  end
  
  for j in (0...paths.length).each do 
      path = paths[j]
      if !hash[path[1]]
          return path[1]
      end
  end
end