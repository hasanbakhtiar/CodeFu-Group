import React from 'react'
import { Row } from 'react-bootstrap'
import SingleBlog from '../components/SingleBlog'
import { connect } from 'react-redux'

const Blogs = ({ svalue }) => {
  return (
    <>
      <h1 className='text-center my-5'>Blog List</h1>
      <Row>
        {svalue.map(item => (
          <SingleBlog title={item.title} 
                      desc={item.desc} 
                      key={item.id} 
                      photo={item.photo} 
                      id={item.id} />
        ))}
      </Row>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    svalue: state
  }
}

export default connect(mapStateToProps)(Blogs)