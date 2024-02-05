import { AppError } from "../../errors/AppError";
import { userRepository } from "../../utils/repositories";

const deleteUserService = async (id: string): Promise<boolean> => {
    const users = await userRepository.find();
    const user = users.find((user) => user.id === id);

    if (!user) {
        throw new AppError(404, "User not foud!");
    }

    await userRepository.delete(id);

    return true;
}

export default deleteUserService;