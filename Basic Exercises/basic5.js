function SortString(str) {
    let arraySplit = str.split("");
    let arraySort = arraySplit.sort();
    let arrayJoin = arraySplit.join("");

    return arrayJoin;
}

console.log(SortString("oiuhjks"));