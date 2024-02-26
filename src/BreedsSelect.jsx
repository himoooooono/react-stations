/* eslint-disable react/prop-types */
// @ts-nocheck

export const BreedsSelect = ({breeds, selectedBreed, onChange}) => {
  const dogs=Object.keys(breeds).map((key)=>
    <option value={key} key={key}>{key}</option>
  );
  alert(dogs);
  return <select value={selectedBreed} onChange={onChange}>{dogs}</select>
}

export default BreedsSelect
