import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface PraTextField {
  label: string;
  name: string;
  control: Control<any>;
  type?: string;
}

const PraTextField = ({ label, name, control, type = "text" }: PraTextField) => {
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
          type={type}
          variant="standard"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          {...field}
        />
      )}
    />
  );
};

export default PraTextField;
