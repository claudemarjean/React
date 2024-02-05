import React, { useState} from 'react'

const AddBooks = () => {

    const initialState = {
        title: '',
        author: ''
    }

    const[newData, setNewData] = useState(initialState);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(newData)
    }

  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid mb-5'>
            <div className='container text-center'>
                <h1 className='display-4'>Books</h1>
                <p>Ajouter un livre à votre bibliothèque</p>

                <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            value={newData.title}
                            type="text"
                            className="form-control "
                            placeholder="Titre"
                            required
                            onChange={e=>setNewData({...newData,title: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={newData.author}
                            type="text"
                            className="form-control ms-2"
                            placeholder="Auteur"
                            required
                            onChange={e=>setNewData({...newData,author: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-secondary ms-3">
                            Ajouter un livre
                        </button>
                    </div>
                </form>

            </div>
        </div>
        <div className='container' style={{minHeight: '500px'}}>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-group'>
                        <li className='list-group-item list-group-item-light d-flex justify-content-between'>
                            livres enregistrés ici
                        </li>
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger mt-4 mb-5'>Effacer tous les livres</button>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
  )
}

export default AddBooks