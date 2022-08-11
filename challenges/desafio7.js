db.produtos.find(
  {
    $and: 
      [ 
        { vendidos: { $not: { $eq: 50 } } },
        { tags: { $exists: false } },
      ],
    },
  { nome: true, vendidos: true, _id: false },
  );
