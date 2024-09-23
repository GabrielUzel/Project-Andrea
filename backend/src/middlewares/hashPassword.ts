import Bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
    return Bcrypt.hashSync(password, Bcrypt.genSaltSync(10));
}

export const comparePassword = (currentPassword: string, hashedPassword: string) => {
    return Bcrypt.compareSync(currentPassword, hashedPassword);
}