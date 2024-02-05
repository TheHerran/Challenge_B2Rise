import { IUserRequest } from "../../interfaces/user.interface";
import { User } from "../../entities/user/user.entity";
import { AppError } from "../../errors/AppError";
import bcryptjs from "bcryptjs";
import { userRepository } from "../../utils/repositories";

const createUserService = async ({ name, email, password }: IUserRequest): Promise<User> => {
    const users = await userRepository.find();
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
        throw  new AppError(400, "User already exists!");
    }

    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = userRepository.create({ name, email, password: hashPassword })

    await userRepository.save(newUser);

    return newUser;
}

export default createUserService;