import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


interface BlogFormType{
  onFormSubmit:(data:any)=>void;
  editblog:any;
}

const BlogForm:React.FC<BlogFormType> = ({onFormSubmit,editblog}) => {
    const [photo,setPhoto] = useState(editblog ? editblog.img : "");
    const [title,setTitle] = useState(editblog ? editblog.title : "");
    const [desc,setDesc] = useState(editblog ? editblog.desc : "");

    const blogSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        if (!photo || !title || !desc) {
            alert("please, fill this input!")
        }else{
           onFormSubmit({
                img:photo,
                title:title,
                desc:desc
            })
        }
    }
  return (
    <div className="d-flex align-items-center justify-content-center">
    <Col md={6}>
    <Form onSubmit={blogSubmit}>
    <Form.Group className="mb-3" >
      <Form.Label>Photo</Form.Label>
      <Form.Control value={photo} type="text" placeholder="Enter photo link" onChange={e=>{setPhoto(e.target.value)}}/>

    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control value={title} type="text" placeholder="Enter title" onChange={e=>{setTitle(e.target.value)}}/>

    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Description</Form.Label>
      <Form.Control value={desc} type="text" placeholder="Enter Description" onChange={e=>{setDesc(e.target.value)}}/>
    
    </Form.Group>
    <Button variant="primary" type="submit">
      Share
    </Button>
  </Form>
    </Col>
    </div>
  )
}

export default BlogForm