import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  background-color: #FFF;
  height: auto;
  width: 700px;
  margin: 42px auto;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  height: 24px;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-top: 10px;
  float: left;
  overflow: scroll;
  font-size: 14px;
`
const Button = styled.button`
  font-weight: bold;
  width: 50px;
  color: white;
  background-color: #78c800;
  border-radius: 9px;
  text-align: center;
  border-width: 2px 2px 4px;
  text-transform: uppercase;
  padding: 12px;
  font-size: 12px;
  line-height: 10px;
  margin-top: 12px;
  cursor: pointer;
`
const Label = styled.label`
  font-size: 18px;
  color: #adb5bd;
  height: 20px;
  width: 200px;
  margin-top: 10px;
  margin-left: 10px;
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
}
`

const TextBox = styled.textarea`
  height: 100px;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-top: 10px;
  float: left;
  overflow: hidden;
  font-size: 14px;
`

const DiscussForm = (props) => {
  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <fieldset>
          <Label htmlFor="title">
            <small>Title:</small>
          </Label>
          <Input
            name="title"
            id="title"
            type="text"
            placeholder="Title"
            value={props.title}
            onChange={props.handleChange}
          />
          <Label htmlFor="author">
            <small>Name:</small>
          </Label>
          <Input
            name={props.username}
            id="name"
            type="text"
            placeholder="Name"
            value={props.author}
            onChange={props.handleChange}
          />
          <Label htmlFor="content">
            <small>Type Here ...</small>
          </Label>
          <TextBox
            name="content"
            type="text"
            id="content"
            placeholder="Post a  discussion"
            value={props.content}
            onChange={props.handleChange}
          />
        </fieldset>
        <Button type="submit">Submit</Button>

      </Form>
    </>
  )
}



export default DiscussForm;