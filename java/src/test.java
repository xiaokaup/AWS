import java.util.Optional;

class One {
	public void foo() {
		System.out.println("One");
	}
}

class Two extends One {
	public void foo() {
		System.out.println("Two");
	}
	public void dosth() {
		System.out.println("Two again");
	}
}

class Main {
	public static void print() {
		System.out.println();
	}
	
	public static void print(String str) {
		str = Optional.ofNullable(str).orElse("");
		System.out.println(str);
	}

	public static void test_1() {
		Main.print("test_1");
		// Two t = new One();
		One t = new Two();
		t.foo();
		// t.dosth(); // error
		t = (Two)t;
		// t.dosth(); // error
		((Two) t).dosth();
		Main.print();
	}

	public static void test_2() {
		Main.print("test_2");
		byte b;
		int i = 257;
		double d = 32.13;
		b = (byte) i;
		System.out.println("i and b = " + i + " " + b);
		i = (int)d;
		System.out.println("d and i = " + d + " " + i);
		b = (byte)d;
		System.out.println("d and b = " + d + " " + b);
		byte e=(byte)130; 
		System.out.println(e);
		Main.print();
	}

	public static void test_3() {
		Main.print("test_3");
		int i = 12345;
		String s = "";
		s = i + "";
		s = String.valueOf(i);
		Main.print(s);
		Main.print();
	}
	
	public static void test_3_1() {
		Main.print("test_3_1");
		String s = "12345";
		int i ;
		i=Integer.parseInt(s);
		i=Integer.valueOf(s).intValue();
		Main.print(((Integer) i).toString());
	}
	
	public static boolean isNumeric(String str) { 
	  try {  
	    Integer.parseInt(str); 
	    return true;
	  } catch(Exception e){ 
	    return false;  
	  }  
	}
	
	public static void test_4(String str, int n) {
		Main.print("parse string then separate");
		String value = str.replace(" ", "");
		if(Main.isNumeric(value)) {
			Main.print("type: num");
		} else {
			Main.print("type: string");
		}
		Main.print("start:"+str);
		
		Main.print("end:");
		for(int i=0, length=value.length(); i < length; i++) {
			if(i%n==0 && i!=0) Main.print();
			System.out.print(value.charAt(i));
		}
		
		Main.print();
	}

	public static void main(String[] args) throws Exception {
//		Main.test_1();
//		Main.test_2();
//		Main.test_3();
//		Main.test_3_1();
		Main.test_4("ab cdefg h", 3);
		Main.test_4("12 345 6 7 8", 3);
	}
}