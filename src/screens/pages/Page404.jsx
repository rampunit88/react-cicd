import React from 'react'
import { Container, Box, ThemeProvider, Paper, Grid,styled  } from '@mui/material';
import Rnd from './Test';

/* const Item_ = styled(Paper)(({ theme }) => ({
    backgroundColor: theme?.palette?.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme?.palette?.text?.secondary,
  })); */
const Item = ({children}) => <>{children}</>
function Page404() {
    return (
        <Container maxWidth="xl">
            <ThemeProvider
                theme={{
                    palette: {
                        primary: {
                            main: '#007FFF',
                            dark: '#0066CC',
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                />

                <Box component="section" sx={{ p: 2, border: '1px dashed grey' }} display="flex"
                    alignItems="center">
                    <p><strong>Page</strong> <b>400</b></p>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                <Rnd/>
                </Box>

            </ThemeProvider>
        </Container>
    );
}

export default Page404
