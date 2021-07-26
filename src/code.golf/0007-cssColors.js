


const cssColorsCode = (print, arguments) => {

//minified
c="IndianRed cd5c5c LightCoral f08080 Salmon fa8072 DarkSalmon e9967a LightSalmon ffa07a Red ff0000 Crimson dc143c FireBrick b22222 DarkRed 8b0000 Pink ffc0cb LightPink ffb6c1 HotPink ff69b4 DeepPink ff1493 MediumVioletRed c71585 PaleVioletRed db7093 Coral ff7f50 Tomato ff6347 OrangeRed ff4500 DarkOrange ff8c00 Orange ffa500 Gold ffd700 Yellow ffff00 LightYellow ffffe0 LemonChiffon fffacd LightGoldenRodYellow fafad2 PapayaWhip ffefd5 Moccasin ffe4b5 PeachPuff ffdab9 PaleGoldenRod eee8aa Khaki f0e68c DarkKhaki bdb76b Lavender e6e6fa Thistle d8bfd8 Plum dda0dd Violet ee82ee Orchid da70d6 Fuchsia ff00ff Magenta ff00ff MediumOrchid ba55d3 MediumPurple 9370db BlueViolet 8a2be2 DarkViolet 9400d3 DarkOrchid 9932cc DarkMagenta 8b008b Purple 800080 Indigo 4b0082 DarkSlateBlue 483d8b SlateBlue 6a5acd MediumSlateBlue 7b68ee RebeccaPurple 663399 GreenYellow adff2f Chartreuse 7fff00 LawnGreen 7cfc00 Lime 00ff00 LimeGreen 32cd32 PaleGreen 98fb98 LightGreen 90ee90 SpringGreen 00ff7f MediumSpringGreen 00fa9a MediumSeaGreen 3cb371 SeaGreen 2e8b57 ForestGreen 228b22 Green 008000 DarkGreen 006400 YellowGreen 9acd32 OliveDrab 6b8e23 Olive 808000 DarkOliveGreen 556b2f MediumAquamarine 66cdaa DarkSeaGreen 8fbc8f LightSeaGreen 20b2aa DarkCyan 008b8b Teal 008080 Aqua 00ffff Cyan 00ffff LightCyan e0ffff PaleTurquoise afeeee Aquamarine 7fffd4 Turquoise 40e0d0 MediumTurquoise 48d1cc DarkTurquoise 00ced1 CadetBlue 5f9ea0 SteelBlue 4682b4 LightSteelBlue b0c4de PowderBlue b0e0e6 LightBlue add8e6 SkyBlue 87ceeb LightSkyBlue 87cefa DeepSkyBlue 00bfff DodgerBlue 1e90ff CornflowerBlue 6495ed RoyalBlue 4169e1 Blue 0000ff MediumBlue 0000cd DarkBlue 00008b Navy 000080 MidnightBlue 191970 Cornsilk fff8dc BlanchedAlmond ffebcd Bisque ffe4c4 NavajoWhite ffdead Wheat f5deb3 Burlywood deb887 Tan d2b48c RosyBrown bc8f8f SandyBrown f4a460 GoldenRod daa520 DarkGoldenRod b8860b Peru cd853f Chocolate d2691e SaddleBrown 8b4513 Sienna a0522d Brown a52a2a Maroon 800000 White ffffff Snow fffafa Honeydew f0fff0 MintCream f5fffa Azure f0ffff AliceBlue f0f8ff GhostWhite f8f8ff WhiteSmoke f5f5f5 SeaShell fff5ee Beige f5f5dc OldLace fdf5e6 FloralWhite fffaf0 Ivory fffff0 AntiqueWhite faebd7 Linen faf0e6 LavenderBlush fff0f5 MistyRose ffe4e1 Gainsboro dcdcdc LightGray d3d3d3 LightGrey d3d3d3 Silver c0c0c0 DarkGray a9a9a9 DarkGrey a9a9a9 Gray 808080 Grey 808080 DimGray 696969 DimGrey 696969 LightSlateGray 778899 LightSlateGrey 778899 SlateGray 708090 SlateGrey 708090 DarkSlateGray 2f4f4f DarkSlateGrey 2f4f4f Black 000000".split(" ");arguments.map(a=>print('#'+c[c.indexOf(a)+1]))

/*
const colors = "IndianRed cd5c5c LightCoral f08080 Salmon fa8072 DarkSalmon e9967a LightSalmon ffa07a Red ff0000 Crimson dc143c FireBrick b22222 DarkRed 8b0000 Pink ffc0cb LightPink ffb6c1 HotPink ff69b4 DeepPink ff1493 MediumVioletRed c71585 PaleVioletRed db7093 Coral ff7f50 Tomato ff6347 OrangeRed ff4500 DarkOrange ff8c00 Orange ffa500 Gold ffd700 Yellow ffff00 LightYellow ffffe0 LemonChiffon fffacd LightGoldenRodYellow fafad2 PapayaWhip ffefd5 Moccasin ffe4b5 PeachPuff ffdab9 PaleGoldenRod eee8aa Khaki f0e68c DarkKhaki bdb76b Lavender e6e6fa Thistle d8bfd8 Plum dda0dd Violet ee82ee Orchid da70d6 Fuchsia ff00ff Magenta ff00ff MediumOrchid ba55d3 MediumPurple 9370db BlueViolet 8a2be2 DarkViolet 9400d3 DarkOrchid 9932cc DarkMagenta 8b008b Purple 800080 Indigo 4b0082 DarkSlateBlue 483d8b SlateBlue 6a5acd MediumSlateBlue 7b68ee RebeccaPurple 663399 GreenYellow adff2f Chartreuse 7fff00 LawnGreen 7cfc00 Lime 00ff00 LimeGreen 32cd32 PaleGreen 98fb98 LightGreen 90ee90 SpringGreen 00ff7f MediumSpringGreen 00fa9a MediumSeaGreen 3cb371 SeaGreen 2e8b57 ForestGreen 228b22 Green 008000 DarkGreen 006400 YellowGreen 9acd32 OliveDrab 6b8e23 Olive 808000 DarkOliveGreen 556b2f MediumAquamarine 66cdaa DarkSeaGreen 8fbc8f LightSeaGreen 20b2aa DarkCyan 008b8b Teal 008080 Aqua 00ffff Cyan 00ffff LightCyan e0ffff PaleTurquoise afeeee Aquamarine 7fffd4 Turquoise 40e0d0 MediumTurquoise 48d1cc DarkTurquoise 00ced1 CadetBlue 5f9ea0 SteelBlue 4682b4 LightSteelBlue b0c4de PowderBlue b0e0e6 LightBlue add8e6 SkyBlue 87ceeb LightSkyBlue 87cefa DeepSkyBlue 00bfff DodgerBlue 1e90ff CornflowerBlue 6495ed RoyalBlue 4169e1 Blue 0000ff MediumBlue 0000cd DarkBlue 00008b Navy 000080 MidnightBlue 191970 Cornsilk fff8dc BlanchedAlmond ffebcd Bisque ffe4c4 NavajoWhite ffdead Wheat f5deb3 Burlywood deb887 Tan d2b48c RosyBrown bc8f8f SandyBrown f4a460 GoldenRod daa520 DarkGoldenRod b8860b Peru cd853f Chocolate d2691e SaddleBrown 8b4513 Sienna a0522d Brown a52a2a Maroon 800000 White ffffff Snow fffafa Honeydew f0fff0 MintCream f5fffa Azure f0ffff AliceBlue f0f8ff GhostWhite f8f8ff WhiteSmoke f5f5f5 SeaShell fff5ee Beige f5f5dc OldLace fdf5e6 FloralWhite fffaf0 Ivory fffff0 AntiqueWhite faebd7 Linen faf0e6 LavenderBlush fff0f5 MistyRose ffe4e1 Gainsboro dcdcdc LightGray d3d3d3 LightGrey d3d3d3 Silver c0c0c0 DarkGray a9a9a9 DarkGrey a9a9a9 Gray 808080 Grey 808080 DimGray 696969 DimGrey 696969 LightSlateGray 778899 LightSlateGrey 778899 SlateGray 708090 SlateGrey 708090 DarkSlateGray 2f4f4f DarkSlateGrey 2f4f4f Black 000000".split(" ");
arguments.map(a => print('#' + colors[colors.indexOf(a) + 1]));
*/
};

const cssColors = arguments => {
  let output = [];
  cssColorsCode(str => output.push(str + "\n"), arguments);
  return output.join("").trim(); //for some reason, it won't return a successful match if `trim` isn't used
};

const cssColorsTests = [
["Plum Brown Honeydew LawnGreen Tomato LightSlateGrey DeepPink SpringGreen Salmon DarkRed MediumBlue Lime Peru HotPink PaleGreen Purple OldLace RoyalBlue Silver Cyan Snow MidnightBlue DarkSalmon ForestGreen LavenderBlush Aquamarine LightSkyBlue Gold IndianRed DarkTurquoise Navy CornflowerBlue GhostWhite LightGreen PowderBlue Moccasin SandyBrown Coral LightSteelBlue Bisque Thistle Black Magenta Tan DarkViolet OliveDrab Grey SaddleBrown BlueViolet Teal Orchid SteelBlue MediumTurquoise LightBlue SlateGrey LightYellow Khaki Red DarkGoldenRod Olive White LightGoldenRodYellow DimGrey PeachPuff Beige MintCream Crimson CadetBlue DarkGreen MediumSpringGreen DarkOrange DeepSkyBlue LightGray MediumVioletRed Chocolate GreenYellow LightSalmon DarkOliveGreen RebeccaPurple PaleVioletRed RosyBrown PapayaWhip Orange WhiteSmoke DarkGrey Cornsilk DarkGray DarkOrchid Pink LightSeaGreen Turquoise SkyBlue MediumOrchid LemonChiffon LightPink DarkCyan DarkSeaGreen DarkSlateGrey Aqua LightCoral OrangeRed LimeGreen DarkKhaki SeaShell LightCyan Yellow Chartreuse LightSlateGray BlanchedAlmond FireBrick PaleGoldenRod PaleTurquoise Burlywood Azure DarkBlue MediumSlateBlue SlateGray MistyRose Gainsboro Gray Green Indigo Linen SeaGreen DimGray NavajoWhite Sienna AntiqueWhite LightGrey AliceBlue DarkSlateBlue Ivory GoldenRod Wheat SlateBlue FloralWhite MediumPurple Lavender Fuchsia DarkSlateGray MediumSeaGreen Maroon DodgerBlue YellowGreen Blue Violet MediumAquamarine DarkMagenta".split(" "),
 `#dda0dd
#a52a2a
#f0fff0
#7cfc00
#ff6347
#778899
#ff1493
#00ff7f
#fa8072
#8b0000
#0000cd
#00ff00
#cd853f
#ff69b4
#98fb98
#800080
#fdf5e6
#4169e1
#c0c0c0
#00ffff
#fffafa
#191970
#e9967a
#228b22
#fff0f5
#7fffd4
#87cefa
#ffd700
#cd5c5c
#00ced1
#000080
#6495ed
#f8f8ff
#90ee90
#b0e0e6
#ffe4b5
#f4a460
#ff7f50
#b0c4de
#ffe4c4
#d8bfd8
#000000
#ff00ff
#d2b48c
#9400d3
#6b8e23
#808080
#8b4513
#8a2be2
#008080
#da70d6
#4682b4
#48d1cc
#add8e6
#708090
#ffffe0
#f0e68c
#ff0000
#b8860b
#808000
#ffffff
#fafad2
#696969
#ffdab9
#f5f5dc
#f5fffa
#dc143c
#5f9ea0
#006400
#00fa9a
#ff8c00
#00bfff
#d3d3d3
#c71585
#d2691e
#adff2f
#ffa07a
#556b2f
#663399
#db7093
#bc8f8f
#ffefd5
#ffa500
#f5f5f5
#a9a9a9
#fff8dc
#a9a9a9
#9932cc
#ffc0cb
#20b2aa
#40e0d0
#87ceeb
#ba55d3
#fffacd
#ffb6c1
#008b8b
#8fbc8f
#2f4f4f
#00ffff
#f08080
#ff4500
#32cd32
#bdb76b
#fff5ee
#e0ffff
#ffff00
#7fff00
#778899
#ffebcd
#b22222
#eee8aa
#afeeee
#deb887
#f0ffff
#00008b
#7b68ee
#708090
#ffe4e1
#dcdcdc
#808080
#008000
#4b0082
#faf0e6
#2e8b57
#696969
#ffdead
#a0522d
#faebd7
#d3d3d3
#f0f8ff
#483d8b
#fffff0
#daa520
#f5deb3
#6a5acd
#fffaf0
#9370db
#e6e6fa
#ff00ff
#2f4f4f
#3cb371
#800000
#1e90ff
#9acd32
#0000ff
#ee82ee
#66cdaa
#8b008b`]
];