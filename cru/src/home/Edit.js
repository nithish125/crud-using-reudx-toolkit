import { useState } from 'react'
import './home.css'
import { setAdd, setEdit } from '../redux/slice'
import Image from "./chefs-3.jpg"
import { useDispatch, useSelector } from 'react-redux'
function Edit() {
    const insides = { fname: "", lname: "", mobile: "", dates: "", address: "", accountnumber: "", ifsccode: "", bankname: "", branch: "" }

    const [values, setValues] = useState(insides)
    function getdata(e) {
        
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        e.preventDefault()
    }
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const editsdata = state.cart.edit
    // console.log(editsdata)
    var a1 = {}
    function cancel(e) {
        dispatch(setEdit(a1))
        e.preventDefault()
    }
    function hanechange(e) {
        e.preventDefault()
        dispatch(setEdit(values))
        // console.log("eyg",values)

    }
    return (
        <div>
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
                                            <input type="text" name="fname" value={editsdata.fname} onChange={getdata} />
                                        </div>
                                        <div className="name">
                                            <label >Last Name</label>
                                            <input type="text" name="lname" value={editsdata.lname} onChange={getdata} />
                                        </div>
                                    </div>
                                    <div className="name-box mob-box m-2">
                                        <div className="mob">
                                            <label >Mobile Number</label>
                                            <input type="text" name="mobile" value={editsdata.mobile} onChange={getdata} />
                                        </div>
                                        <div className="email">
                                            <label >Email</label>
                                            <input type="email" name="email" value={editsdata.email} onChange={getdata} />
                                        </div>
                                    </div>
                                    <div className="date-box m-2">
                                        <label >Date of Birth</label>
                                        <input type="date" name="dates" value={editsdata.dates} onChange={getdata} />
                                    </div>
                                    <div className="m-2">
                                        <label >Address</label>
                                        <input type="text" name="address" value={editsdata.address} onChange={getdata} />
                                    </div>
                                </div>
                                <div className="bank-dtl">
                                    <h4>Bank Detail</h4>
                                    <div className="account-box m-2">
                                        <div className="email"><label >Account Number</label><input type="number" value={editsdata.accountnumber} name="accountnumber" onChange={getdata} /></div>
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
                                    <button onClick={cancel}>CANCEL</button>
                                    <button type="submit" onClick={hanechange}>upDaDe</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>            </div>
        </div>
    )

}
export default Edit