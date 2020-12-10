import React from 'react';
import styled, { ThemeProvider} from 'styled-components';
import { Container } from './styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';


const Box = styled.div`${palette}${spacing}${typography}`;
// or import Box from '@material-ui/core/Box';

const theme = createMuiTheme();

const HomeScreen= () => {
return (
<Container>
<ThemeProvider theme={theme}>
<Box
color="white"
// bgcolor="background.paper"
fontFamily="h6.fontFamily"
fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
p={{ xs: 0, sm: 0, md: 0 }}
>
Future 
</Box>

<Box
color="#5cb646"
// bgcolor="background.paper"
fontFamily="h6.fontFamily"
fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
p={{ xs: 0, sm: 0, md: 0 }}
>
Eats
</Box>
</ThemeProvider>
</Container>
);
}

export default HomeScreen;
