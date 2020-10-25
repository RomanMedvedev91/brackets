module.exports = function check(str, bracketsConfig) {
    if (str.length === 0) return false;

    for (i = 0; i < str.length; i++) {
        for (j = 0; j < bracketsConfig.length; j++) {
            if (
                str[i] == bracketsConfig[j][0] &&
                str[i + 1] == bracketsConfig[j][1]
            ) {
                str = str.replace(`${str[i]}${str[i + 1]}`, "");
                i = i - 2;
            }
        }
    }

    return str === "";
};
