import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { DeletePostModal } from './DeletePostModal';
import { UpdatePostModal } from './UpdatePostModal';

import { Post } from '../actions/posts.types';

import { Container } from "../styles/components/Header/styles";

type HeaderProps = {
  hasOptions?: boolean;
  children: string;
  post: Omit<Post, 'username' | 'created_datetime'>;
}

export function PostHeader({ children, hasOptions = false, post }: HeaderProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  return (
    <Container>
      <h1>{children}</h1>

      {hasOptions && (
        <>
          {isDeleteModalOpen && (
            <DeletePostModal
              isOpen={isDeleteModalOpen}
              onRequestClose={() => setIsDeleteModalOpen(false)}
              postId={post.id}
            />
          )}
          {isUpdateModalOpen && (
            <UpdatePostModal
              isOpen={isUpdateModalOpen}
              onRequestClose={() => setIsUpdateModalOpen(false)}
              post={post}
            />
          )}
          <div>
            <button type="button" onClick={() => setIsDeleteModalOpen(true)}>
              <FiTrash2 />
            </button>
            <button type="button" onClick={() => setIsUpdateModalOpen(true)}>
              <FiEdit />
            </button>
          </div>
        </>
      )}
    </Container>
  )
}