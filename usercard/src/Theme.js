import { createMuiTheme } from '@material-ui/core'

const Theme = createMuiTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
    }
});

export default Theme