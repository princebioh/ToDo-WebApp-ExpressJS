
module.exports = function() {
    const today = new Date();
    const  options = {
        day: "numeric",
        weekday: "long",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;
    
}