def inorder_traversal(root)
  results = []
  traverse_tree(root, results)
  results
end

def traverse_tree(node, results)
  return if node.nil?
  
  traverse_tree(node.left, results)
  results << node.val
  traverse_tree(node.right, results)
end