import express from 'express'
import user from './routes/user'
import poll from './routes/poll'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.disable('etag');

app.use('/api',user);
app.use('/api',poll);


export default app;