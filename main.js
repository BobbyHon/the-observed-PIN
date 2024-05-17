const keyCode = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
    0: [8, 0],
  }
  
  function getPINs(observed) {
    let observedKeyCode = observed.split('').map((x) => keyCode[Number(x)])
    const count = observedKeyCode.map((x) => x.reduce((s) => s + 1, 0)).reduce((s, a) => s * a, 1)
    let answer = []
    
    function loop(index = 0 ,list = ''){
      if (index == observedKeyCode.length - 1)
        {
          for(let i = 0; i < observedKeyCode[index].length; i++){
            answer.push(list + observedKeyCode[index][i].toString())
          }
        }
      else{
        for (let i =0; i < observedKeyCode[index].length; i++){
          loop(index + 1, list + observedKeyCode[index][i].toString())
        }
      }
    }
    loop()
    return answer
  }