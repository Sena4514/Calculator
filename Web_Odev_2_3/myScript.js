function ekle(sayi) {
    document.form.textview.value = document.form.textview.value + sayi;

}
function esittir() {
    var deger = document.form.textview.value;
    if (deger) {
        document.form.textview.value = eval(document.form.textview.value);
    }
}
function temizle() {
    document.form.textview.value = "";
}
function geriAl() {
    var deger = document.form.textview.value;
    document.form.textview.value = deger.substring(0, deger.length - 1);
}