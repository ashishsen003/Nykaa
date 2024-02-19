import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Topbar = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [gender, setGender] = useState(searchParams.get('gender') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [sort, setSort] = useState(searchParams.get('sort') || '')

  // console.log(gender);
  // console.log(category);
  // console.log(sort);

  useEffect(()=>{
    const params = {}
    gender && (params.gender = gender)
    category && (params.category = category)  
    sort && (params.sort = sort)
    setSearchParams(params)
  }, [gender, category, sort])

  const handleClear = ()=>{
    setCategory('')
    setGender('')
    setSort('')
  }

  return (
    <div>

      <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} >
        <option value='' disabled>Filter By Gender</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>

      <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)} >
        <option value='' disabled>Filter By Category</option>
        <option value='makeup'>Makeup</option>
        <option value='skincare'>Skincare</option>
        <option value='haircare'>Haircare</option>
      </select>

      <select name="" value={sort} onChange={(e)=>setSort(e.target.value)} >
        <option value="" disabled>Sort By Price</option>
        <option value="asc">Ascending</option>
        <option value="desc">Decending</option>
      </select>

    <button onClick={handleClear}>Clear All</button>

    </div>
  );
};

export default Topbar;
