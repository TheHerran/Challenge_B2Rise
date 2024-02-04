import { AppError } from "../../errors/AppError";
import { userRepository } from "../../utils/repositories";

const deleteUserService = async (id: string) => {
    const users = await userRepository.find();
    const user = users.find((user) => user.id === id);

    if (!user) {
        throw new AppError(404, "User not foud!");
    }

    const softDelete = await userRepository.update(id, { ...user, isActive: false });

    return true;
}

export default deleteUserService;