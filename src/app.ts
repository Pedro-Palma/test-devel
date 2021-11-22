import express from 'express'
import user from './routes/user'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.disable('etag');

app.use('/api',user);

export default app;