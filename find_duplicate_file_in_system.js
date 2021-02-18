const findDuplicate = (paths) => {
    let dupes = {};

    for (const path of paths) {
        const dirs = path.split(" ");
        for (let i = 1; i < dirs.length; i++) {
            let keyStart = dirs[i].indexOf("(");
            let key = dirs[i].slice(keyStart + 1);
            let fileName = dirs[i].slice(0, keyStart);

            if (dupes[key]) {
                dupes[key].push(dirs[0] + "/" + fileName);
            } else {
                dupes[key] = [dirs[0] + "/" + fileName];
            }
        }
    }
    return Object.values(dupes).filter((arr) => arr.length > 1);
};
