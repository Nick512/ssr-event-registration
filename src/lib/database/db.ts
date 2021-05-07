import mongoose from 'mongoose';

mongoose
	.connect(process.env.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => console.log('Mongo conneted'))
	.catch((err) => console.log(err));
