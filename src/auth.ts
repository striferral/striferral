import NextAuth, { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './database';

export const authConfig = {
	providers: [
		GitHub,
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	adapter: DrizzleAdapter(db),
	session: { strategy: 'jwt' },
	pages: {
		signIn: '/sign-in',
		newUser: '/welcome',
	},
} satisfies NextAuthConfig;
export const { handlers, auth, signOut, signIn } = NextAuth(authConfig);
