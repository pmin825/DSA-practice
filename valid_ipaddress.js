function validIPAddresses(string) {
    if (string.length < 4) return [];
    let result = [];

    for (let i = 0; i < 4; i++) {
        let iNum = parseInt(string.slice(0, i + 1));
        let iString = string.slice(0, i + 1);

        if (iNum >= 0 && iNum <= 255 && firstZero(iString)) {
            for (let j = i + 1; j < i + 4; j++) {
                let jNum = parseInt(string.slice(i + 1, j + 1));
                let jString = string.slice(i + 1, j + 1);
                if (jNum >= 0 && jNum <= 255 && firstZero(jString)) {
                    for (let k = j + 1; k < j + 4; k++) {
                        let kNum = parseInt(string.slice(j + 1, k + 1));
                        let kString = string.slice(j + 1, k + 1);
                        if (kNum >= 0 && kNum <= 255 && firstZero(kString)) {
                            let lNum = parseInt(string.slice(k + 1));
                            let lString = string.slice(k + 1);
                            if (lNum >= 0 && lNum <= 255 && firstZero(lString)) {
                                let address =
                                    iNum + "." + jNum + "." + kNum + "." + lNum;
                                result.push(address);
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}

function firstZero(string) {
    return parseInt(string).toString().length === string.length
}
