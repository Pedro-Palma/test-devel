import express from 'express'
import user from './routes/user'
import poll from './routes/poll'
import type from './routes/type'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.disable('etag');

app.use('/api',user);
app.use('/api',poll);
app.use('/api',type)


export default app;