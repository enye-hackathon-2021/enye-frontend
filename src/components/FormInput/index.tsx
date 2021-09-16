import React from "react";
import styled from "styled-components";

interface fcTypes {
  value?: any;
  label?: string;
  type: string;
  name: string;
  register: any;
  read?: any;
  req?: any;
  placeholder?: string;
}

const FormInput = ({
  value,
  label,
  type,
  name,
  register,
  read,
  req,
  placeholder,
}: fcTypes) => {
  return (
    <Container className="w-full">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        type={type}
        {...register(name, { required: req ? true : false })}
        placeholder={placeholder}
        readOnly={read}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 45px;
  display: flex;

  flex-direction: column;

  input {
    /* border: 1px solid ${({ theme }) => theme.primary}; */
    background: ${({ theme }) => theme.secondary};

    padding: 1rem;
    font-size: 16px;
    width: 100%;
    border-radius: 4px;
    height: 100%;
    margin-top: 10px;
    color:#000;
    font-weight:500;
    /* color: ${({ theme }) => theme.primary}; */
    &:focus {
      outline: 1px solid transparent;
    }
    
  &::placeholder{
  color:#0007;
  }
  }
`;
export default FormInput;
