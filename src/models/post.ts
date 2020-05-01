import { StringDecoder } from "string_decoder";
export interface Post {
  title: string;
  timestamp: number;
  uid: string;
}

export interface Doc {
  data: () => Post;
  id: StringDecoder;
}
export interface PostsResponse {
  data: Doc[];
}
