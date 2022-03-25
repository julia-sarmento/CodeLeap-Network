import Modal from 'react-modal';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { Button } from './Button';

import { deletePost } from '../actions/posts';

import { api } from '../service/api';

import { Container } from '../styles/components/DeletePostModal/styles';

type DeletePostModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  postId: number;
}

export function DeletePostModal({ isOpen, onRequestClose, postId }: DeletePostModalProps) {
  const dispatch = useDispatch();

  const handleDeletePost = useCallback(async () => {
    try {
      await api.delete(`/${postId}/`);

      dispatch(deletePost(postId));

      toast.success('Item was successfully deleted.');

      onRequestClose();
    } catch (err) {
      toast.error('Internal Error. Try again later.');
    }
  }, [postId, dispatch, onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <span>Are you sure you want to delete this item?</span>

        <div>
          <Button color="white" onClick={onRequestClose}>Cancel</Button>
          <Button color="white" onClick={handleDeletePost}>OK</Button>
        </div>
      </Container>
    </Modal>
  )
}