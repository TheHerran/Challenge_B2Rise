import { User } from "../../entities/user/user.entity";
import { userRepository } from "../../utils/repositories";

const listUsersService = async (): Promise<User[]> => {
    const users = await userRepository.find();
    return users;
}

export default listUsersService;