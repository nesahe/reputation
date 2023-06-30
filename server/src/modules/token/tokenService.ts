import jwt from 'jsonwebtoken';

import Token from '../../model/Token';

class TokenService {
    generateTokens(payload: string): { accessToken: string, refreshToken: string } {

        const accessToken = jwt.sign({ id: payload }, process.env.JWT_ACCESS_SECRET || '', {
            expiresIn: '1h'
        })


        const refreshToken = jwt.sign({ id: payload }, process.env.JWT_REFRESH_SECRET || '', {
            expiresIn: '30d'
        })

        return {
            accessToken, refreshToken
        }

    }

    async saveToken(user: string, refreshToken: string) {
        const tokenData = await Token.findOne({ user });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await tokenData.save();
        }
        const token = new Token({ user, refreshToken });
        return await token.save();
    }
}

export default new TokenService();