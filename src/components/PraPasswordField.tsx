import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";

interface PraPasswordFieldProps {
  label: string;
  name: string;
  control: Control<any>;
}

const PraPasswordField = ({
  label,
  name,
  control,
}: 

PraPasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          sx={{
            "& .MuiFormHelperText-root": {
              marginTop: "-8px", // Adjust this value to make it closer
              fontSize: "10px",
            },
          }}
          label={label}
          type={showPassword ? "text" : "password"}
          variant="standard"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
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
          {...field}
        />
      )}
    />
  );
};

export default PraPasswordField;
