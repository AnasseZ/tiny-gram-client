import { IncompleteUser } from "./IncompleteUser";

export class Message {
    content: string;
    hashtags: Array<any>;
    imageUrl: string;
    publicationDate: Date;
    userId: string;
    user: IncompleteUser
}