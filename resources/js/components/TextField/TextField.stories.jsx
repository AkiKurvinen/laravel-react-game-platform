import { TextField } from "@mui/material";

const meta = {
  title: "Design System/Atoms/TextField",
  component: TextField,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    label: "Email (optional)",
    placeholder: "e.g. email@email.com",
  },
};

export const Value = {
  args: {
    label: "Email (optional)",
    value: "email@email.com",
  },
};
export const Required = {
  args: {
    label: "Username",
    required: true,
    placeholder: "e.g. username",
  },
};
export const Error = {
  args: {
    label: "Email (optional)",
    helperText: "Invalid email!",
    error: true,
    value: "not-email.com",
  },
};
export const Success = {
  args: {
    label: "Email (optional)",
    value: "email@email.com",
    color: "success",
  },
};
export const Disabled = {
  args: {
    label: "Email (optional)",
    disabled: true,
    value: "email@email.com",
  },
};
export const Password = {
  args: {
    type: "password",
    label: "Password *",
    placeholder: "****",
  },
};