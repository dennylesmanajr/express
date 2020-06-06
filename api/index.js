import express from 'express';
import bodyParser from 'body-parser';
import invoiceRoutes from './server/routes/InvoiceRoutes';
import itemRoutes from './server/routes/ItemRoutes';
import customerRoutes from './server/routes/customerRoutes';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;


app.use('/api/v1/invoice', invoiceRoutes);
app.use('/api/v1/item', itemRoutes);
app.use('/api/v1/customer', customerRoutes);


// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
export default app;