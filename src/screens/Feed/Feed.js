import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { InputSearch } from './styles';

import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import burguer1 from '../../assets/burguer1.jpg'
import burguer2 from  '../../assets/burguer2.jpg'
import burguer3 from '../../assets/burguer3.jpeg'
import asia1 from  '../../assets/asiatica1.jpg'
import asia2 from '../../assets/asiatica2.jpg'
import asia3  from '../../assets/asiatica3.png'
import massa1 from '../../assets/massa1.jpg'
import massa2  from  '../../assets/massa2.jpg'
import massa3 from '../../assets/massa3.jpg'
import saude1  from '../../assets/saudavel1.jpg'
import saude2 from '../../assets/saudavel2.jpg'
import saude3  from'../../assets/saudavel3.jpeg'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
   
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div>
  
      FutureEats
      <form>
      
  <InputSearch  id="outlined-basic" label="Restaurante" variant="outlined" 
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
  
  />
</form>


      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Burguer" />
          <Tab label="Asiática"  />
          <Tab label="Massas" />
          <Tab label="Sáudavel"  />
      
        </Tabs>
      </AppBar>
   
      <TabPanel value={value} index={0}>
        {/* MENU BURGUER */}
        {/* CARD1 */}
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 1"
          height="120"
          image={burguer1}
          title="X Burguer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          X Burguer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD2 */}
     <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 2"
          height="120"
          image={burguer2}
         title="comida"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          X Salada
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD3 */}
       <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 3"
          height="120"
          image={burguer3}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        X Bacon
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
      </TabPanel>

      <TabPanel value={value} index={1}>
        {/* MENU ÁSIATICA */}
         {/* CARD1 */}
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 1"
          height="120"
          image={asia1}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Sushi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD2 */}
     <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 2"
          height="120"
          image={asia2}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Yakisoba
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD3 */}
       <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 3"
          height="120"
          image={asia3}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Temaki
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
      </TabPanel>

      <TabPanel value={value} index={2}>
        {/* MENU MASSAS */}
       {/* CARD1 */}
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 1"
          height="120"
          image={massa1}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Pizza
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD2 */}
     <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 2"
          height="120"
          image={massa2}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Pastel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD3 */}
       <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 3"
          height="120"
          image={massa3}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Coxinha
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
      </TabPanel>

      <TabPanel value={value} index={3}>
        {/* MENU SÁUDAVEL */}
      {/* CARD1 */}
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 1"
          height="120"
          image={saude1}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Salada diet
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD2 */}
     <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 2"
          height="120"
          image={saude2}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Sanduiche Natural 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    {/* CARD3 */}
       <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Imagem 3"
          height="120"
          image={saude3}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Suco Natural
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          50 60 min      Frete R$3,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
      </TabPanel>

      <BottomNavigation
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
>
  <BottomNavigationAction label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
  <BottomNavigationAction label="Account" icon={<PermIdentityIcon />} />
</BottomNavigation>




    </div>
  );
}
