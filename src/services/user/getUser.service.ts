import { User } from "../../entities/user/user.entity";
import { AppError } from "../../errors/AppError";
import { userRepository } from "../../utils/repositories";

const getUserService = async (id: string): Promise<User> => {
    const user = await userRepository.findOne({ where: { id: id } });

    if (!user) {
        throw new AppError(404, "User not Found!");
    }

    return user;
}

export default getUserService;