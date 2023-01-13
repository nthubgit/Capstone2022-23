import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const handleSubmit = () => {};

export default function ReviewModal({title, id, product, username}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button varient="contained" onClick={handleOpen}>Write a Review</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} m={2} p={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={username}
            required
          />
        
          
          <Container align="center">
          
          <Rating
          name="rating"
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </Container>
          <TextField
          required
          id="reviewText"
          name="reviewText"
          label="Review"
          fullWidth
          multiline
          rows={4}
          autoComplete="given-name"
          variant="standard"
          required
        />
      <div>
      <Container align="center">
      <Button sx={{m:2}} variant="contained"  type="submit">Submit</Button>
      </Container>
      </div>
      </form>
        </Box>
      </Modal>
    </div>
  );
}