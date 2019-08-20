import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
  background-color: #f5d5c88a;
  color: #343a4054;
  height: 100px;
  justify-content: space-around;
`
const Form = styled.form`
  display: flex;
  background-color: #FFF;
  height: 180px;
  width: 700px;
  margin: 15px auto;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  height: 20px;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-top: 10px;
  float: left;
  overflow:scroll;
`
const Button = styled.button`
  background-color: white;
  border: 2px solid #b3d7ff;
  color: grey;
  width: 58px;
  float: right;
  font-size: 10px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
    :hover {
    background-color: #4CAF50; /* Green */
    color : white;
  }
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
  overflow:hidden;
`

const DiscussForm = (props) => {

  return (
    <>
      <Header>Discussion</Header>

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
          <Label htmlFor="content">
            <small>Post a discussion:</small>
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