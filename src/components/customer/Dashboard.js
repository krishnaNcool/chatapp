import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Dashboard() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography align="left" ariant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat Query Support
          </Typography>
          <Button color="inherit"  variant="outlined" onClick={handleClickOpen}>Chat</Button>
          <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>Raise A Complaint</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Write the complaint in the below textbox to raise the ticket and we will revert back in 24 working hours. Thank you
          </DialogContentText>
          <TextField

            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="phonenumber"
            label="Phone Number"
            type="number"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="descrition"
            label="Description"
            type="multiline"
            fullWidth
            rows={4}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
