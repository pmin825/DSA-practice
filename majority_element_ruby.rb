def majority_element(nums)
  count = {}
  nums.each do |num|
      if count[num]
          count[num] += 1
      else
          count[num] = 1
      end
  end
  
  count.each do |key, value|
      if value > (nums.length / 2)
          return key
      end
  end
end