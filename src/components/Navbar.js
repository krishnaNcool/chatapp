import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useHistory } from "react-router-dom";
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
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history.replace("/login");
    localStorage.clear();
  };
  return (
    <nav>
      <h3>
        <Link to="/">Chat Support</Link>
      </h3>
      <div>
        {user ? (
          <>
           <Button color="inherit" onClick={handleClickOpen}>Raise Complaint</Button>
          <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>Raise A Complaint</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Write the complaint in the below textbox to raise the ticket and we will revert back in 24 working hours. Thank you
          </DialogContentText>
          <TextField
            fullWidth
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
            <Link to="/profile">Profile</Link>
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
           
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
