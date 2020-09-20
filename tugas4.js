var siswa1  = 170
var siswa2  = 190
var siswa3  = 185

if (siswa1>siswa2 && siswa2>siswa3) {

    console.log("siswa1 tertinggi");
    console.log("urutannya: siswa1, siswa2, siswa3");
}


else if (siswa1>siswa3 && siswa3>siswa2) {

    console.log("siswa1 tertinggi");
    console.log("urutannya: siswa1, siswa3, siswa2");
}


else if (siswa2>siswa3 && siswa3>siswa1) {

    console.log("siswa2 tertinggi");
    console.log("urutannya: siswa2, siswa3, siswa1");
}


else if (siswa2>siswa1 && siswa1>siswa3) {

    console.log("siswa2 tertinggi");
    console.log("urutannya: siswa2, siswa1, siswa3");
}


else if (siswa3>siswa1 && siswa1>siswa2) {

    console.log("siswa3 tertinggi");
    console.log("urutannya: siswa3, siswa1, siswa2");
}


else if (siswa3>siswa2 && siswa2>siswa1) {

    console.log("siswa3 tertinggi");
    console.log("urutannya: siswa3, siswa2, siswa1");
}
