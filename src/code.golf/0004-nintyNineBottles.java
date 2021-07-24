class M {
  public static void main(String[] args) {
    for(int i=0;i<100;i++){
      int d = 99-i;
      System.out.println(
        (d>0?d:"No more") + M.w(d) + ", " + M.m(d) + M.b(d) + ".\n"
        + (d>0?"Take one down and pass it around":"Go to the store and buy some more") + ", "
        + (d>0?m(d-1):99) + M.w(d-1) + ".\n"
      );
    }
  }

  static String b(int d) { return " bottle" + (d==1 ?"":"s") + " of beer"; }

  static String w(int d) { return M.b(d) + " on the wall"; }

  static String m(int d){ return d>0?""+d:"no more"; }
}
/**
Minified using Notepad++ JSTool Plugin
class M{public static void main(String[]args){for(int i=0;i<100;i++){int d=99-i;System.out.println((d>0?d:"No more")+M.w(d)+", "+M.m(d)+M.b(d)+".\n"+(d>0?"Take one down and pass it around":"Go to the store and buy some more")+", "+(d>0?m(d-1):99)+M.w(d-1)+".\n");}}static String b(int d){return" bottle"+(d==1?"":"s")+" of beer";}static String w(int d){return M.b(d)+" on the wall";}static String m(int d){return d>0?""+d:"no more";}}
 */