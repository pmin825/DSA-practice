def two_sum(nums, target)
  hash = {}
  nums.each_with_index do |num, idx|
      diff = target - num
      if hash[diff]
          return [idx, hash[diff]]
      else
          hash[num] = idx
      end
  end
end