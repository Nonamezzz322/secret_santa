import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar-edit';
import { Box } from '@material-ui/core';
import { HOST_URL } from '../../configs/envConfig';
import avatarPlaceholder from '../../assets/img/avatar.svg';
import { deleteAvatar, uploadAvatar, uploadCroppAvatar } from '../../redux/asyncActions/user';

const useStyles = makeStyles(() => ({
  avatarEditor: {
    borderRadius: '10px',
    width: '300px',
    overflow: 'hidden'
  }
}));

const AvatarCropper = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);
  const [preview, setPreview] = useState(null);

  const classes = useStyles();
  const avatarOriginalImage = user.avatarOriginalImage ? `${HOST_URL}/${user.avatarOriginalImage}` : avatarPlaceholder;

  const onUploadAvatar = e => {
    dispatch(uploadAvatar(e));
  };

  const onUploadCropp = () => {
    dispatch(uploadCroppAvatar(preview));
  };

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = prev => {
    setPreview(prev);
  };

  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = avatarOriginalImage;

  return (
    <Box>
      <Box className={classes.avatarEditor}>
        <Avatar
          width={295}
          height={295}
          imageHeight={300}
          onCrop={onCrop}
          onClose={onClose}
          onFileLoad={onUploadAvatar}
          img={img}
        />
      </Box>
      <button type="button" onClick={() => dispatch(deleteAvatar())}>удалить аватар</button>
      <button type="button" onClick={e => onUploadCropp(e)}>загрузить cropp</button>
    </Box>
  );
};

export default AvatarCropper;
