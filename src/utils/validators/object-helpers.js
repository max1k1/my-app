// items - usersDate

export const updateObjectInArray = (items, itemId, searchObjIdName, newObjProps) => {
  return items.map((i) => {
    if (i[searchObjIdName] === itemId) {
      return {...i, ...newObjProps}
    }
    return i; 
  });
};
