// jshint esversion:6

function getFormattedDate() {
    const date = new Date();

    const year = date.getFullYear();

    const month = date.toLocaleString('default', { month: "long" });

    const day = date.toLocaleString('default', { day: "2-digit" });

    return { year, month, day };
}

export { getFormattedDate };