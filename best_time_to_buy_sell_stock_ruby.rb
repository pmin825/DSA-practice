def max_profit(prices)
  max = 0
  
  prices.each_with_index do |price, idx|
      if prices[idx + 1] && price < prices[idx + 1]
          max += prices[idx + 1] - price
      end
  end
  max
end