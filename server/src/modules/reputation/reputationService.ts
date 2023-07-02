import User from "../../model/User";

import ReputationDto from "./reputationDto";

class Service {

    async getUsers() {
        const users = await User.find();

        if (users.length === 0) {
            throw new Error('Users not found');
        }
        const allUsers = users.map(item => new ReputationDto(item))

        return allUsers.sort((a, b) => b.reputation - a.reputation);
    }

}

export default new Service();