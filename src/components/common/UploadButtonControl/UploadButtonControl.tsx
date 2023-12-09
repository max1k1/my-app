import React, { ChangeEvent } from "react";

type PropsType={
  children: React.ReactNode
  value?: string | number 
  onChange?: (e: ChangeEvent<HTMLInputElement>)=>void
  disabled?: boolean
  accept?: string 
}
const UploadButtonControl: React.FC<PropsType> = ({ children, value, onChange, disabled, accept }) => {
    return (
      <label htmlFor="contained-button-file" className="m-0 w-100">
        <input
          value={value}
          accept={accept}
          disabled={disabled}
          style={{ display: 'none' }}
          id="contained-button-file"
          multiple
          type="file"
          onChange={disabled ? () => {} : onChange}
        />
        {children}
      </label>
    );
  };

export default UploadButtonControl;