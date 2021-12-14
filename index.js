const employee = {
name: "Sam",
"streetAddress": "12 Broadway"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;

    return newObj;

}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object

}

function deleteFromEmployeeByKey(object, key) {
    var newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;

}