/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";
  let i = 0, start = 0, end = 0, len1, len2;
  const size = s.length;
  for (; i < size; i++) {
    len1 = expandAroundCenter(s, i, i, size);
    len2 = expandAroundCenter(s, i, i + 1, size);
    if (len1 > len2 && len1 > end - start) {
      start = i - Math.floor(len1 / 2);
      end = i + Math.floor(len1 / 2) + 1;
    }
    else if (len2 > len1 && len2 > end - start) {
      start = i - Math.floor(len2 / 2) + 1;
      end = i + Math.floor(len2 / 2) + 1;
    }
  }
  return s.substring(start, end);
}

function expandAroundCenter(s, left, right, size) {
  let L = left, R = right, len = 0;
  while (L >= 0 && R < size && s.charAt(L) === s.charAt(R)) {
    len = R - (L - 1);
    L--;
    R++;
  }
  return len;
}
//------------------------------------------
const longestPalindromeTests = [
  ["bb", "bb"],
  ["babad", "bab"],
  ["cbbd", "bb"],
  ["ccc", "ccc"],
  ["zxcvacbbdaxcv", "bb"],
  ["zxcvacddaxcv", "dd"],
  ["a", "a"],
  ["ac", "a"],
  ["civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth", "ranynar"],
];