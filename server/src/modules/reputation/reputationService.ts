import User from "../../model/User";

import ReputationDto from "./reputationDto";

import { searchUsers } from "./helpers/searchUsers";
import { sortUsers } from "./helpers/sortUsers";

class Service {

    async getUsers(size: number, page: number, sort: string, search: string) {
        const users = await User.find();

        if (users.length === 0) {
            throw new Error('Users not found');
        }
        const allUsers = users.map(item => new ReputationDto(item))

        if (!page && page > 0 || !size) {
            return { users: allUsers, length: allUsers.length }
        }


        const searchedUsers = searchUsers(allUsers, search);
        const sortedSearchedUsers = sortUsers(searchedUsers, sort);

        const startItem = page * size;

        const slicedSearchedSortedUsers = sortedSearchedUsers.slice(startItem, startItem + size);

        return { users: slicedSearchedSortedUsers, length: sortedSearchedUsers.length }
    }
}

export default new Service();