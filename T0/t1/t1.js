function getResult(s) {

    s = s[0].toUpperCase() + s.substring(1, s.lenght);
    return s
}

console.log(
    getResult("атом"),
    "==",
    "Атом"
);