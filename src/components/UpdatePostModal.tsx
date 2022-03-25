import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Button } from './Button';

import { Post } from '../actions/posts.types';
import { updatePost } from '../actions/posts';

import { api } from '../service/api';

import { Container, Form } from '../styles/components/UpdatePostModal/styles';

type UpdatePostModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  post: Omit<Post, 'username' | 'created_datetime'>;
}

type InputFormData = {
  title: string;
  content: string;
}

export function UpdatePostModal({ isOpen, onRequestClose, post }: UpdatePostModalProps) {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm<InputFormData>({
    defaultValues: {
      content: post.content,
      title: post.title,
    }
  });

  const { title, content } = watch();

  const handleUpdatePost = useCallback(async ({ content, title }: InputFormData) => {
    try {
      const data = {
        content,
        title,
      }

      const response = await api.patch(`/${post.id}/`, data);

      dispatch(updatePost(response.data));

      toast.success('Item was successfully updated.');

      onRequestClose();
    } catch {
      toast.error('Internal Error. Try again later.');
    }
  }, [dispatch, post.id, onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <Form onSubmit={handleSubmit(handleUpdatePost)}>
          <h2>Edit item</h2>

          <label>
            Title
            <input type="text" placeholder="Hello World" {...register('title')} />
          </label>

          <label>
            Content
            <textarea placeholder="Content here" {...register('content')} />
          </label>

          <Button
            type="submit"
            disabled={!(title && content)}
          >
            SAVE
          </Button>
        </Form>
      </Container>
    </Modal>
  )
}