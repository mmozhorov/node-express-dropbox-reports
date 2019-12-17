module.exports = function(currentData, previousData){
    return {
        id: previousData.id,
        name: currentData.name || previousData.name,
        lastName: currentData.lastName || previousData.lastName,
        profession: currentData.profession || previousData.profession,
        photo: currentData.photo || previousData.photo,
        join_date: currentData.join_date || previousData.join_date
    }
};