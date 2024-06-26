import { FriendRequest } from '@/core/qqnt/entities';
export declare class NTQQFriendApi {
    static getFriends(forced?: boolean): Promise<void>;
    static handleFriendRequest(request: FriendRequest, accept: boolean): Promise<void>;
}
