const revertObject = (input) => {
  const getChildKey = (aObject) => {
    if(aObject instanceof Object) {
      const [firstChildKey] = Object.keys(aObject)
      return firstChildKey ?? null
    } else {
      return null
    }
  }
  const setChainProperty = (targetObject, properties, value) => {
    return properties.reduce((_target, key, index) => {
      if (index >= properties.length - 1) {
        return _target[key] = value;
      } else {
        return _target[key];
      }

    }, targetObject);
  }

  const stack = []
  let currentHandlingTarget = input
  while (getChildKey(currentHandlingTarget)) {
    const currentHandlingChildKey = getChildKey(currentHandlingTarget)
    stack.push(currentHandlingChildKey)
    currentHandlingTarget = currentHandlingTarget[currentHandlingChildKey]
  }
  stack.push(currentHandlingTarget)

  return stack.reverse().reduce((result, key, index) => {
    const subStack = stack.slice(0, index + 1)

    index !== stack.length - 1
      ? setChainProperty(result , subStack, {})
      : setChainProperty(result , subStack.slice(0, -1), key)
    return result
  }, {})
}

module.exports = revertObject;
