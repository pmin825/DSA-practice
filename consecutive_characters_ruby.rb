def max_power(s)
  power = 1
  max = 1
  
  (1...s.length).each do |i|
      if s[i-1] == s[i]
          power += 1
      else
          power = 1
      end
      max = power if power > max
  end
  
  max
end