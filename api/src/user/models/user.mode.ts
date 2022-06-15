import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserDocument extends mongoose.Document {
	username: string;
	email: string;
	password: string;
	profilePic?: string;
	comparePassword: (candidatePassword: string) => Promise<boolean>;
}

/* Mongoose Schema */
const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true },
);

/* Schema Pre (must not be arrwow function) */
UserSchema.pre(
	'save',
	async function (next: mongoose.CallbackWithoutResultAndOptionalError) {
		let user = this as UserDocument;

		// only hash the password if it has been modified (or is new)
		if (!user.isModified('password')) return next();

		// Random additional data
		const salt = await bcrypt.genSalt(config.get('saltWorkFactor'));

		const hash = await bcrypt.hashSync(user.password, salt);

		// Replace the password with hash
		user.password = hash;

		return next();
	},
);

/* Schema methods (must not be arrwow function) */
UserSchema.methods.comparePassword = async function (
	candidatePassword: string,
) {
	const user = this as UserDocument;

	return bcrypt.compare(candidatePassword, user.password).catch((_) => false);
};

const User = mongoose.model<UserDocument>('User', UserSchema);
export default User;
