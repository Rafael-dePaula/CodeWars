function accum(s) {
    var result = []
    for(let i in s)
      for (let _ in i)
          result.push(s[i])
    
    return result.join('')
  }