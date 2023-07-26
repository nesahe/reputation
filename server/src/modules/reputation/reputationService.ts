import User from "../../model/User";

import ReputationDto from "./reputationDto";

import { searchUsers } from "./helpers/searchUsers";
import { sortUsers } from "./helpers/sortUsers";

import { getDateVoting } from "./helpers/getDateVoting";

import ApiError from "../../exceptions/ApiError";
import { validSortMethod } from "./helpers/validSortMethod";

class Service {

    async getUsers(userId: string, size: number, page: number, sort: string, search: string) {

        const users = await User.find();

        if (users.length === 0) {
            throw new Error('Users not found');
        }
        const allUsers = users.map(item => new ReputationDto(item))

        const isSortValid = validSortMethod(sort);

        if (!page && page > 0 || !size || !isSortValid) {
            return { users: allUsers, length: allUsers.length }
        }

        const searchedUsers = searchUsers(allUsers, search);
        const sortedSearchedUsers = sortUsers(searchedUsers, sort);

        const startItem = page * size;

        const slicedSearchedSortedUsers = sortedSearchedUsers.slice(startItem, startItem + size);

        const profile = await User.findById(userId);

        if (!profile) {
            throw ApiError.unAuthorizedError();
        }

        const myLikedUsers = profile.likedUsers;

        const likedSlicedSearchedSortedUsers = slicedSearchedSortedUsers.map(item => {
            if (myLikedUsers.includes(item.id)) {
                item.isLiked = true;
            }

            return item
        })

        return { users: likedSlicedSearchedSortedUsers, length: sortedSearchedUsers.length }
    }

    async likeUser(userId: string, profileId: string) {

        if (!userId) {
            throw ApiError.badRequest('User id not found');
        }

        const date = getDateVoting();

        const profile = await User.findById(profileId);

        if (!profile) {
            throw ApiError.unAuthorizedError();
        }

        const dateLastVotingMe = profile.lastVoting.split('.')[0];

        const canVoting = date.split('.')[0] !== dateLastVotingMe;

        if (!canVoting) {
            throw ApiError.badRequest('You have already voted today');
        }

        const user = await User.findById(userId);

        if (!user) {
            throw ApiError.badRequest('User not found');
        }

        user.reputation += 1;

        profile.lastVoting = date;
        profile.likedUsers = [user._id];

        await user.save();
        await profile.save();

    }

    async unLikeUser(userId: string, profileId: string) {

        if (!userId) {
            throw ApiError.badRequest('User id not found');
        }

        const profile = await User.findById(profileId);

        if (!profile) {
            throw ApiError.unAuthorizedError();
        }

        const user = await User.findById(userId);

        if (!user) {
            throw ApiError.badRequest('User not found');
        }

        const myLikedUsersArr = profile.likedUsers;

        if (!myLikedUsersArr.includes(userId)) {
            throw ApiError.badRequest(`You haven't liked this user yet`);
        }

        user.reputation -= 1;
        profile.likedUsers = myLikedUsersArr.filter(item => item !== userId);

        profile.lastVoting = '';

        await user.save();
        await profile.save();

    }
}

export default new Service();