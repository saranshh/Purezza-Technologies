import Form from "./component/Form";
import Table from "./component/Table";
import Footer from './component/Footer'
import { useState } from "react";

function App() {

  const [inVal, setInpval] = useState({
    fname: '',
    lastname: "",
    DOB: "",
    phonenumber: "",
    email: " ",
    pic:""
  })
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  const handleEdit = (item) => {
    console.log(item.lname)
    scrollToTop()
    setInpval({
      fname:item.fname,
      lastname:item.lname,
      DOB:item.dob,
      phonenumber:item.phone,
      email:item.email,
      pic:item.pic,
      
    })
   
}

  return (
    <>
       <Form setInpval={setInpval} inVal = {inVal} />
       <Table handleEdit={handleEdit} />
       <Footer/>
    </>
  );
}

export default App;
