import React from 'react'

const AddBooks = () => {
  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid'>
            <div className='container text-center'>
                <h1 className='display-4'>Books</h1>
                <p>Ajouter un livre à votre bibliothèque</p>

                <form className="d-flex justify-content-center">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Titre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control ms-3"
                            placeholder="Auteur"
                            required
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
    </main>
  )
}

export default AddBooks