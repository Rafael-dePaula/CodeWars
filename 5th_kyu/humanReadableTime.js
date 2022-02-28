// 5th kyu
// Human Readable Time
//https://www.codewars.com/kata/52685f7382004e774f0001f7/

function humanReadable (seconds) {
    var ss, mm, hh
    ss = seconds%60
    mm = Math.floor((seconds/60)%60)
    hh = Math.floor(seconds/3600)

  return ''+ hh.toString().padStart(2,'0') 
            +':'+ mm.toString().padStart(2,'0') 
            +':'+ ss.toString().padStart(2,'0')
}