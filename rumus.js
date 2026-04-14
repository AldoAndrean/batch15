// rumus.js
export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "/":
            // Menangani pembagian dengan nol agar tidak error
            return angka2 !== 0 ? angka1 / angka2 : "Kesalahan: Pembagian dengan nol!";
        case "*":
            return angka1 * angka2;
        default:
            return "Operator tidak valid!";
    }
}