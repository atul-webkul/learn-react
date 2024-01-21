import React from 'react'

export default function Details(props) {
    
    return (
        <div className='container-fluid'>
            <div className='col-md-5 m-auto'>
                <div className='mt-3'>
                    <div className='card text-left'>
                        <div className='card-body'> 
                            <form onSubmit={props.submit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                                <button type="submit" className="btn btn-primary">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
