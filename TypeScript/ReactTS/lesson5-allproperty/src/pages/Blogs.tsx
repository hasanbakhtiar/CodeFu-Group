import React from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import SingleBlog from '../components/SingleBlog'

const Blogs:React.FC = (props:any) => {
  return (

       <>
       <h1 className='text-center my-5'>Blogs</h1>
        <Row>
          {props.pvalue.map((item:any,c:number)=>(
            <SingleBlog title={item.title} desc={item.desc} photo={item.img} key={c} />

          ))}
        </Row>
       </>
        
   
  )
}


const mapStateToProps =(state:string[])=>{
  return{
    pvalue:state
  }
}

export default connect(mapStateToProps)(Blogs)