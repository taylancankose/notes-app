import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeNote, searchNote } from '../redux/noteSlice'


function NoteList() {
const [search, setSearch] = useState('')    
const dispatch = useDispatch()
const items = useSelector((state) => state.notes.items)
const searchs = useSelector((state) => state.notes.search)
console.log(items)

const filtered = items.filter((item) => {
   return Object.keys(item).some((key) => 
        item[key]
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase())
    )
})

console.log("filtered", filtered)

return (
 <div className='container'>
       <div className="row col-md-6 mx-auto">
            <form onSubmit={e=>e.preventDefault()}>
                <div className="form-group">
                    <label className='mb-2 mt-3'>Search</label>
                    <input  type="text" className="form-control" id="exampleFormControlInput1" onChange={(e)=> setSearch(e.target.value)} />
                </div>
            </form>
        </div>
     <div className="row d-flex justify-content-center align-items-center">
         {
        filtered.length > 0 ?
        filtered.map((item) => (
        <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-3  mx-auto mt-3" >
        <div className="card border-0 shadow-sm ms-4 mt-3 mb-4" key={item.id} style={{backgroundColor: `${item.color}`,width: '300px' }}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.content}</p>
        <a href="#" className="btn btn-primary"  onClick={() => dispatch(removeNote(item.id))}>Remove</a>
        <a href="#" className="btn btn-warning ms-2">Edit</a>
        </div>
        </div>
        </div>
    ))
    :
    <h2 className='mt-5 text-center mb-5'>No result found...</h2>
}
 </div>
 </div>
)
}

export default NoteList