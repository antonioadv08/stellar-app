
// utils/check-recipient-balance.js
const StellarSdk = require("stellar-sdk");

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

const checkRecipientBalance = async () => {
  // Cargamos la cuenta a través del sdk de Stellar
  const account = await server.loadAccount(
    "GA2C5RFPE6GCKMY3US5PAB6UZLKIGSPIUKSLRB6Q723BM2OARMDUYEJ5"
  );

  console.log(
    "Balances for account: " +
      "GDC75JQ6SOC3EJU5FL2IO6JL5Y2HUEPZQBVAM2TESCLG5NMYPSX6JJRP"
  );

  // Checamos cada una de las cuentas y su balance
  account.balances.forEach(balance => {
    console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
  });
};

checkRecipientBalance();