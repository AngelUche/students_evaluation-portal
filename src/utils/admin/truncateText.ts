// jshint esversion:6

function truncateStr(str: string, length: number) {
    if (str.length > length) {
        return (str.slice(0, length) + "...");
    }
    else return str;
}

export { truncateStr };