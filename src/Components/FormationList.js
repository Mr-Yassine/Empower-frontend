import React from 'react'

const FormationList = () => {
    return (
        
        <div className="container_FL">

            <div>

                <table class="table text-center ">
                    <thead>
                        <tr>
                            <th> Picture </th>
                            <th> Name </th>
                            <th> Description </th>
                            <th> Action </th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td> 
                                <div class="cadre-pic">
                                    <img src="images/1.jpg" alt="img" />
                                </div>
                            </td>

                            <td> Formation Name </td>
                            <td> Formation Description </td>

                            <td>
                                <div class="dash-btn">

                                    <form id="update" action="# " method="POST">
                                        <input type="hidden" name="id" value="" />
                                        <button type="submit" class="btn btn-warning" name="update">Update</button>
                                    </form>&nbsp;
                                        
                                    <form action="#" method="POST">
                                        <input type="hidden" name="id" value="" />
                                        <button type="submit" class="btn btn-danger" name="submit">Delete</button>
                                    </form>

                                </div>
                            </td>
                        
                        </tr>

                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default FormationList
