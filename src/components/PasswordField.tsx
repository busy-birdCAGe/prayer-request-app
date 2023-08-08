import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import React, { useState } from "react";

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  // showPassword: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // handleClickShowPassword: () => void;

}

const PasswordField = ({ label, name, value, handleInputChange,}: PasswordFieldProps) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      label={label}
      type={showPassword ? "text" : "password"}
      name={name}
      value={value}
      onChange={handleInputChange}
      variant="standard"
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
