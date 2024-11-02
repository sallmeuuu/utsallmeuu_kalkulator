$(function(){
    let input1 = "";
    let input2 = "";
    let operasiSelected = null;

    $(".tombol-angka").click(function () {
        let angka = $(this).text();
        
        // cek jika sudah ada selected operasi
        if (operasiSelected == null) {
            // operasi masih kosong --> isi input1
            let angkasebelumnya = $("#input1").text();
            if (angkasebelumnya === "...") angkasebelumnya = "";
            input1 = angkasebelumnya + angka;
            $("#input1").text(input1);
        } else {
            let angkasebelumnya = $("#input2").text();
            if (angkasebelumnya === "...") angkasebelumnya = "";
            input2 = angkasebelumnya + angka;
            $("#input2").text(input2);
        }
    });

    $(".tombol-operasi").click(function () {
        let operasisebelumnya = $("#operasi-selected").text();
        let newOperasi = $(this).text();
        if (operasisebelumnya === "...") {
            // update dengan operasi baru
            $("#operasi-selected").text(newOperasi);
            operasiSelected = newOperasi;
        } else {
            // replace operasi
            $("#operasi-selected").text(newOperasi);
            operasiSelected = newOperasi;
        }
    });

    // Logika untuk menghitung hasil
    $("#btn-hitung").click(function () {
        if (input1 !== "" && input2 !== "" && operasiSelected !== null) {
            let result;
            const num1 = parseFloat(input1);
            const num2 = parseFloat(input2);
            
            switch (operasiSelected) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "x":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                case "%":
                    result = num1 % num2;
                    break;
                case "^":
                    result = Math.pow(num1, num2);
                    break;
                default:
                    result = "Error";
            }
            $("#hasil").text(result); // Mengubah hasil ke dalam kotak besar hasil
        }
    });

    // Tambahkan logika untuk tombol C (clear)
    $(".tombol-clear").click(function () {
        input1 = "";
        input2 = "";
        operasiSelected = null;
        $("#input1").text("...");
        $("#input2").text("...");
        $("#operasi-selected").text("...");
        $("#hasil").text("hasil"); // Mengatur ulang kotak hasil
    });

    // Fungsi untuk faktorial
    $(".tombol-faktorial").click(function () {
        if (input1 !== "") {
            const num = parseInt(input1);
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            $("#hasil").text(fact); // Tampilkan hasil faktorial di kotak hasil
        }
    });

    // Fungsi untuk tombol desimal
    $(".tombol-desimal").click(function () {
        // Menambahkan desimal ke input yang aktif
        if (operasiSelected == null) {
            if (!input1.includes(".")) {
                if (input1 === "") {
                    input1 = "0."; // Jika input1 kosong, mulai dengan 0.
                } else {
                    input1 += ".";
                }
                $("#input1").text(input1);
            }
        } else {
            if (!input2.includes(".")) {
                if (input2 === "") {
                    input2 = "0."; // Jika input2 kosong, mulai dengan 0.
                } else {
                    input2 += ".";
                }
                $("#input2").text(input2);
            }
        }
    });

    // Fungsi untuk mengubah bentuk negatif dan positif
    $(".toggle-negatif").click(function () {
        if (operasiSelected == null && input1 !== "") {
            input1 = (parseFloat(input1) * -1).toString();
            $("#input1").text(input1);
        } else if (input2 !== "") {
            input2 = (parseFloat(input2) * -1).toString();
            $("#input2").text(input2);
        }
    });
});