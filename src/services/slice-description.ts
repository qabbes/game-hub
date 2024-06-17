let char = "Español"; // TODO to be updated

const getENdescription = (rawDescription?: string) => {
  if (rawDescription?.includes(char)) {
    let index = rawDescription.indexOf(char);
    return rawDescription.substring(0, index);
  }
  return rawDescription;
};

export default getENdescription;
