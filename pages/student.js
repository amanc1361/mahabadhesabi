
import {  useEffect, useState } from 'react'
import Axios from 'axios' 

Axios.defaults.baseURL = "https://www.mdhrc.ir/api";

const Showstudent=() => {
   const Getdata= async() =>  {
 
    Axios.get("/students").then(res=> {
      
        setListstudent(res.data.data)
    })
   
    
}
useEffect(() => {
  Getdata()
 
}, [])
  const[liststudent,setListstudent]=useState([])
    return  <div dir='rtl' >
   {
     liststudent.length==0 ? <div><p>هیچ اطلاعاتی برای نمایش وجود ندارد.</p></div>:
         
  <table className='table table-striped'>
      <thead>
        <tr key='th1'>
              <th>ردیف</th>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>نام پدر</th>
              <th> کد ملی</th>
              <th>پایه تحصیلی</th>
              <th> رشته تحصیلی</th>
              <th>نام مدرسه</th>
              <th> شماره تماس</th>
              <th>شماره شاد</th>
              <th>علایق</th>
              <th> انجمن ها</th>
              <th>عکس پرسنلی</th>
              <th>تصویر شناسنامه </th>
              <th>اشتغال به تحصیل</th>
              <th> فیش واریزی</th>
              </tr>
    </thead>
    <tbody>
           {liststudent.map((item,index) => (
                <tr key={index}><td>{index+1}</td>    
                <td>{item.name}</td>
                <td>{item.family}</td>
                <td>{item.fathername}</td>
                <td>{item.nationalcode}</td>
                <td>{item.base}</td>
                <td>{item.category}</td>
                <td>{item.schoolname}</td>
                <td>{item.phone}</td>
                <td>{item.shad}</td>
                <td>{item.favirotes}</td>
                <td>{item.anjomans}</td>
                <td><img  alt={'pic'} src={'https://mdhrc.ir/images/'+item.nationalcode+'/'+item.image} height={60} width={60} /></td>
                <td><img alt={'pic'} src={'https://mdhrc.ir/images/'+item.nationalcode+'/'+item.shenasnameh} height={60} width={60} /></td>
                <td><img alt={'pic'} src={'https://mdhrc.ir/images/'+item.nationalcode+'/'+item.certschool} height={60} width={60} /></td>
                <td><img  alt={'pic'} src={'https://mdhrc.ir/images/'+item.nationalcode+'/'+item.fish} height={60} width={60} /></td>
                </tr>
           ))}
    </tbody>
  </table>
}
</div>
    
}
export default Showstudent