import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
	console.log(req.cookies.refreshtoken);
	const secure = process.env.development ? '' : '; Secure';

	if (req.cookies.refreshtoken) {
		res.setHeader('Set-Cookie', [
			'refreshtoken=deleted; expires=Thu, 01 Jan 1970 00:00:00 GMT HttpOnly; Path=/',
			`hello=world; HttpOnly; Path=/${secure}`
		]);

		//res.setHeader('Set-Cookie', [`refreshtoken=${refreshToken}; HttpOnly; Path=/${secure}`]);


		//res.setHeader('Set-Cookie', 'refreshtoken=deleted; Path=/; Max-Age=0');

		res.status(200).json({
			message: 'refreshtoken cookie deleted'
		});
	} else {
		res.status(200).json({
			message: 'no refreshtoken cookie found'
		});
	}
}
