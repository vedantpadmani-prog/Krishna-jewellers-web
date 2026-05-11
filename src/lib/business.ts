export const business = {
  name: "Krishna Jewellers",
  tagline: "Crafting Timeless Elegance Since Generations",
  phone: "7584907128",
  phoneIntl: "+917584907128",
  whatsapp: "917584907128",
  email: "info@krishnajewellers.in",
  address: "Ranichak, Laxmi Bazar, Paschim Medinipur, West Bengal",
  gstin: "19AKUPM7857R1ZL",
  bis: "5190632918",
  mapsQuery: "Ranichak Laxmi Bazar Paschim Medinipur",
};

export const waLink = (msg = "Hello Krishna Jewellers, I would like to enquire about your jewellery.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
