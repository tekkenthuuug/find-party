import React from 'react';
import './TextInput.scss';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

interface ITextInput {
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType?: string;
  name?: string;
  error?: string | null;
}

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        backgroundColor: '#2ba296',
        borderRadius: '3px',
        width: '100%',
        '& *': {
          color: 'rgba(255,255,255, 0.8)',
          fontFamily: 'Roboto Mono'
        },
        '& .MuiInputLabel-shrink': {
          color: 'rgb(140, 245, 154)',
          fontFamily: 'Roboto Mono'
        },
        '& .MuiFilledInput-underline:after': {
          borderColor: 'rgb(140, 245, 154)'
        }
      }
    }
  }
});

const TextInput: React.FC<ITextInput> = ({ placeholder, handleChange, inputType = 'text', name, error }) => {
  return (
    <div>
      <div className="error">{error ? error : null}</div>
      <ThemeProvider theme={theme}>
        <TextField
          label={placeholder}
          variant="filled"
          type={inputType}
          onChange={handleChange}
          name={name}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default React.memo(TextInput);
