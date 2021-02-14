const subsets = (nums) => {
    let subs = [[]];
    for (const num of nums) {
        let length = subs.length;
        for (let i = 0; i < length; i++) {
            subs.push(subs[i].concat(num));
        }
    }
    return subs;
};

