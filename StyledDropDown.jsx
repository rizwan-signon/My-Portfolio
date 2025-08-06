import React from 'react';
import { styled } from '@mui/material/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

const StyledFormControl = styled(FormControl)(({ theme, width }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    fontSize: '0.85rem',
    height: '30px',
  },
  '& .MuiInputLabel-root': {
    fontSize: '0.85rem',
    transform: 'translate(14px, 6px) scale(1)',
    '&.Mui-focused, &.MuiFormLabel-filled': {
      transform: 'translate(14px, -9px) scale(0.75)',
    },
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.75)',
    },
  },
  '& .MuiSelect-select': {
    paddingTop: '6px',
    paddingBottom: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  width: width || 'auto',
}));

const StyledDropDown = ({
  label = '',
  width = '',
  value,
  onChange,
  options = [],
  size = 'small',
  variant = 'outlined',
  error = false,
  helperText = '',
  ...rest
}) => {
  const labelId = `select-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <StyledFormControl width={width} error={error} size={size} variant={variant} {...rest}>
      <InputLabel id={labelId}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        value={value}
        onChange={onChange}
        label={label}
      >
        {options.map((opt, index) => (
          <MenuItem key={opt.value || index} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
};

export default StyledDropDown;