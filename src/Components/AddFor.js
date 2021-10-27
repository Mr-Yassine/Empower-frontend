import React from 'react'
import "../css/Components.css"

const AddFor = () => {
    return (
        
        <div class="container_AF d-flex justify-content-center">

            <div class="card">

                <form action="#" method="POST" class="content" enctype="multipart/form-data">
                    
                    <div class="card-input">
                        <input
                            class="form-control" 
                            type="text"
                            placeholder="Name of the Course"
                            name="name"
                            required
                        />
                        
                        <input
                            class="form-control"
                            type="file"
                            placeholder="Picture of the Course"
                            name="img"
                            accept=".png, .jpg, .svg, .jpeg"
                            required
                        />
                    </div>

                    <div class="card-input">
                        <input
                            class="form-control"
                            type="textarea"
                            placeholder="Description"
                            name="description"
                            required
                        />
                        <div class="help-block with-errors"></div>

                    </div>

                    <button type="submit" class="btn btn-info btn-lg"> ADD </button>
                            
                </form>
            </div>
        </div>
    )
}

export default AddFor
