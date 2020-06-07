import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import invoiceRoutes from './server/routes/InvoiceRoutes';
import itemRoutes from './server/routes/ItemRoutes';
import customerRoutes from './server/routes/CustomerRoutes';
import invoiceDetailRoutes from './server/routes/InvoiceDetailRoutes';
import userRoutes from './server/routes/UserRoutes';
import authRoutes from './server/routes/AuthRoutes';


const app = express();
var corsOptions = {
   origin: "http://localhost:3000"
 };
 
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;



app.use('/api/v1/login', authRoutes);
app.use('/api/v1/invoice', invoiceRoutes);
app.use('/api/v1/item', itemRoutes);
app.use('/api/v1/customer', customerRoutes);
app.use('/api/v1/invoicedetail', invoiceDetailRoutes);
app.use('/api/v1/user', userRoutes);


// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
export default app;