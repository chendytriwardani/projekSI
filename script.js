// PENGECEKAN //
// check nama
function checkNama() {
    if (document.getElementById("nama").value == "") {
        var span = document.getElementById("alertNama");
        span.style.display = "inline";
        span.innerHTML = "Masukan nama lengkap";
        document.getElementById("nama").focus();
        return false;
    }
    return true;
}
// check alamat
function checkAlamat() {
    if (document.getElementById("alamat").value == "") {
        var span = document.getElementById("alertAlamat");
        span.style.display = "inline";
        span.innerHTML = "Masukan alamat lengkap";
        document.getElementById("alamat").focus();
        return false;
    }
    return true;
}

// check tanggal
function checkDate() {
    var patt = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](18|19|20)\d\d$/g;
    var span = document.getElementById("alertLahir");
    if (document.getElementById("lahir").value == "") {
        span.style.display = "inline";
        span.innerHTML = "Masukan Tanggal Lahir";
        document.getElementById("lahir").focus();
        return false;
    } else if (patt.test(document.getElementById("lahir").value)) {
        return true;
    } else {
        span.innerHTML = "Masukan dengan format dd-mm-yyyy";
        span.style.display = "inline";
        document.getElementById("lahir").focus();
        return false;
    }
}

// check umur
function checkUmur() {
    var patt = /^([1-9])([0-9]?)([0-2]?)$/g;
    var umur = document.getElementById("umur");
    var span = document.getElementById("alertUmur");
    if (umur.value == "") {
        span.style.display = "inline";
        span.innerHTML = "Masukan umur";
        document.getElementById("umur").focus();
        return false;
    } else if (patt.test(umur.value)) {
        return true;
    } else {
        span.innerHTML = "Masukan dengan format angka";
        span.style.display = "inline";
        document.getElementById("umur").focus();
        return false;
    }
}

// check jenis kelamin
function checkKelamin() {
    var span = document.getElementById("alertKelamin");
    if (document.myForm.kelamin.value == "") {
        span.style.display = "inline";
        span.innerHTML = "Pilih jenis kelamin";
        return false;
    }
    return true;
}

// check pendidikan
function checkPendidikan() {
    var span = document.getElementById("alertPendidikan");
    if (document.getElementById("pendidikan").value == "") {
        span.style.display = "inline";
        span.innerHTML = "Pilih pendidikan terakhir";
        document.getElementById("pendidikan").focus();
        return false;
    }
    return true;
}

// check lomba
function checkLomba() {
    var checkbox = document.getElementsByName("lomba");
    var isi = false;
    var i = 0;
    while (i < checkbox.length && !isi) {
        if (checkbox[i].checked) isi = true;
        i++;
    }
    if (isi) return true;
    var span = document.getElementById("alertLomba");
    span.style.display = "inline";
    span.innerHTML = "Pilih lomba yang akan di ikuti minimal 1";
}
// check email
function checkEmail() {
    var patt = /([a-zA-Z0-9_\.])+@+gmail\.com/g;
    var email = document.getElementById("email").value;
    var span = document.getElementById("alertEmail");
    if (email == "") {
        span.style.display = "inline";
        span.innerHTML = "Masukan alamat email google anda";
        document.getElementById("email").focus();
        return false;
    } else if (patt.test(email)) {
        return true;
    } else {
        span.style.display = "inline";
        span.innerHTML = "Masukan sesuai akun google anda";
        document.getElementById("email").focus();
        return false;
    }
}

// check konfirmasi email
function checkConfirmEmail() {
    var span = document.getElementById("alertConfirmEmail");
    if (document.getElementById("confirmEmail").value != document.getElementById("email").value) {
        span.style.display = "inline";
        span.innerHTML = "Email harus sama";
        document.getElementById("confirmEmail").focus();
        return false;
    }
    return true;
}

// check password
function checkPassword() {
    var patt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g;
    var pass = document.getElementById("password");
    var span = document.getElementById("alertPassword");
    if (pass.value == "") {
        span.style.display = "inline";
        span.innerHTML = "Masukan password";
        document.getElementById("password").focus();
        return false;
    } else if (patt.test(pass.value)) {
        return true;
    } else {
        span.style.display = "inline";
        span.innerHTML = "Password harus memenuhi setidaknya a-z, A-Z, 0-9, dan minimal 8 karakter";
        document.getElementById("password").focus();
        return false;
    }
}

// check konfirmasi password
function checkConfirmPass() {
    var span = document.getElementById("alertConfirmPass");
    if (document.getElementById("confirmPassword").value != document.getElementById("password").value) {
        span.style.display = "inline";
        span.innerHTML = "Password harus sama";
        document.getElementById("confirmPassword").focus();
        return false;
    }
    return true;
}
// AKHIR DARI PENGECEKAN //

// ALERT //
// menyembunyikan alert bagian nama
function alertNama() {
    document.getElementById("alertNama").style.display = "none";
}
// menyembunyikan alert bagian alamat
function alertAlamat() {
    document.getElementById("alertAlamat").style.display = "none";
}
// menyembunyikan alert bagian tanggal lahir
function alertLahir() {
    document.getElementById("alertLahir").style.display = "none";
}
// menyembunyikan alert bagian umur
function alertUmur() {
    document.getElementById("alertUmur").style.display = "none";
}
// menyembunyikan alert bagian jenis kelamin
function alertKelamin() {
    document.getElementById("alertKelamin").style.display = "none";
}
// menyembunyikan alert bagian pendidikan
function alertPendidikan() {
    document.getElementById("alertPendidikan").style.display = "none";
}
// menyembunyikan alert bagian lomba
// event lomba
function alertLomba() {
    document.getElementById("alertLomba").style.display = "none";
}
var checkbox = document.getElementsByName("lomba");
checkbox.forEach(function (i) {
    i.addEventListener("click", alertLomba);
});
// akhir event lomba

// menyembunyikan alert bagian email
function alertEmail() {
    document.getElementById("alertEmail").style.display = "none";
}
// menyembunyikan alert bagian konfirmasi email
function alertConfirmEmail() {
    document.getElementById("alertConfirmEmail").style.display = "none";
}
// menyembunyikan alert bagian password
function alertPassword() {
    document.getElementById("alertPassword").style.display = "none";
}
// menyembunyikan alert bagian konfirmasi password
function alertConfirmPass() {
    document.getElementById("alertConfirmPass").style.display = "none";
}
// AKHIR DARI ALERT //

// FUNGSI UTAMA VALIDASI
function validasi() {
    var confirmPassword = checkConfirmPass();
    var password = checkPassword();
    var confirmEmail = checkConfirmEmail();
    var email = checkEmail();
    var lomba = checkLomba();
    var pendidikan = checkPendidikan();
    var kelamin = checkKelamin();
    var umur = checkUmur();
    var tanggalLahir = checkDate();
    var alamat = checkAlamat();
    var nama = checkNama();
    if (nama && alamat && tanggalLahir && umur && kelamin && pendidikan && lomba && email && confirmEmail && password && confirmPassword) {
        return true;
    }
    return false;
}

// EVENT TAMBAHAN
// show hide password
function showPass() {
    var password = document.getElementById("password");
    var togglePass = document.getElementById("toggle-pass");
    if (password.type === "password") {
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
    }
    togglePass.classList.toggle("hide");
}
