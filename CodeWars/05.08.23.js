// Century From Year
function century(year) {
    return (year % 100 == 0) ? year / 100 : ((year - year % 100) / 100) + 1
}

// ј если вспомнить про округлени€... Math.ceil округл€ет вверх 
function century(year) {
    return Math.ceil(year/100)
}

// Keep Hydrated!
function litres(time) {
    return Math.floor(time * 0.5);
}

// Remove String Spaces
// gi - нечувствительность к регистру; g - удаление всех вхождений
function noSpace(x){
    return x.replace( / /g, "")
}

// String repeat
function repeatStr (n, s) {
    return s.repeat(n);
}

