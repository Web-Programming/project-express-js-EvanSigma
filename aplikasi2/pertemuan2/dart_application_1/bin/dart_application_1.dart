void main() {
  String nama="Tasya";//String adalah tipe data untuk teks
  int umur=20;// int adalah tipe data untuk bilangan bulat
  double ipk=3.5;// double adalah tipe data untuk bilangan desimal
  bool statusMahasiswa=true;// bool adalah tipe data untuk nilai benar atau salah

  //type inference
  var alamat="Jalan Merdeka No. 10";// tipe data akan menyesuaikan dengan nilai yang diberikan
  print("Nama: $nama");
  print("Umur: $umur tahun");
  print("IPK: $ipk");
  print("alamat: $alamat");
  print("Status Mahasiswa: $statusMahasiswa");

    //operator
  int a=15;
  int b=4;
  //Operator Aritmatika
  print("Penjumlahan :${a+b}");  
  print("Modul(Sisa Bagi) :${a%b}");
  //Operator Perbandingan
  print("Apakah a sama dengan b? ${a==b}");
  //Logika
  bool hujan=true;
  bool bawaPayung=false;
  print("Apakah akan basah ?${hujan &&!bawaPayung}");

  int nilaiujian=85;
  String grade;
  if(nilaiujian>=80){
    grade="A";
  }
  else if(nilaiujian>=70){grade="B";}
  else if(nilaiujian>=60){grade="C";}
  else {grade="D";}
  print("nilai ujian anda :$nilaiujian grade :$grade");

  for(int i=1;i<=5;i++){
    print("Perulangan ke-$i");
  }
//menampilkan isi array dengan perulangan
  List<String> buah=["Mangga","Apel hijau","Jeruk"];
  int index=0;
  while(index<buah.length){
    print("Buah: ${buah[index]}");
    index++;
}
  var bil=5;
  

}