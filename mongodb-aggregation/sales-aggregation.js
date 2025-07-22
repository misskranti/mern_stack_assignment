const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Saswath1403:S%40swath9476@cluster0.fjep0.mongodb.net/SalesDB?retryWrites=true&w=majority';

async function runAggregation() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('SalesDB');
    const collection = db.collection('sales');

    const pipeline = [
      { $unwind: '$items' },

      {
        $addFields: {
          itemRevenue: { $multiply: ['$items.quantity', '$items.price'] },
          month: { $dateToString: { format: '%Y-%m', date: '$date' } }
        }
      },

      {
        $group: {
          _id: {
            store: '$store',
            month: '$month'
          },
          totalRevenue: { $sum: '$itemRevenue' },
          averagePrice: { $avg: '$items.price' }
        }
      },

      {
        $project: {
          _id: 0,
          store: '$_id.store',
          month: '$_id.month',
          totalRevenue: { $round: ['$totalRevenue', 2] },
          averagePrice: { $round: ['$averagePrice', 2] }
        }
      },

      { $sort: { store: 1, month: 1 } }
    ];

    const result = await collection.aggregate(pipeline).toArray();

    console.log('Aggregation Result:\n', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

runAggregation();
