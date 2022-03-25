import { useMemo } from "react";
import { formatDistanceToNow } from 'date-fns';

import { PostHeader } from "./PostHeader";

import { Post } from "../actions/posts.types";

import { Container, Info } from "../styles/components/Post/styles";

type PostProps = {
  post: Post;
  isOwner: boolean;
}

export function Post({ post, isOwner }: PostProps) {
  const timeDistanceToNow = useMemo(() => {
    return formatDistanceToNow(new Date(post.created_datetime), { addSuffix: true })
  }, [post]);

  return (
    <Container>
      <PostHeader hasOptions={isOwner} post={post}>
        {post.title}
      </PostHeader>
      <section>
        <Info>
          <strong>@{post.username}</strong>
          <span>{timeDistanceToNow}</span>
        </Info>
        <p>{post.content}</p>
      </section>
    </Container>
  )
}