import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/user.interface";
import { userRepository } from "../../utils/repositories";
import brcyptjs from "bcryptjs";

const updateUserService = async (id: string, {name, email, password}: IUserUpdate): Promise<boolean>=> {
    if (!name && !email && !password) {
        throw new AppError(400, "Not a key has been given!");
    }

    const userList = await userRepository.find();
    const user = userList.find((user) => user.id === id);

    if (!user) {
        throw new AppError(404, "User not found!")
    }

    const UpdatedUser = await userRepository.update(id, {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? brcyptjs.hashSync(password, 10) : user.password
    });

    return true;
}

export default updateUserService;