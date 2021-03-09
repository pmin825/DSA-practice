def group_anagrams(strs)
  anaHash = {}
  results = []
  
  strs.each do |str|
      key = str.chars.sort.join
      if anaHash[key]
          anaHash[key] << str
      else
          anaHash[key] = [str]
      end
  end
  
  anaHash.each do |key, value|
      results << value
  end
  
  results
end