
module.exports = function() {
    const today = new Date();

    const  options = {
        day: "numeric",
        weekday: "long",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
 
}