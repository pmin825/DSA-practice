def single_number(nums)
  hash = {};
  
  nums.each do |num| 
      if hash[num] 
          hash[num] += 1;
      else
          hash[num] = 1;
      end
  end
  
  hash.each do |key, value| 
      if value != 2
          return key
      end
  end
end