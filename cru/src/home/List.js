import React from "react";
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import Image from "./chefs-3.jpg"
import Swal from "sweetalert2";
import { setAdd, setEdit, setisEdit } from '../redux/slice'
function List() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const cartData = state.cart.setAddCart
    const editsdata = state.cart.edit
    const isEdit = state.cart.isEdit
    console.log(editsdata)
    function edit(ele1) {
        console.log(ele1.id)
        dispatch(setEdit(ele1))
        // dispatch(setisEdit(false))
    }
    function delee(ele1) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true, 
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                const remove = cartData.filter((ele) =>ele.id !== ele1.id)
                  dispatch(setAdd(remove))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <div className="right-container">
                {
                    cartData.map((valuess) => {
                        return (
                            <div className="box">

                                <div className="wraper">
                                    <div className="img-box">
                                        <img src={Image} alt="img" />
                                    </div>
                                    <h3><span><i className="icofont-ui-user"></i></span>{valuess.fname}{valuess.lname}</h3>
                                    <div className="detial">
                                        <p><span><i className="icofont-ui-call"></i></span>{valuess.mobile}</p>
                                        <p><span><i className="icofont-ui-call"></i></span>{valuess.email}</p>
                                    </div>
                                    <p><span><i className="icofont-calendar"></i></span>01-01-2000</p>
                                    <p><span><i className="icofont-location-pin"></i></span>{valuess.address}</p>
                                    <div className="btn-grp">
                                        <button onClick={() => { edit(valuess) }}>EDIT</button>
                                        <button onClick={() => { delee(valuess) }}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default List