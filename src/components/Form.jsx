import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addNote} from '../redux/noteSlice'

function Form() {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('#9F9AA4')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      let note = {content, title, color}
      dispatch((addNote(note)))
      setTitle('')
      setContent('')
    }

  return (
    <div className='container'> 
      <div className="row"> 
        <div className="col-md-6 mx-auto mt-2">
          <h1 className='mt-3'>NotesApp</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='mb-2 mt-3'>Title</label>
                <input required type="text" className="form-control" id="exampleFormControlInput1" value={title}
                onChange={e => setTitle(e.target.value)}
                style={{color: `${color}`}} />
            </div>

            <div className="form-group mt-3">
              <label className='mb-2'>Content</label>
              <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3" value={content} 
                onChange={e => setContent(e.target.value)}
                style={{color: `${color}`}} />
              <div className='color-group mt-4 mx-auto d-flex justify-content-center align-items-center'>
              <a className='btn btn-circle shadow ms-3 ' onClick={() => setColor('#9F9AA4')} style={{backgroundColor: '#9F9AA4'}}></a>  
              <a className='btn btn-circle shadow ms-3 ' onClick={() => setColor('#E7CFCD')} style={{backgroundColor: '#E7CFCD'}}></a>  
              <a className='btn btn-circle shadow ms-3' onClick={() => setColor('#CFD8D7')} style={{backgroundColor: '#CFD8D7'}}></a>  
              <a className='btn btn-circle shadow ms-3' onClick={() => setColor('#B5C9C3')} style={{backgroundColor: '#B5C9C3'}}></a>  
              <a className='btn btn-circle shadow ms-3' onClick={() => setColor('#CAB1BD')} style={{backgroundColor: '#CAB1BD'}}></a>  
              </div>
              <div>
              <button className='btn btn-primary mt-4 mx-auto d-flex'>Add Note</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form