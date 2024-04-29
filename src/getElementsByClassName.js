// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  node = node || document.body;
  var result = [];
  if (node.classList && node.classList.contains(className)) {
    result.push(node);
  }
  for (var i = 0; i < node.childNodes.length; i++) {
    var child = node.childNodes[i];
    result = result.concat(getElementsByClassName(className, child));
  }
  return result;
};
