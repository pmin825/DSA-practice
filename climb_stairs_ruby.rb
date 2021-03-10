def climb_stairs(n)
  dp = [1, 1]
  (2..n).each do |i|
      temp = dp.first
      dp[0] = dp[dp.length - 1]
      dp[dp.length - 1] = temp + dp[dp.length - 1]
  end
  return dp.last
end