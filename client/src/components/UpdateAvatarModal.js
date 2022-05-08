import React, { useState } from 'react';
import UpdateAvatarForm from './UpdateAvatarForm';

import { DialogTitle } from './CustomDialogTitle';
import {
  Dialog,
  DialogContent,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import { useDialogStyles } from '../styles/muiStyles';
import FaceIcon from '@material-ui/icons/Face';

const UpdateAvatarModal = ({ handleCloseMenu, user }) => {
  const classes = useDialogStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    handleCloseMenu();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <FaceIcon style={{ marginRight: 7 }} />
          {user.avatar.exists ? 'Change profile photo' : 'Add profile photo'}
        </ListItemIcon>
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        classes={{ paper: classes.dialogWrapper }}
        fullWidth
      >
        <DialogTitle onClose={handleClose}>
          {user.avatar.exists ? 'Update your profile photo' : 'Add profile photo'}
        </DialogTitle>
        <DialogContent>
          <UpdateAvatarForm closeModal={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateAvatarModal;
