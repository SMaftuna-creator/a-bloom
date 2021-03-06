import React from 'react';
import AuthFormModal from './AuthFormModal';

import { Checkbox } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const UpvoteButton = ({ user, body, handleUpvote, size }) => {
  return user ? (
    <Checkbox
      checked={body.upvotedBy.includes(user.id)}
      icon={<ArrowUpwardIcon style={{ color: '#47a76a' }} />}
      checkedIcon={<ArrowUpwardIcon style={{ color: '#64b36a' }} />}
      onChange={handleUpvote}
      size={size || 'small'}
    />
  ) : (
    <AuthFormModal type="upvote" />
  );
};

export const DownvoteButton = ({ user, body, handleDownvote, size }) => {
  return user ? (
    <Checkbox
      checked={body.downvotedBy.includes(user.id)}
      icon={<ArrowDownwardIcon style={{ color: '#b2b2b2' }} />}
      checkedIcon={<ArrowDownwardIcon style={{ color: '#808080' }} />}
      onChange={handleDownvote}
      size={size || 'small'}
    />
  ) : (
    <AuthFormModal type="downvote" />
  );
};
