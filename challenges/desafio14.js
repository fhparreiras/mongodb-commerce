db.produtos.updateMany({}, { $push: { valoresNutricionais: { $each: [], $slice: 3 } } });
db.produtos.find(
  { ingredientes: { $all: ["picles"] } },
  { nome: true, ingredientes: true, valoresNutricionais: true, _id: false },
);
