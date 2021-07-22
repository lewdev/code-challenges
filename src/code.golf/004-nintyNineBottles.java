class Main {
  public static void main(String[] args) {
    for(int i=0;i<100;i++){
      int d = 99-i;
      System.out.println(
        (d>0?d:"No more") + this.w(d) + m(d) + this.b(d) + ".\n"
        + (d>0?"Take one down and pass it around":"Go to the store and buy some more")
        + (d>0?m(d-1):99) + w(d-1) + ".\n"
      );
    }
  }

  String b(int d) { return "bottle" + (d==1 ?"":"s") + " of beer"; }
  
  String w(int d) {
    return "on the wall " + this.b(d) + ".\nTake one down and pass it around,";
  }
  String m(d){
    return d>0?d:"no more";
  }
}