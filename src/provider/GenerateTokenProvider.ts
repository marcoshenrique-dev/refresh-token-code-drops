import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "166b71a1-bbf8-4d89-b0ab-0478236a7eda", {
      subject: userId,
      expiresIn: '20s'
    });

    return token;
  }
}

export {GenerateTokenProvider};