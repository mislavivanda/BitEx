import {
  parseBlogDate,
  parseDate,
  fetchGraphQLContentfulData,
} from "../helpers";

export async function getBlogPosts(limit) {
  //OBJAŠNJENJE KORIŠTE INLINE FRAGENTA ZA DOHVAT AUTORA If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type. It's easiest to see with an example:
  //AUTOR IMPLEMENTIRA ENTRIES INTERFACE TAKO DA BEZ INLINE FRAGENTA MOŽEO SAMO QUERYAT PRPERTYE OD ENTRY MODLEA A NE OD AUTORA
  try {
    var blogPosts = await fetchGraphQLContentfulData(
      `query{
                blogPostCollection(order: date_DESC, preview:false ${
                  limit ? `limit:${limit}` : ""
                }) {
                items {
                    title
                    slug
                    date
                    tags
                    description
                    blogPicture{
                      url
                    }
                    body{
                      json
                    }
                    author{
                    ...on Author { 
                          name
                          surname
                        }
                    }
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return blogPosts.data.blogPostCollection.items.map((blogPost) => ({
    title: blogPost.title,
    slug: blogPost.slug,
    date: parseBlogDate(new Date(blogPost.date)),
    blogPictureUrl: blogPost.blogPicture.url,
    description: blogPost.description,
    articleBody: blogPost.body.json.content, //ARRAY OF PARAGRAPHS
    tags: blogPost.tags,
    author: {
      name: blogPost.author.name,
      surname: blogPost.author.surname,
    },
  }));
}

export async function getBlogPost(slug) {
  try {
    var blogPost = await fetchGraphQLContentfulData(
      `query($slug:String){
                blogPostCollection(order: date_DESC, preview:false, where: {slug:$slug}) {
                items {
                    title
                    slug
                    date
                    tags
                    blogPicture{
                      url
                    }
                    body{
                      json
                    }
                    author{
                    ...on Author { 
                          name
                          surname
                        }
                    }
                }
            }
            }`,
      { slug: slug }
    );
  } catch (error) {
    throw new Error(error);
  }

  return {
    title: blogPost.data.blogPostCollection.items[0].title,
    slug: blogPost.data.blogPostCollection.items[0].slug,
    date: parseBlogDate(
      new Date(blogPost.data.blogPostCollection.items[0].date)
    ),
    blogPictureUrl: blogPost.data.blogPostCollection.items[0].blogPicture.url,
    articleBody:
      blogPost.data.blogPostCollection.items[0].body.json.content[0].content[0]
        .value, //markdown body
    tags: blogPost.data.blogPostCollection.items[0].tags,
    author: {
      name: blogPost.data.blogPostCollection.items[0].author.name,
      surname: blogPost.data.blogPostCollection.items[0].author.surname,
    },
  };
}

export async function getBlogSlugs() {
  try {
    var blogSlugs = await fetchGraphQLContentfulData(
      `query{
                blogPostCollection(order: date_DESC, preview:false) {
                items {
                    slug
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return blogSlugs.data.blogPostCollection.items.map(
    (blogPost) => blogPost.slug
  );
}

export async function getCryptoOffer(limit = null) {
  let variables;
  if (limit) {
    variables = { limit: limit };
  } else variables = {};

  try {
    var cryptoOffer = await fetchGraphQLContentfulData(
      `query($limit:Int){
                cryptoCurrencyCollection(preview:false limit:$limit) {
                items {
                    name
                    slug
                    icon{
                      url
                    }
                  	shortDescription
                }
            }
            }`,
      variables
    );
  } catch (error) {
    throw new Error(error);
  }

  return cryptoOffer.data.cryptoCurrencyCollection.items.map((cryptoCoin) => ({
    name: cryptoCoin.name,
    slug: cryptoCoin.slug,
    iconPictureUrl: cryptoCoin.icon.url,
    description: cryptoCoin.shortDescription,
  }));
}

export async function getCryptoCoin(slug) {
  try {
    var cryptoOffer = await fetchGraphQLContentfulData(
      `query($slug:String){
                cryptoCurrencyCollection(preview:false where:{slug:$slug}) {
                items {
                    name
                    slug
                    icon{
                      url
                    }
                  	description{
                      json
                    }
                }
            }
            }`,
      { slug: slug }
    );
  } catch (error) {
    throw new Error(error);
  }
  console.log(cryptoOffer.data.cryptoCurrencyCollection.items[0]);

  return {
    name: cryptoOffer.data.cryptoCurrencyCollection.items[0].name,
    slug: cryptoOffer.data.cryptoCurrencyCollection.items[0].slug,
    iconPictureUrl: cryptoOffer.data.cryptoCurrencyCollection.items[0].icon.url,
    description:
      cryptoOffer.data.cryptoCurrencyCollection.items[0].description.json
        .content[0].content[0].value, //ARRAY OF PARAGRAPHS
  };
}

export async function getCryptoSlugs() {
  try {
    var cryptoSlugs = await fetchGraphQLContentfulData(
      `query{
                cryptoCurrencyCollection(preview:false) {
                items {
                    slug
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return cryptoSlugs.data.cryptoCurrencyCollection.items.map(
    (cryptoCoin) => cryptoCoin.slug
  );
}

export async function getUser(email, password) {
  //provjera postoji li user kod credentials login
  try {
    var user = await fetchGraphQLContentfulData(
      `           
         query($email:String, $password:String){
            userCollection(preview:false where:{email:$email,password:$password}){
            items {
              name
              surname
              email
            }
        }
      }`,
      {
        email: email,
        password: password,
      }
    );
  } catch (error) {
    throw new Error(error);
  }

  if (user.data.userCollection.items.length > 0) {
    return {
      name: user.data.userCollection.items[0].name,
      surname: user.data.userCollection.items[0].surname,
      email: user.data.userCollection.items[0].email,
    };
  } else return null;
}

export async function getUserAccountData(email) {
  try {
    var user = await fetchGraphQLContentfulData(
      `           
         query($email:String){
            userCollection(preview:false where:{email:$email}){
            items {
              name
              surname
              email
              analytics
              creditCardsCollection(limit:3){
                ...on UserCreditCardsCollection{
                  items{
                    ...on CreditCards{
                      cardHolder
                      cardNumber
                      securityCode
                      expDate
                      dateAdded
                      icon{
                        url
                      }
                    }
                  }
                }
              }
              crpytoPortfolioCollection(limit:7){
                ...on UserCrpytoPortfolioCollection{
                  items{
                    ...on CryptoPortfolio{
                      growthSign
                      growthValue
                      amount
                      price
                      holdings
                      crpytoCurrency{
                        ...on CryptoCurrency{
                          icon {
                            url
                          }
                          name
                        }
                      }
                    }
                  }
                }
              }
              tradesCollection(limit:7){
                ...on UserTradesCollection{
                  items{
                    ...on Trades{
                      fromCryptoCurrency{
                        ...on CryptoCurrency{
                          icon{url}
                          name
                        }
                      }
                      toCryptoCurrency{
                        ...on CryptoCurrency{
                          icon{url}
                          name
                        }
                      }
                      creditCardTo{
                        ...on CreditCards{
                          icon{url}
                          cardNumber
                        }
                      }
                      creditCardFrom{
                        ...on CreditCards{
                          icon{url}
                          cardNumber
                        }
                      }
                      fromAmount
                      toAmount
                      transactionNumber
                      approvalNumber
                      time
                      fee
                    }
                  }
                }
              }
            }
        }
      }`,
      {
        email: email,
      }
    );
  } catch (error) {
    throw new Error(error);
  }

  if (user.data.userCollection.items.length > 0) {
    //vrati objekt sa svin podacima vezanim za usera(trades + portfolio + kartice)
    return {
      name: user.data.userCollection.items[0].name,
      surname: user.data.userCollection.items[0].surname,
      email: user.data.userCollection.items[0].email,
      analytics: user.data.userCollection.items[0].analytics,
      creditCards:
        user.data.userCollection.items[0].creditCardsCollection.items.map(
          (creditCard) => ({
            cardHolder: creditCard.cardHolder,
            securityCode: creditCard.securityCode,
            cardNumber: creditCard.cardNumber,
            expDate: creditCard.expDate,
            dateAdded: parseDate(new Date(creditCard.dateAdded)),
            iconUrl: creditCard.icon.url,
          })
        ),
      cryptoPortfolio:
        user.data.userCollection.items[0].crpytoPortfolioCollection.items.map(
          (crypto) => ({
            growthSign: crypto.growthSign,
            growthValue: crypto.growthValue,
            amount: crypto.amount,
            price: crypto.price,
            holdings: crypto.holdings,
            cryptoName: crypto.crpytoCurrency.name,
            cryptoIconUrl: crypto.crpytoCurrency.icon.url,
          })
        ),
      trades: user.data.userCollection.items[0].tradesCollection.items.map(
        (trade) => ({
          fromCryptoName: trade.fromCryptoCurrency
            ? trade.fromCryptoCurrency.name
            : null,
          fromCryptoIconUrl: trade.fromCryptoCurrency
            ? trade.fromCryptoCurrency.icon.url
            : null,
          toCryptoName: trade.toCryptoCurrency
            ? trade.toCryptoCurrency.name
            : null,
          toCryptoIconUrl: trade.toCryptoCurrency
            ? trade.toCryptoCurrency.icon.url
            : null,
          fromCreditCardNumber: trade.creditCardFrom
            ? trade.creditCardFrom.cardNumber
            : null,
          fromCreditCardIconUrl: trade.creditCardFrom
            ? trade.creditCardFrom.icon.url
            : null,
          toCreditCardNumber: trade.creditCardTo
            ? trade.creditCardTo.cardNumber
            : null,
          toCreditCardIconUrl: trade.creditCardTo
            ? trade.creditCardTo.icon.url
            : null,
          fromAmount: trade.fromAmount,
          toAmount: trade.toAmount,
          transactionNumber: trade.transactionNumber,
          approvalNumber: trade.approvalNumber,
          time: parseDate(new Date(trade.time)),
          feePrice: trade.fee,
        })
      ),
    };
  } else return null; //ne postoji korisnik sa zadanim user name i password
}

export async function getCreditCards() {
  try {
    var creditCards = await fetchGraphQLContentfulData(`
        query{
          creditCardsCollection(preview:false){
              items {
                cardNumber
                cardHolder
                icon{url}
                expDate
                securityCode
                dateAdded
            }
        }
    }
    `);
  } catch (error) {
    throw new Error(error);
  }

  return creditCards.data.creditCardsCollection.items.map((creditCard) => ({
    cardNumber: creditCard.cardNumber,
    cardHolder: creditCard.cardHolder,
    iconUrl: creditCard.icon.url,
    expDate: creditCard.expDate,
    securityCode: creditCard.securityCode,
    dateAdded: creditCard.dateAdded,
  }));
}

export async function getPaymentOptions() {
  try {
    var paymentOptions = await fetchGraphQLContentfulData(`
    query{
      paymentOptionsCollection(preview:false){
        items{
          name
          icon{url}
        }
      }
    }`);
  } catch (error) {
    throw new Error(error);
  }

  return paymentOptions.data.paymentOptionsCollection.items.map((option) => ({
    name: option.name,
    iconUrl: option.icon.url,
  }));
}
