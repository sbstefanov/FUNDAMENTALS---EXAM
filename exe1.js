function solve(array) {
    let str = array.shift();

    for (let line of array) {
        if (line === "Abracadabra") {
            break;
        }

        let [command, el1, el2] = line.split(' ');

        switch (command) {
            case "Abjuration":
                let upperCase = str.toUpperCase();
                str = upperCase;
                console.log(str);
                break;

            case "Necromancy":
                let lowerCase = str.toLowerCase();
                str = lowerCase;
                console.log(lowerCase);
                break;

            case "Illusion":
                let arrStr = str.split('');
                if (arrStr[el1] !== undefined) {
                    arrStr.splice(el1, 1, el2);
                    let toStr = arrStr.join('');
                    str = toStr;
                    console.log('Done!');
                } else {
                    console.log("The spell was too weak.");
                }
                break;

            case "Divination":
                if (str.includes(el1)) {
                    let change = str.split(el1).join(el2);
                    str = change;
                    console.log(str);
                } else {
                    continue;
                }
                break;

            case "Alteration":
                if (str.includes(el1)) {
                    let newStr = str.replace(el1, "");
                    str = newStr;
                    console.log(str);
                } else {
                    continue;
                }
                break;
            default:
                console.log(`The spell did not work!`);
                break;
        }
    }
}
solve(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])