import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UpdateCat() {

  const {id} = useParams();
  const [cat, setCat] = useState();

  async function fetchData() {
    const {data} = await axios.get(`http://localhost:3001/cat/${id}`)
    console.log(data);
    setCat(data)
  }

  const update = async (e) => {
    const data = {
      'name': e.target.catName.value,
      'age': e.target.catAge.value,
      'isAdopted': false
    }
    await axios.put(`http://localhost:3001/cat/${id}`, {data})
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <form onSubmit={update}>
    <label htmlFor="">Cat name</label>
    <input type="text" id='catName' defaultValue={cat?.name}/>
    <br />
    <label htmlFor="">Cat age</label>
    <input type="text" name="" id="catAge" defaultValue={cat?.age}/>
    <br />
    <button type='submit'>save</button>
  </form>
  )
}
