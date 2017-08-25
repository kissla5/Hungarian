var alphabet = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", "0", "-", ".", "/",
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",
      "a", "A", "á", "Á", "b", "B", "c", "C", "cs", "Cs", "CS", "d", "D", "dz", "Dz", "DZ", "dzs", "Dzs", "DZS", "e", "E", "é",
      "É", "f", "F", "g", "G", "gy", "Gy", "GY", "h", "H", "i", "I", "í", "Í", "j", "", "k", "K", "l", "L", "ly", "Ly", "LY", "m", "M", "n",
      "N", "ny", "Ny", "NY", "o", "O", "ó", "Ó", "ö", "Ö", "ő", "Ő", "p", "P", "q", "Q", "r", "R", "s", "S", "sz", "Sz", "SZ", "t", "T", "ty",
      "Ty", "TY", "u", "U", "ú", "Ú", "ü", "Ü", "ű", "Ű", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "zs", "Zs", "ZS"];

function compare(v1V, v2V, sortOrderDir) {
  if (typeof (v1V) !== 'string' || typeof (v2V) !== 'string') {
    if (sortOrderDir === 'asc') {
        return (v1Value < v2Value) ? -1 : 1;
    } else {
        return (v1Value > v2Value) ? -1 : 1;
    }
  }
  var dir = (sortOrderDir === 'asc' ? 1 : -1);
  var pos = 0;
  var min = Math.min(v1V.length, v2V.length);
  while (v1V.charAt(pos) === v2V.charAt(pos) && pos < min) {
      pos++;
  }
  return alphabet.indexOf(v1V.charAt(pos)) > alphabet.indexOf(v2V.charAt(pos)) ? dir : -dir;
}

function sort(strings, sortOrderDir) {
  strings.sort(function(v1V, v2V, sortOrderDir) {return compare(v1V, v2V, sortOrderDir)});
}
