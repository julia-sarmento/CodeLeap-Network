import { useMemo, useState } from "react";
import { formatDistanceToNow } from 'date-fns';

import { PostHeader } from "./PostHeader";

import { Post } from "../actions/posts.types";

import { Container, Section, Info, Content } from "../styles/components/Post/styles";

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
      <Section>
        <Info>
          <strong>@{post.username}</strong>
          <span>{timeDistanceToNow}</span>
        </Info>
        <Content>
          <p>{post.content}</p>
        </Content>
      </Section>
    </Container>
  )
}