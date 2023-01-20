import { useState } from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import Image from "./chefs-3.jpg"
import Swal from "sweetalert2";
import { setAdd, setisEdit } from '../redux/slice'
function Home() {
    const insides = { fname: "", lname: "", mobile: "", dates: "", address: "", accountnumber: "", ifsccode: "", bankname: "", branch: "" }
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const cartData = state.cart.setAddCart
    console.log("setAddCart",state.cart.setAddCart)
    const isEdit = state.cart.isEdit
    console.log(isEdit)
    const [values, setValues] = useState(insides)
    const [values1, setValues1] = useState(state.cart.setAddCart)
    function getdata(e) {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        e.preventDefault()
    }
    function hanechange(e) {
        let a = values1.includes(values)       
        console.log("value",values1)         
        if (!a) {
            // setValues1(...state.cart.setAddCart)
            setValues1([...values1, {...values,id: values1.length+1}])
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        dispatch(setAdd(values1))
        e.preventDefault()

        }
        // dispatch(setAdd(values1))
        // e.preventDefault()
    }
    return (
        <div className="container">
            <div className="left-container">
                <div className="login">
                    <div className="head">
                        <div><img src={Image} alt="img" /></div>
                        <h2>Edit employee</h2>
                    </div>
                    <div className="form-container">
                        <form >
                            <h4>personal Ditail</h4>
                            <div>
                                <div className="name-box m-2">
                                    <div className="name">
                                        <label  >First Name</label>
                                        <input type="text" name="fname" onChange={getdata} />
                                    </div>
                                    <div className="name">
                                        <label >Last Name</label>
                                        <input type="text" name="lname" onChange={getdata} />
                                    </div>
                                </div>
                                <div className="name-box mob-box m-2">
                                    <div className="mob">
                                        <label >Mobile Number</label>
                                        <input type="text" name="mobile" onChange={getdata} />
                                    </div>
                                    <div className="email">
                                        <label >Email</label>
                                        <input type="email" name="email" onChange={getdata} />
                                    </div>
                                </div>
                                <div className="date-box m-2">
                                    <label >Date of Birth</label>
                                    <input type="date" name="dates" onChange={getdata} />
                                </div>
                                <div className="m-2">
                                    <label >Address</label>
                                    <input type="text" name="address" onChange={getdata} />
                                </div>
                            </div>
                            <div className="bank-dtl">
                                <h4>Bank Detail</h4>
                                <div className="account-box m-2">
                                    <div className="email"><label >Account Number</label><input type="number" name="accountnumber" onChange={getdata} /></div>
                                    <div className="mob"><label >IFSC Code</label><input type="text" name="ifsccode" onChange={getdata} /></div>
                                </div>
                                <div className="m-2">
                                    <label >Bank Name</label>
                                    <input type="text" name="bankname" onChange={getdata} />
                                </div>
                                <div className="branch-box">
                                    <label >Branch</label>
                                    <input type="text" name="branch" onChange={getdata} />
                                </div>
                            </div>
                            <div className="btn-grp" id="form-btn">
                                <button>CANCEL</button>
                                <button type="submit" onClick={hanechange}>ADD</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>)
}
export default Home